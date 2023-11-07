import React from 'react'
import Image from 'next/image'
import styles from "./Sidebar.module.css"
import { Box, Divider, Typography } from '@mui/material'
import Step1 from "@/_assets/svg/step1.svg"
import Step2 from "@/_assets/svg/step2.svg"
import Step3 from "@/_assets/svg/step3.svg"
import Step4 from "@/_assets/svg/step4.svg"

const HomeSteps = () => {
  return (
    <Box sx={{ backgroundColor: "#197065", color: "#fff", borderRadius: "24px", padding: "25px 65px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ position: "relative", zIndex: "1", padding: "35px 0" }}>
        <Typography sx={{ fontSize: "18px", position: "absolute", top: "0px", left: "-30px", width: "200px" }}>1. Begin chapter</Typography>
        <Image
          alt='icon'
          src={Step1} />
      </Box>
      <Divider sx={{ height: "1px", width: "23%", bgcolor: "#fff", margin: "0 -10px", }} />
      <Box sx={{ position: "relative", zIndex: "1", padding: "35px 0" }}>
        <Typography sx={{ fontSize: "18px", position: "absolute", bottom: "0px", left: "-30px", width: "200px" }}>2. Answer questions</Typography>
        <Image
          alt='icon'
          src={Step2} />
      </Box>
      <Divider sx={{ height: "1px", width: "23%", bgcolor: "#fff", margin: "0 -10px", }} />
      <Box sx={{ position: "relative", zIndex: "1", padding: "35px 0" }}>
        <Typography sx={{ fontSize: "18px", position: "absolute", top: "0px", left: "-80px", width: "250px" }}>3. Select stories tone and fuse</Typography>
        <Image
          alt='icon'
          src={Step3} />
      </Box>
      <Divider sx={{ height: "1px", width: "23%", bgcolor: "#fff", margin: "0 -10px", }} />
      <Box sx={{ position: "relative", zIndex: "1", padding: "35px 0" }}>
        <Typography sx={{ fontSize: "18px", position: "absolute", bottom: "0px", left: "-40px", width: "200px" }}>4. Preview and Finish</Typography>
        <Image
          alt='icon'
          src={Step4} />
      </Box>
    </Box >
  )
}

export default HomeSteps
