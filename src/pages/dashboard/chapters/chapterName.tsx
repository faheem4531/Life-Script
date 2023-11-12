import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NavBar from "@/components/dashboardComponent/Navbar";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import SideBar from "@/components/dashboardComponent/Sidebar";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import AddQuestion from "@/pages/events/addQuestion";
import {
  createQuestion,
  getChapterbyId,
  selectChapter,
} from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import addIcon from "../../../../public/addicon.svg";

const chapterName = () => {
  const [openModal, setOpenModal] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const question = useSelector(selectChapter);
  console.log("qqq", question);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { chapterId } = router.query;

  const submitQuestion = (question: string) => {
    dispatch(createQuestion({ text: question, chapter: chapterId.toString() }))
      .unwrap()
      .then(() => {
        toast.success("Question added successfully");
        dispatch(getChapterbyId({ id: chapterId.toString() }));
      })
      .catch(() => {
        toast.error("Failed to add question");
      });
  };

  useEffect(() => {
    chapterId && dispatch(getChapterbyId({ id: chapterId.toString() }));
  }, [chapterId]);

  useEffect(() => {
    setAllQuestions(question.questions);
    setChapterName(question.title);
  }, [question]);

  return (
    <>
      <Box sx={{ overflowX: "hidden", bgcolor: "#FFF9F0" }}>
        <Box
          sx={{
            position: "fixed",
            right: "0",
            left: "0",
            top: "0",
            zIndex: "2",
          }}
        >
          <NavBar />
        </Box>
        <Box sx={{ marginTop: "1px", display: "flex", mt: "70px" }}>
          <Box
            sx={{
              width: "220px",
              backgroundColor: "#197065",
              position: "fixed",
              bottom: "0",
              top: "70px",
              zIndex: "2",
            }}
          >
            <SideBar />
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "1600px",
              height: "100%",
              padding: "10px 33px 20px",
              marginLeft: "220px",
            }}
          >
            <AddChapterName chapter={chapterName} chapterId={chapterId} />
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "55px 46px 250px 37px",
                marginTop: "26px",
                borderRadius: "18px",
              }}
            >
              <Box sx={{ marginTop: "35px" }}>
                <ProgressBar />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Questions
                  </Typography>
                </Box>
                <Box display={"flex"} sx={{ gap: 2 }}>
                  {/* <Box sx={{ mr: "5px", mt: 2 }}>
                    <Image src={arrow} alt="" height={150} />
                  </Box> */}
                  <Box
                    onClick={() => setOpenModal(true)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Image src={addIcon} alt="addicon" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        mt: 1,
                        color: "#197065E5",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      Add new question
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {allQuestions ? (
                allQuestions.map((question, index) => (
                  <Questions
                    key={question._id}
                    question={question}
                    number={index + 1}
                  />
                ))
              ) : (
                <NoQuestions />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
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
