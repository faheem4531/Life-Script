import DetailCard from "@/components/dashboardComponent/DetailCard";
import HomeSteps from "@/components/dashboardComponent/HomeSteps";
import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden" }}>
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
            padding: "36px 33px 100px",
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
