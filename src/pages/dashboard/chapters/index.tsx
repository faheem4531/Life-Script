import DetailCard from "@/components/dashboardComponent/DetailCard";
import HomeSteps from "@/components/dashboardComponent/HomeSteps";
import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";

const Dashboard = () => {
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
          <Box sx={{ marginTop: "48px" }} className={styles.CardsContainer}>
            <DetailCard />
            <DetailCard />
            <DetailCard />
            <DetailCard />
            <DetailCard />
            <DetailCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
