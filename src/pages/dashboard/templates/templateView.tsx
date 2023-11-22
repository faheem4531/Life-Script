import Layout from "@/components/Layout/Layout";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
// import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
// import AddQuestion from "@/pages/events/addQuestion";
import {
  createQuestion,
  getChapterbyId,
  selectChapter,
} from "@/store/slices/chatSlice";
import { Box, ButtonBase, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ModalImage from "@/_assets/png/view-template-modal.png"
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import fusionIcon from "../../../../public/Fusion.png";
import addIcon from "../../../../public/addicon.svg";
import Button from "@/components/button/Button";
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

  // const submitQuestion = (question: string) => {
  //   dispatch(
  //     createQuestion({
  //       text: question,
  //       status: "Progress",
  //       chapter: chapterId.toString(),
  //     })
  //   )
  //     .unwrap()
  //     .then(() => {
  //       toast.success("Question added successfully");
  //       dispatch(getChapterbyId({ id: chapterId.toString() }));
  //     })
  //     .catch(() => {
  //       toast.error("Failed to add question");
  //     });
  // };

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

  return (
    <>
      <Layout>
        <AddChapterName chapter={chapterName} chapterId={chapterId} title="templateView" />
        <Box
          sx={{
            margin: "35px auto",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Button
            image={addIcon}
            title="Use Template"
            background="#197065"
            borderRadius="55px"
            fontSize="20px"
            color="#fff"
            width="220px"
            padding="10px 0px"
            onClick={() => setOpenModal(true)}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "35px",
            minHeight: "60vh",
            borderRadius: { sm: "18px", xs: "5px" },
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
                    title="templateView"
                  />
                ))
              ) : (
                <NoQuestions />
              )}

              {allQuestions?.length > 0 && areAllCompleted(allQuestions) && (
                <Box
                  sx={{
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


      {/* Use Template Modal   */}
      <CustomizationDialog
        open={openModal}
        title=""
        handleClose={() => {
          setOpenModal(false);
        }}
        customStyles={{ backgroundColor: "auto" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Image alt="image" src={ModalImage} />
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#070707",
              margin: "40px 0"
            }}
          >
            Thank You!
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              color: "#070707", width: "400px", margin: "0 120px"
            }}
          >
            Template has been added to your chapters
          </Typography>

          <ButtonBase
            // onClick={} 
            sx={{
              width: "200px",
              height: "50px",
              borderRadius: "78px",
              color: "#fff",
              fontSize: "22px",
              bgcolor: "#197065",
              margin: "40px 0 30px",
              "&:hover": {
                color: "#fff",
                bgcolor: "#197065",
              },
            }}
          >
            Start editing
          </ButtonBase>

        </Box>

      </CustomizationDialog>
    </>
  );
};

export default chapterName;
