'use client'

import NavBar from "@/pages/website/__webComponents/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css"
import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Line from "@/__webAssets/pngs/under-line-long.png"

const FeaturesIntroduction = ({ heading, keyWorld, subHeading = false, width = "100%" }) => {

  return (
    <Box sx={{ height: { sm: "100vh", xs: "80vh" }, position: "relative" }}
      className={styles.features}
    >
      <NavBar color="#F3ECDA" logo={Logo} />
      <Box sx={{
        textAlign: 'center', position: "absolute", top: "50%", left: "50%",
        maxWidth: { xs: "325px", sm: "100%" },
        transform: "translate(-50%,-50%)"
      }}
        width={width}
      >
        <Box sx={{
          fontSize: { md: "55px", sm: "44px", xs: "32px" },
          padding: "0 20px",
          fontWeight: 500,
          marginBottom: { md: "30px", sx: "20px", xs: "30px" },
          color: "#F3ECDA",
          fontFamily: "Besley !important",
        }}>
          {heading}{" "}
          <span className={styles.lineBox}>
            {keyWorld}
            <Image src={Line} alt="img" className={styles.line} />
          </span>
        </Box>
        <Typography sx={{ fontSize: "16px", color: "#F3ECDA", marginTop: "10px", padding: "0 20px", opacity: ".8" }}>
          {subHeading}
        </Typography>
      </Box>
    </Box >
  )
}

export default FeaturesIntroduction;