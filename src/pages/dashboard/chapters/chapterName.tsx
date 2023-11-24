"use client";
import Layout from "@/components/Layout/Layout";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
// import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import ModalImage from "@/_assets/png/view-template-modal.png";
import FloatButton from "@/components/button/FloatButton";
import LinearProgressBar from "@/components/dashboardComponent/LinearProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import AddQuestion from "@/pages/events/addQuestion";
import RichTextViewer from "@/pages/events/response";
import {
  chapterResponse,
  createQuestion,
  getChapterbyId,
  narrativeFusion,
  selectChapter,
} from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import addIcon from "../../../../public/addicon.svg";

const chapterName = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fusionModal, setFusionModal] = useState(false);
  const [gptResponse, setGptResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allQuestions, setAllQuestions] = useState([]);
  const [questionChanged, setQuestionChanged] = useState(false);
  const [chapterName, setChapterName] = useState("");
  const [fusionLoading, setFusionLoading] = useState(false);
  const question = useSelector(selectChapter);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { chapterId, percentage } = router.query;

  const submitQuestion = (question: string) => {
    dispatch(
      createQuestion({
        text: question,
        status: "Progress",
        chapter: chapterId.toString(),
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Question added successfully");
        dispatch(getChapterbyId({ id: chapterId.toString() }));
      })
      .catch(() => {
        toast.error("Failed to add question");
      });
  };

  function areAllCompleted(questions) {
    return questions.every((question) => question.status === "Completed");
  }

  useEffect(() => {
    chapterId &&
      dispatch(getChapterbyId({ id: chapterId.toString() }))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
  }, [chapterId, questionChanged]);

  useEffect(() => {
    setAllQuestions(question.questions);
    setChapterName(question.title);
  }, [question]);

  const handleNarrativeFusion = () => {
    dispatch(narrativeFusion({ chapterId: chapterId, language: "en" }))
      .unwrap()
      .then(() => {
        toast.success("Narrative fusion completed");
        dispatch(chapterResponse({ chapterId: chapterId.toString() }))
          .unwrap()
          .then((res) => {
            console.log("respon111", res);
            setGptResponse(res.join(""));
            setFusionModal(true);
          });
      })
      .catch(() => {
        setFusionLoading(false);
        toast.error("Narrative fusion failed");
      });
  };

  return (
    <>
      <Layout>
        <AddChapterName
          title="chapterName"
          chapter={chapterName}
          chapterId={chapterId}
        />
        <LinearProgressBar percentage={percentage} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: { sm: "30px 46px 16px 37px", xs: "25px 20px 100px" },
            marginTop: "10px",
            minHeight: "60vh",
            borderRadius: { sm: "18px", xs: "5px" },
          }}
        >
          {/* <Box>
            <ProgressBar />
          </Box> */}
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
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              Questions
            </Typography>
            <Box
              display={"flex"}
              onClick={() => setOpenModal(true)}
              sx={{ gap: { sm: 2, xs: 1 } }}
            >
              <Box>
                <Image src={addIcon} alt="addicon" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#197065E5",
                    fontSize: "18px",
                    fontWeight: 600,
                    display: { sm: "block", xs: "none" },
                  }}
                >
                  Add new question
                </Typography>
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
            <>
              {allQuestions?.length > 0 ? (
                allQuestions.map((question, index) => (
                  <Questions
                    key={question._id}
                    question={question}
                    title="chapterName"
                    number={index + 1}
                    questionChanged={() => setQuestionChanged(!questionChanged)}
                    answerClick={(text) =>
                      router.push(`/events?questionId=${text}`)
                    }
                  />
                ))
              ) : (
                <NoQuestions />
              )}

              {/* {allQuestions?.length > 0 && areAllCompleted(allQuestions) && (
                <Box
                  onClick={handleNarrativeFusion}
                  sx={{
                    cursor: "pointer",
                    marginTop: 5,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={fusionIcon}
                    alt="fusion"
                    width={300}
                    height={70}
                  />
                </Box>
              )} */}
            </>
          )}
        </Box>
        <Box
          onClick={() => {
            if (areAllCompleted(allQuestions) === true && !fusionLoading) {
              setFusionLoading(true);
              handleNarrativeFusion();
            }
          }}
        >
          <FloatButton />
        </Box>
      </Layout>
      <CustomizationDialog
        open={fusionModal}
        title="GPT Response"
        handleClose={() => {
          setFusionModal(false);
        }}
        customStyles={{
          backgroundColor: "auto",
          padding: "5px",
          maxWidth: "40vw",
        }}
      >
        <RichTextViewer htmlContent={gptResponse} />
      </CustomizationDialog>
      <CustomizationDialog
        open={openModal}
        title=""
        handleClose={() => {
          setOpenModal(false);
        }}
        customStyles={{
          backgroundColor: "auto",
          textAlign: "center",
          color: "#070707",
          fontSize: "30px",
        }}
      >
        <Box>
          <Image src={ModalImage} width={91} height={60} alt="logo" />
        </Box>
        <Typography sx={{ fontSize: "30px" }}>Add New Question</Typography>
        <Box sx={{}}>
          <AddQuestion
            questionData={(question: string) => {
              setOpenModal(false);
              submitQuestion(question);
            }}
          />
        </Box>
      </CustomizationDialog>
    </>
  );
};

export default chapterName;
