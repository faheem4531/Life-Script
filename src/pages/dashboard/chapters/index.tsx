import DetailCard from "@/components/dashboardComponent/DetailCard";
import HomeSteps from "@/components/dashboardComponent/HomeSteps";
import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import NoChapters from "@/components/dashboardComponent/noChapter";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { createChapter, getChapters } from "@/store/slices/chatSlice";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddChapter from "./addChapter";

const Dashboard = () => {
  const [chapterModal, setChapterModal] = useState(false);
  const [allChapters, setAllChapters] = useState([]);
  const dispatch: any = useDispatch();
  const router = useRouter();
  const submitChapter = (chapter: string) => {
    console.log("chapterrr", chapter);
    dispatch(createChapter({ title: chapter }));
  };

  useEffect(() => {
    dispatch(getChapters())
      .unwrap()
      .then((res: any) => {
        console.log("res", res);
        setAllChapters(res);
      })
      .catch(() => {});
  }, []);

  return (
    <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden" }}>
      <Box sx={{ position: "fixed", right: "0", left: "0", top: "0", zIndex: "2" }}>
        <NavBar />
      </Box>
      <Box sx={{ marginTop: "1px", display: "flex", mt: "70px" }}>
        <Box sx={{ width: "220px", backgroundColor: "#197065", position: "fixed", bottom: "0", top: "70px", zIndex: "2" }}>
          <SideBar />
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1600px",
            height: "100%",
            padding: "36px 33px 100px",
            marginLeft: "220px",
          }}
          className={styles.subContainer}
        >
          <HomeSteps />
          {allChapters ? (
              <Box
                className={styles.CardsContainer}
                sx={{
                  marginTop: "48px",
                }}
              >
                {allChapters.map((chapter, index) => (
                  <Box
                    onClick={() => {
                      router.push(
                        `/dashboard/chapters/chapterName?chapterId=${chapter._id}`
                      );
                    }}
                  >
                    <DetailCard key={index} chapter={chapter} />
                  </Box>
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
      </Box>
      <CustomizationDialog
        open={chapterModal}
        title="Add new question"
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
    </>
  );
};

export default Dashboard;
