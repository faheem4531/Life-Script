import React from 'react'

import styles from "@/styles/Dashboard.module.css"
import { Box } from '@mui/material'
import NavBar from '@/components/dashboardComponent/Navbar'
import SideBar from '@/components/dashboardComponent/Sidebar'
import HomeSteps from '@/components/dashboardComponent/HomeSteps'
import DetailCard from '@/components/dashboardComponent/DetailCard'

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden" }}>
      <NavBar />
      <Box sx={{ display: "flex", marginTop: "1px" }}>
        <Box sx={{ width: "220px" }}>
          <SideBar />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "1600px", height: "100%", padding: "36px 33px 100px", }}>
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
  )
}

export default Dashboard
