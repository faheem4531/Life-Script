import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import FlowerLine from "@/__webAssets/pngs/full-style.png"
import Image from "next/image";
import styles from "../ComponentsStyles.module.css"
import CustomizedAccordions from "./Accordion";
import Link from "next/link";


const Experience = () => {

  return (
    <Box sx={{ margin: { lg: '220px 0  150px', md: "170px 0 130px" }, display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <PrimaryHeading lineWidth="180px" lineHeight="60px" mdDirection="column" showStyle={false} heading="Get a Feel for LifeScript’s " marked="Features" />
        <Image src={FlowerLine} alt="logo" className={styles.fullStyle} />
      </Box>

      <Box sx={{
        margin: { lg: "220px 60px 200px 130px", md: "100px 40px 100px 70px" }, display: "flex", justifyContent: "center",
        columnGap: { lg: "140px", md: "70px" }, alignItems: "center"
      }}>
        <CustomizedAccordions />
      </Box>
      <Link href='/website/features'>
        <Typography sx={{
          fontSize: "18px", border: "1px solid #30422E", borderRadius: "4px", padding: "10px 25px 7px", fontFamily: "Avenir"
        }}
        >See More
        </Typography>
      </Link>
    </Box >
  )
}

export default Experience;
