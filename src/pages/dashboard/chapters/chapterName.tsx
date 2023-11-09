import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NavBar from "@/components/dashboardComponent/Navbar";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import AddQuestion from "@/pages/events/addQuestion";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import addIcon from "../../../../public/addicon.svg";
import arrow from "../../../../public/arrow-cropped.svg";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        <NavBar />
        <Box sx={{ marginTop: "1px", display: "flex" }}>
          <Box sx={{ width: "220px", backgroundColor: "#197065" }}>
            <SideBar />
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "1600px",
              height: "100%",
              padding: "10px 33px 20px",
            }}
          >
            <AddChapterName />
            <Box sx={{ backgroundColor: "white" }}>
              <Box sx={{ marginTop: "35px" }}>
                <ProgressBar />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                    Questions
                  </Typography>
                </Box>
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Box sx={{ mr: 2, mt: 2 }}>
                    <Image src={arrow} alt="" height={150} />
                  </Box>
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
              <NoQuestions />
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
        <AddQuestion />
      </CustomizationDialog>
    </>
  );
};

export default Dashboard;
