import DetailCard from "@/components/dashboardComponent/DetailCard";
import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import ChooseTemplate from "@/components/dashboardComponent/ChooseTemplate";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";
import Layout from "@/components/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Box className={styles.subContainer}>
        <ChooseTemplate />
        <Box sx={{ marginTop: { sm: "48px", xs: "30px" } }} className={styles.CardsContainer}>
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
