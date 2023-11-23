import Layout from "@/components/Layout/Layout";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
// import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import AddQuestion from "@/pages/events/addQuestion";
import {
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
import fusionIcon from "../../../../public/Fusion.png";
import addIcon from "../../../../public/addicon.svg";

const chapterName = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allQuestions, setAllQuestions] = useState([]);
  const [questionChanged, setQuestionChanged] = useState(false);
  const [chapterName, setChapterName] = useState("");
  const question = useSelector(selectChapter);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { chapterId } = router.query;

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
      .then(() => toast.success("Narrative fusion completed"))
      .catch(() => toast.error("Narrative fusion failed"));
  };

  return (
    <>
      <Layout>
        <AddChapterName chapter={chapterName} chapterId={chapterId} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: { sm: "55px 46px 16px 37px", xs: "30px 20px 100px" },
            marginTop: "26px",
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

              {allQuestions?.length > 0 && areAllCompleted(allQuestions) && (
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
              )}
            </>
          )}
        </Box>
      </Layout>

      <CustomizationDialog
        open={openModal}
        title="Add new question"
        handleClose={() => {
          setOpenModal(false);
        }}
        customStyles={{ backgroundColor: "auto" }}
      >
        <AddQuestion
          questionData={(question: string) => {
            setOpenModal(false);
            submitQuestion(question);
          }}
        />
      </CustomizationDialog>
    </>
  );
};

export default chapterName;
