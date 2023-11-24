import Layout from "@/components/Layout/Layout"
import Profile from "@/components/dashboardComponent/OverviewProfile"
import { PrintBook, ViewBook, ViewTree } from "@/components/dashboardComponent/OverviewSubComponents"
import WelcomeOverview from "@/components/dashboardComponent/OverviewWelcome"
import TimeTracker from "@/components/dashboardComponent/TimeTracker"
import { Box } from "@mui/material"


const OverView = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", columnGap: { xl: "50px", md: "30px", sm: "10" } }}>
        <Box sx={{ width: "100%" }}>
          <WelcomeOverview />
          <TimeTracker />
          <Box sx={{ margin: "20px 0", display: "flex", columnGap: "17px" }}>
            <ViewBook />
            <ViewTree />
          </Box>
          <PrintBook />
        </Box>
        <Profile />
      </Box>
    </Layout>
  )
}

export default OverView