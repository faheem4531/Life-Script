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

const OverView = () => {
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
          <TimeTracker />
          <Box sx={{ margin: "20px 0", display: "flex", gap: "17px" }}>
            <ViewBook />
            <ViewTree />
          </Box>
          <PrintBook />
        </Box>
        <Profile />
      </Box>
    </Layout>
  );
};

export default OverView;
