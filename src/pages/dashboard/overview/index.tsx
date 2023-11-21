import Layout from "@/components/Layout/Layout"
import Profile from "@/components/dashboardComponent/OverviewProfile"
import { Box } from "@mui/material"


const OverView = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", columnGap: { xl: "50px", md: "30px", sm: "10" } }}>
        <Box sx={{ bgcolor: "pink", width: "100%" }}>
          Writing section
        </Box>
        <Profile />
      </Box>
    </Layout>
  )
}

export default OverView