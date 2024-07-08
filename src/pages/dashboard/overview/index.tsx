import Layout from "@/components/Layout/Layout";
import Profile from "@/components/dashboardComponent/OverviewProfile";
import {
  PrintBook,
  ViewBook,
  ViewTree,
} from "@/components/dashboardComponent/OverviewSubComponents";
import WelcomeOverview from "@/components/dashboardComponent/OverviewWelcome";
import TimeTracker from "@/components/dashboardComponent/TimeTracker";
import { Box } from "@mui/material";
import { useState } from "react";

const OverView = () => {

  const [achievements, setAchievements] = useState({
    words: 0,
    questions: 0,
    chapters: 0,
  });


  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: { xl: "50px", xs: "20px" },
          p: { sm: "0px", xs: "10px" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <WelcomeOverview />
          <Box className="step1">
            <TimeTracker
              onChange={(obj) => setAchievements(obj)}
            />
          </Box>
          <Box sx={{ margin: "20px 0", display: "flex", gap: "17px" }}>
            <ViewBook />
            <ViewTree />
          </Box>
          <Box >
            <PrintBook />
          </Box>
        </Box>
        <Box >
          <Profile data={achievements} />
        </Box>
      </Box>
    </Layout>
  );
};

export default OverView;
