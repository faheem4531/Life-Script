import React from 'react'
import Image from 'next/image'
import styles from "./Custom.module.css"
import { Box, Typography } from '@mui/material'
import Welcome from "@/_assets/png/overview-welcome-card.png"
import Button from '../button/Button'
import ContineWriting from "@/_assets/svg/continue-writing.svg"
import BgRounded from "@/_assets/png/overview-welcome-bg.png"

const WelcomeOverview = () => {
  return (
    <Box sx={{
      backgroundColor: "#197065",
      color: "#fff",
      borderRadius: "14px",
      padding: { xl: "30px 35px", lg: "25px 30px", xs: "17px 30px" },
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1149px",
      width: "100%",
      maxHeight: "230px",
      minWidth: "700px",
      position: "relative"
    }}
      className={styles.welcomeMain}
    >
      <Box >
        <Typography sx={{ fontSize: { xl: "18px", sm: "20px" } }}> Welcome back ...</Typography>
        <Typography sx={{
          fontSize: { xl: "33px", sm: "35px" },
          lineHeight: "120%",
          fontWeight: 700
        }}> Haseeb!</Typography>
        <Typography sx={{
          fontSize: { xl: "14px", sm: "17px" },
          fontWeight: 300,
          lineHeight: "150%",
          marginBottom: "20px",
          color: "#a8c9c5",
          marginTop: "10px"
        }}>
          “Success is not final, failure is not fatal: It is the courage to continue that counts.”
        </Typography>
        <Button
          image={ContineWriting}
          title="Continue Writing"
          background="#fff"
          borderRadius="23px"
          color="#186F65"
          width="180px"
          fontSize="14px"
          padding="10px 18px"
          onClick={() => { }}
          border={undefined}
        />
      </Box>

      <Image alt='Welcome' src={Welcome} className={styles.welcomeImage} />
      <Image alt='Welcome' src={BgRounded} className={styles.bgRounded} />
    </Box >
  )
}

export default WelcomeOverview;
