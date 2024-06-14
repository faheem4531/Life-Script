"use client";
import Layout from "@/components/Layout/Layout";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
// import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import ModalImage from "@/_assets/png/view-template-modal.png";
import Frame from "@/_assets/svg/Frame.svg";
import GlobelBtn from "@/components/button/Button";
import FloatButton from "@/components/button/FloatButton";
import LinearProgressBar from "@/components/dashboardComponent/LinearProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import Tooltip from "@/components/dashboardComponent/Tooltip";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import AddQuestion from "@/pages/events/addQuestion";
import RichTextViewer from "@/pages/events/response";
import { toast } from "react-toastify";
import socket from "@/services/socketManager";
import {
  createQuestion,
  getChapterbyId,
  getChapters,
  getOpenaiQuestion,
  getaiQuestions,
  openaiQuestion,
  selectChapter,
  simpleChapter,
  createChapter,
  deleteSelectedChapter,
  selectAllChapters,
  updateChapter,
} from "@/store/slices/chatSlice";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../../../public/checkIcon.png";
import addIcon from "@/_assets/svg/AddIcon.svg";
import backArrow from "@/_assets/svg/left.svg";
import suggestionIcon from "@/_assets/svg/suggestionsIcon.svg";
import QuestionComponent from "./components/AIGeneration";
import AddChapter from "./addChapter";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TooltipTab from "@/__webComponents/tooltip/Tooltip";


const chapterName = () => {
  const [openModal, setOpenModal] = useState(false);
  const [gptSocket, setgptSocket] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  // console.log("ispremium", isPremium);
  const [buyPremium, setBuyPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allQuestionsLoading, setAllQuestionsLoading] = useState(true);
  const [allQuestions, setAllQuestions] = useState([]);
  const [aiQuestions, setaiQuestions] = useState([]);
  const [showFusion, setShowFusion] = useState(false);
  const [questionChanged, setQuestionChanged] = useState(false);
  const [chapterName, setChapterName] = useState("");
  const [chapterNameModal, setChapterNameModal] = useState("");

  const [aiGeneration, setAiGeneration] = useState(false);
  const [emailQuestion, setEmailQuestion] = useState({
    questionTitle: "",
    questionId: "",
  });
  const [chapterModal, setChapterModal] = useState(false);
  const [updateChapterModal, setUpdateChapterModal] = useState(false);
  const [narrativeRefuse, setNarrativeRefuse] = useState(false); // narrative
  const question = useSelector(selectChapter);
  const router = useRouter();
  const [chapterTitle, setChapterTitle] = useState("");
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const dispatch: any = useDispatch();
  const { chapterId, openAiQuestionId } = router.query;
  const [mailQuestionModal, setMailQuestionModal] = useState(false);
  const [openCustomizationDialog, setOpenCustomizationDialog] = useState(false);
  const [StarterChapter, setStarterChapter] = useState(false);
  const percentage = calculateCompletionPercentage(question?.questions);
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);

  function isNotOlderThan7DaysFromCurrentDate(timeString: string): boolean {
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    // const sevenDaysInMilliseconds = 20000 * 60;
    const inputDate = new Date(timeString);
    const timeDifference = new Date().getTime() - inputDate.getTime();
    return timeDifference < sevenDaysInMilliseconds;
  }

  //check open ai mail
  useEffect(() => {
    if (openAiQuestionId && chapterId) {
      dispatch(
        getOpenaiQuestion({
          chapterId: chapterId,
          questionId: openAiQuestionId,
        })
      )
        .unwrap()
        .then((res) => {
          setEmailQuestion({
            ...emailQuestion,
            questionTitle: res.title,
            questionId: res.id,
          });
          setMailQuestionModal(true);
        });
    }
  }, [openAiQuestionId]);

  const handleCancel = () => {
    if (!isPremium) {
      setBuyPremium(true);
      setOpenCustomizationDialog(false);
    } else {
      if (areAllCompleted(allQuestions) === true) {
        gptSocketCall();
        setOpenCustomizationDialog(false);
      }
    }
  };

  const proceedFusion = () => {
    setOpenCustomizationDialog(false);

    router.push(
      `/dashboard/narrative/loading?chapterId=${chapterId}&openai=${false}`
    );
    dispatch(simpleChapter({ chapterId: chapterId?.toString() }));
  };

  function calculateCompletionPercentage(array) {
    if (array?.length === 0) {
      return 0;
    }

    const completedCount = array?.filter(
      (item) => item.status === "Completed"
    ).length;
    // Calculate the percentage
    const percentage = (completedCount / array?.length) * 100;

    return percentage;
  }

  const submitQuestion = (question: string) => {
    setAllQuestionsLoading(true);
    dispatch(
      createQuestion({
        text: question,
        status: "Progress",
        chapter: chapterId?.toString(),
      })
    )
      .unwrap()
      .then((res) => {
        dispatch(getChapterbyId({ id: chapterId?.toString() }));
        setAllQuestionsLoading(false);
      })
      .catch(() => {
        setAllQuestionsLoading(false);
      });
  };

  function areAllCompleted(questions) {
    return questions.every((question) => question.status === "Completed");
  }

  //gpt through socket
  const gptSocketCall = () => {
    // Join the room when the component mounts
    socket.emit("chatgpt", {
      token: localStorage.getItem("token"),
      chapterId: chapterId?.toString(),
      language: "en",
    });
    setgptSocket(true);
  };

  useEffect(() => {
    chapterId &&
      dispatch(getChapterbyId({ id: chapterId?.toString() }))
        .then(() => {
          setLoading(false);
          setAllQuestionsLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setAllQuestionsLoading(false);
        });

    dispatch(getChapters()).then(({ payload }) => {
      const [chapter] = payload.filter(
        (chapter) => chapter._id === chapterId?.toString()
      );

      if (
        chapter !== undefined &&
        (chapter.introductionChapter || chapter.startDefaultChapter)
      ) {
        setShowFusion(true);
      }

      // console.log("JKJE", chatpter);
    });
    // const fff = chapters.filter((chapter)=> chapter._id === chapterId?.toString() )
    // console.log("KKK", fff, chapters);
  }, [chapterId, questionChanged]);

  // useEffect(()=> {
  //   // setShowFusion()

  // }, [chapters])

  useEffect(() => {
    setAllQuestions(question?.questions);
    setaiQuestions(question?.openAiQuestion);
    setChapterName(question?.title);
    setChapterNameModal(question?.title);

    // if (startDefaultChapter && introductionChapter) {}
    // setShowFusion(startDefaultChapter && introductionChapter)

    if (question?.questions?.length > 1) {
      dispatch(getaiQuestions({ chapterId: chapterId.toString() }));
    }
  }, [question]);

  const handleFloatButtonClick = () => {
    const isAnyQuestionInProgress = allQuestions?.some(
      (question) => question.status === "Progress"
    );

    if (!question?.status && !question?.compilingStatus) {
      if (!isAnyQuestionInProgress) {
        setOpenCustomizationDialog(true);
      } else {
        setNarrativeRefuse(true);
        setTimeout(() => {
          setNarrativeRefuse(false);
        }, 6000);
      }
    }
  };

  const handleAddQuestion = (questionId) => {
    setAiGeneration(false);
    setMailQuestionModal(false);
    dispatch(
      openaiQuestion({
        chapterId: chapterId?.toString(),
        flag: "true",
        id: questionId,
      })
    ).then(({ payload }) => {
      dispatch(getChapterbyId({ id: chapterId?.toString() })).then(() => {
        if (emailQuestion?.questionTitle) {
          setEmailQuestion({ questionTitle: "", questionId: "" });
          router.push(`/events?questionId=${payload._id}`);
        }
      });
    });
  };

  const handleSkip = (questionId) => {
    dispatch(
      openaiQuestion({
        chapterId: chapterId?.toString(),
        flag: "false",
        id: questionId,
      })
    )
      .unwrap()
      .then(() => {
        if (emailQuestion?.questionTitle) {
          setEmailQuestion({ questionTitle: "", questionId: "" });
          dispatch(getChapterbyId({ id: chapterId?.toString() }));
          router.push(`/dashboard/chapters/chapterName?chapterId=${chapterId}`);
        }
      });
  };
  const handleEndQuestions = (questionId) => {
    setAiGeneration(false);
    dispatch(
      openaiQuestion({
        chapterId: chapterId?.toString(),
        flag: "false",
        id: questionId,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getChapterbyId({ id: chapterId?.toString() }));
      });
  };

  useEffect(() => {
    if (
      question?.introductionChapter === true ||
      question?.startDefaultChapter === true
    ) {
      setStarterChapter(true);
    } else {
      setStarterChapter(false);
    }
  }, [question]);

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      const accessRole = decodedToken?.accessRole;
      if (accessRole === "PremiumPlan" || accessRole === "GoldPlan") {
        setIsPremium(true);
      } else {
        setIsPremium(false);
      }
    }
  }, []);

  const saveChapterName = () => {
    dispatch(updateChapter({ title: chapterNameModal, id: chapterId }))
      .then(() => {
        toast.success("Chapter name updated successfully");
      })
      .catch(() => {
        toast.error("Failed to update chapter name");
      });

    setChapterName(chapterNameModal);
    setUpdateChapterModal(false);
  };

  return (
    <>
      <Layout>
        <Box>
          <Box
            sx={{
              display: { sm: "block", xs: "" },
              m: { sm: "0", xs: "20px 20px 0" },
            }}
          >
            <AddChapterName
              editChapter={setUpdateChapterModal}
              title="chapterName"
              chapter={chapterName}
              chapterId={chapterId}
              StarterChapter={StarterChapter}
            />
            <LinearProgressBar percentage={percentage} />
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              // padding: {
              //   md: "0px 46px 16px 37px",
              //   sm: "0px 30px 10px 30px",
              //   xs: "10px 10px 10px",
              // },
              marginTop: "10px",
              height: {
                sm: "calc(100vh - 340px)",
                xs: "calc(100vh - 150px)",
              },
              borderRadius: { sm: "18px", xs: "5px" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: { xs: "15px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#30422E",
                  display: {
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                {t("ChName.Questions")}
              </Typography>
              <Box
                sx={{
                  gap: "10px",
                  display: "flex",
                  justifyContent: { xs: "space-between", sm: "end" },
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "wrap",
                  pb: "10px",
                  m: { sm: "0", xs: "20px 20px 0" },
                  position: "relative"
                }}
              >
                
                  <Box>
                    <Box
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                       <InfoOutlinedIcon sx={{color:"#7F886B"}}/>
                    </Box>

                    {hover && (
                      <Box
                        sx={{
                          display: {
                            md: "block",
                            xs: "block",
                          },
                          // position: "absolute", 
                          // mt: 1 
                        }}
                      >
                        <TooltipTab
                          title="Suggested Questions"
                          text={`Question suggestions will appear once you have added 2 questions of your own. To get the best suggestions, make sure that the name of your chapter and the first two questions are as detailed and as relevant to the chapter as possible.`}
                          transform="none"
                          top={undefined} left={undefined} bottom={undefined} right={undefined} position={"absolute"} />

                      </Box>
                    )}
                  </Box>
          
                {aiQuestions?.length > 0 && (
                  <GlobelBtn
                    image={suggestionIcon}
                    btnText={`${t("ChName.Suggestion")}`}
                    onClick={() => !StarterChapter && setAiGeneration(true)}
                    width={"165px"}
                    p="11px 0"
                    disabled={StarterChapter}
                  />
                )}
                <Box>
                  <GlobelBtn
                    image={addIcon}
                    btnText={`${t("ChName.AddQuestions")}`}
                    onClick={() => !StarterChapter && setOpenModal(true)}
                    width={"190px"}
                    p="11px 0"
                    disabled={StarterChapter}
                  />
                </Box>
              </Box>
            </Box>

            {loading ? (
              <Box
                sx={{
                  marginTop: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Box
                sx={{
                  overflowY: "scroll",
                  flex: "1",
                  "&::-webkit-scrollbar": { display: "none" },
                  pb: "100px",
                }}
              >
                {allQuestionsLoading ? (
                  <Box
                    sx={{
                      marginTop: "8%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <Box>
                    {allQuestions?.length > 0 ? (
                      allQuestions.map((question, index) => (
                        <Box key={question._id}>
                          <Questions
                            key={question._id}
                            question={question}
                            title="chapterName"
                            number={index + 1}
                            questionChanged={() =>
                              setQuestionChanged(!questionChanged)
                            }
                            answerClick={(text) =>
                              router.push(`/events?questionId=${text}`)
                            }
                            StarterChapter={StarterChapter}
                          />
                        </Box>
                      ))
                    ) : (
                      <NoQuestions />
                    )}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {allQuestions?.length > 0 && !showFusion && (
            <Box>
              <FloatButton
                onClick={() => {
                  if (
                    StarterChapter &&
                    allQuestions?.some(
                      (question) => question.status === "Progress"
                    )
                  ) {
                    setNarrativeRefuse(true);
                  } else if (
                    StarterChapter &&
                    !allQuestions?.some(
                      (question) => question.status === "Progress"
                    )
                  ) {
                    proceedFusion();
                  } else {
                    handleFloatButtonClick();
                  }
                }}
                narrativeRefuse={narrativeRefuse}
              />
              {/* Refuse Narative  */}

              {narrativeRefuse && (
                <Box
                  sx={{
                    display: {
                      md: "block",
                      xs: "none",
                    },
                  }}
                >
                  <Tooltip
                    title={`${t("ChName.tooltip")}`}
                    text={`${t("ChName.description")}`}
                  />
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Layout>

      <CustomizationDialog
        open={gptSocket}
        title=""
        handleClose={() => {
          setgptSocket(false);
        }}
        customStyles={{
          backgroundColor: "#f3ecda",
          textAlign: "center",
          color: "#30422E",
          fontSize: "30px",
        }}
      >
        <Box sx={{ textAlign: "center", p: "20px" }}>
          <Box
            sx={{
              width: { md: "91.562px", sm: "66.54px", xs: "41.709px" },
              height: { md: "60.005px", sm: "43.607px", xs: "27.334px" },
              margin: "auto",
            }}
          >
            <Image
              alt="image"
              src={Frame}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { md: "22px", sm: "21.679px", xs: "15.508px" },
              fontWeight: 700,
              color: "#30422e",
              margin: "15px 0",
            }}
          >
            {t("ChName.thankYou")}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#30422e",
              // width: "400px",
            }}
          >
            {t("ChName.TYDescription")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
            }}
          >
            <GlobelBtn
              btnText={`${t("ChName.ok")}`}
              bgColor="#e1693b"
              color="#fff"
              // border="1px solid #197065"
              onClick={() => {
                router.push("/dashboard/chapters");
                setgptSocket(false);
              }}
            />
          </Box>
        </Box>
      </CustomizationDialog>

      <TransitionsDialog
        open={openCustomizationDialog}
        heading={`${t("ChName.NF")}`}
        description={`${t("ChName.NFDes")}`}
        cancel={handleCancel}
        proceed={proceedFusion}
        proceedText={`${t("ChName.NFOriginBtn")}`} // Customize the text for the "Yes" button
        cancelText={`${t("ChName.NFuseBtn")}`} // Customize the text for the "No" button
        closeModal={() => setOpenCustomizationDialog(false)}
      />

      {/* Add new Question  */}
      <CustomizationDialog
        open={openModal}
        title=""
        handleClose={() => {
          setOpenModal(false);
        }}
        customStyles={{
          backgroundColor: "#f3ecda",
          textAlign: "center",
          color: "#30422E",
          fontSize: "30px",
        }}
      >
        <Box
          sx={{
            width: { md: "91.562px", sm: "66.54px", xs: "41.709px" },
            height: { md: "60.005px", sm: "43.607px", xs: "27.334px" },
            margin: "auto",
          }}
        >
          <Image
            alt="image"
            src={Frame}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { md: "24px", sm: "22px", xs: "18px" },
            fontWeight: "700",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          {t("ChName.AddNewQues")}
        </Typography>
        <Box sx={{}}>
          <AddQuestion
            questionData={(question: string) => {
              setOpenModal(false);
              submitQuestion(question);
            }}
            btnText={`${t("ChName.AddQuesBtn")}`}
          />
        </Box>
      </CustomizationDialog>

      <CustomizationDialog
        open={aiGeneration}
        title=""
        handleClose={() => {
          setAiGeneration(false);
          dispatch(getChapterbyId({ id: chapterId?.toString() }));
        }}
        customStyles={{
          backgroundColor: "#f3ecda",
          textAlign: "center",
          color: "#30422E",
          fontSize: "30px",
        }}
      >
        <Box
          sx={{
            width: { md: "91.562px", sm: "66.54px", xs: "41.709px" },
            height: { md: "60.005px", sm: "43.607px", xs: "27.334px" },
            margin: "auto",
          }}
        >
          <Image
            alt="image"
            src={Frame}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <QuestionComponent
          questions={aiQuestions}
          handleNextQuestion={handleSkip}
          Proceed={handleAddQuestion}
          endQuestion={handleEndQuestions}
        />
      </CustomizationDialog>
      <TransitionsDialog
        open={mailQuestionModal}
        heading={`${t("ChName.AIGenQues")}`}
        proceedText={`${t("ChName.AIAddToChBtn")}`}
        cancelText={`${t("ChName.AISkipBtn")}`}
        description={emailQuestion.questionTitle}
        cancel={() => {
          handleSkip(emailQuestion.questionId);
          setMailQuestionModal(false);
        }}
        closeModal={() => {
          handleSkip(emailQuestion.questionId);
          setMailQuestionModal(false);
        }}
        proceed={() => handleAddQuestion(emailQuestion.questionId)}
      />
      <TransitionsDialog
        open={buyPremium}
        heading={`${t("richText.ByPreHeading")}`}
        description={`${t("richText.PreDes")}`}
        cancel={() => {
          setBuyPremium(false);
        }}
        closeModal={() => {
          setBuyPremium(false);
        }}
        proceed={() => router.push("/dashboard/SubscribePlans")}
      />

      {/* edit chapter name Modal */}

      <CustomizationDialog
        open={updateChapterModal}
        title={""}
        handleClose={() => {
          setUpdateChapterModal(false);
        }}
        customStyles={{ backgroundColor: "#f3ecda", textAlign: "center" }}
      >
        {/* <Box></Box> */}
        <Box
          sx={{
            width: { md: "130px", sm: "100px", xs: "70px" },
            margin: "auto",
          }}
        >
          <Image
            alt="image"
            src={Frame}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { md: "22px", sm: "21.679px", xs: "15.508px" },
            color: "#30422e",
            mt: "15px",
          }}
        >
          {t("ChModals.updateChName")}
        </Typography>

        <TextField
          variant="outlined"
          value={chapterNameModal}
          onChange={(e: any) => setChapterNameModal(e.target.value)}
          disabled={StarterChapter}
          placeholder="My Adventurous Life"
          sx={{
            margin: "10px 0 30px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              backgroundColor: "white",
            },
            width: { sm: "300px", lg: "390px" },
          }}
        />
        <Box sx={{ margin: "0 auto 20px", width: "180px" }}>
          <GlobelBtn
            disabled={!chapterNameModal || chapterNameModal === chapterName}
            btnText={"Save"}
            bgColor="#e1693b"
            color="#fff"
            width="180px"
            onClick={saveChapterName}
          />
        </Box>
      </CustomizationDialog>
    </>
  );
};

export default chapterName;
