'use client'

import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading";
import { Box, Typography } from "@mui/material";

import LeftStyle from "@/__webAssets/pngs/left-style2.png"
import RightStyle from "@/__webAssets/pngs/right-style2.png"

const Mission = () => {
  return (
    <Box sx={{ bgcolor: "", margin: "50px 150px 170px", borderBottom: "1px solid #E1683B" }}>
      <PrimaryHeading heading="Our Mission" showStyle={true} left={LeftStyle} right={RightStyle} />
      <Typography sx={{ fontSize: "16px", textAlign: "center", margin: "65px 30px 40px" }}>There is this notion that to have your own autobiography book, you need to be either rich or famous. But we believe that every life is special and deserves to be remembered. That is why we have created an easy-to-use, affordable platform to help people preserve their memories, rediscover their roots, and create a deeper connection with themselves and their families.</Typography>
    </Box>
  )
}

export default Mission;