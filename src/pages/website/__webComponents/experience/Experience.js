import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import FlowerLine from "@/__webAssets/pngs/full-style.png"
import Image from "next/image";
import styles from "../ComponentsStyles.module.css"
import CustomizedAccordions from "./Accordion";


const Experience = () => {

  return (
    <Box sx={{ margin: { lg: '220px 0  120px', md: "170px 0 100px" } }}
    >
      <Box sx={{ textAlign: "center" }}>
        <PrimaryHeading lineHeight="60px" showStyle={false} heading=" Experience the LifeScript " marked="Advantage" />
        <Image src={FlowerLine} alt="logo" />
      </Box>

      <Box sx={{
        margin: { lg: "220px 60px 240px 130px", md: "100px 40px 150px 70px" }, display: "flex", justifyContent: "center",
        columnGap: { lg: "140px", md: "70px" }, alignItems: "center"
      }}>
        <CustomizedAccordions />
      </Box>
    </Box >
  )
}

export default Experience;
