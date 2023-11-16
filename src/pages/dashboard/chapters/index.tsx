import Layout from "@/components/Layout/Layout";
import DetailCard from "@/components/dashboardComponent/DetailCard";
import HomeSteps from "@/components/dashboardComponent/HomeSteps";
import NoChapters from "@/components/dashboardComponent/noChapter";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import {
  createChapter,
  getChapters,
  selectChat,
} from "@/store/slices/chatSlice";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddChapter from "./addChapter";

const Dashboard = () => {
  const [chapterModal, setChapterModal] = useState(false);
  const [allChapters, setAllChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteChapter, setDeleteChapter] = useState(false);
  const [deleteChapterId, setDeleteChapterId] = useState("");
  const dispatch: any = useDispatch();
  const chapters = useSelector(selectChat);
  const router = useRouter();

  const handleDeleteChapter = () => {
    console.log("delete chapter");
    setDeleteChapter(false);
  };

  const submitChapter = (chapter: string) => {
    dispatch(createChapter({ title: chapter }))
      .then(() => {
        toast.success("Chapter added successfully");
        dispatch(getChapters());
      })
      .catch(() => toast.error("Failed to add chapter"));
  };

  const handleCardClick = (data: { option: string; chapterId: string }) => {
    if (data?.option === "Delete") {
      setDeleteChapter(true);
      setDeleteChapterId(data?.chapterId);
    } else {
      router.push(
        `/dashboard/chapters/chapterName?chapterId=${data?.chapterId}`
      );
    }
  };

  useEffect(() => {
    dispatch(getChapters())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (chapters) {
      setAllChapters(chapters);
    }
  }, [chapters]);

  return (
    <>
      <Layout>
        <HomeSteps />
        {allChapters?.length > 0 ? (
          <Box
            className={styles.CardsContainer}
            sx={{
              marginTop: { sm: "48px", xs: "25px" },
            }}
          >
            {allChapters.map((chapter, index) => (
              <DetailCard
                key={index}
                chapter={chapter}
                deleteFunc={(data) => {
                  handleCardClick(data);
                }}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: { sm: "48px", xs: "25px" },
            }}
          >
            <HomeSteps />
            {loading ? (
              <Box
                sx={{
                  marginTop: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : allChapters?.length > 0 ? (
              <Box
                className={styles.CardsContainer}
                sx={{
                  marginTop: "48px",
                }}
              >
                {allChapters.map((chapter, index) => (
                  <DetailCard
                    key={index}
                    chapter={chapter}
                    deleteFunc={(data) => {
                      handleCardClick(data);
                    }}
                  />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  marginTop: "48px",
                }}
              >
                <NoChapters />
              </Box>
            )}
          </Box>
        )}
      </Layout>

      <CustomizationDialog
        open={chapterModal}
        title="Add new chapter"
        handleClose={() => {
          setChapterModal(false);
        }}
        customStyles={{ backgroundColor: "auto" }}
      >
        <AddChapter
          chapterData={(chapter: string) => {
            setChapterModal(false);
            submitChapter(chapter);
          }}
        />
      </CustomizationDialog>
      <TransitionsDialog
        open={deleteChapter}
        heading="Delete Chapter"
        description="Are you sure you want to delete this chapter"
        cancel={() => setDeleteChapter(false)}
        proceed={handleDeleteChapter}
      />
    </>
  );
};

export default Dashboard;
