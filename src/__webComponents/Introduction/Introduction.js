'use client'

import NavBar from "@/__webComponents/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css"
import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Line from "@/__webAssets/pngs/under-line-long.png"

const FeaturesIntroduction = ({ heading, keyWorld, subHeading = false, width = "100%" }) => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}
      className={styles.features}
    >
      <NavBar color="#F3ECDA" logo={Logo} />
      <Box sx={{ textAlign: 'center', position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        width={width}
      >
        <Box sx={{ fontSize: "55px", fontWeight: 500, marginBottom: "30px", color: "#F3ECDA", fontFamily: "Besley !important" }}>{heading}{" "}
          <span className={styles.lineBox}>
            {keyWorld}
            <Image src={Line} alt="img" className={styles.line} />
          </span>
        </Box>
        <Typography sx={{ fontSize: "16px", color: "#F3ECDA", marginTop: "10px", opacity: ".8" }}>
          {subHeading}
        </Typography>
      </Box>
    </Box >
  )
}

export default FeaturesIntroduction;