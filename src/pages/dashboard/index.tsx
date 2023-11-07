import React from 'react'
import styles from "@/styles/Dashboard.module.css"
import NavBar from '@/components/dashboardComponent/Navbar'
import SideBar from '@/components/dashboardComponent/Sidebar'
import { Box } from '@mui/material'
const Dashboard = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ display: "flex", marginTop: "1px" }}>
        <SideBar />
      </Box>
    </Box>
  )
}

export default Dashboard
