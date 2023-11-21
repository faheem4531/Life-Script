import { Box } from "@mui/material"

import styles from "./OverviewProfile.module.css"
import DemoProfile from "@/_assets/png/demo-Profile.png"
import Platinum from "@/_assets/svg/platinum-token.svg"
import Gold from "@/_assets/svg/gold-token.svg"
import Silver from "@/_assets/svg/silver-token.svg"
import Bronze from "@/_assets/svg/bronze-token.svg"


const Profile = () => {
  return (
    <Box sx={{
      bgcolor: "#fff",
      maxWidth: "435px",
      width: "100%",
      borderRadius: "19px",
      border: "1px solid #186F65",
      padding: "32px 28px 85px"
    }}>
      Profile Section
    </Box>
  )
}

export default Profile