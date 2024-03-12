import { Box, Typography } from "@mui/material";
import styles from "./Pricing.module.css"
import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading";
import Image from "next/image";

import RightStyle from "@/__webAssets/pngs/right-style2.png"
import LeftStyle from "@/__webAssets/pngs/left-style2.png"

const PricingDetails = ({ heading, cardsDetail }) => {

  return (
    <Box className={styles.pricingDetails}>
      <PrimaryHeading heading={heading} showStyle={true} left={LeftStyle} right={RightStyle} />
      <Box sx={{ margin: "100px 0 100px ", display: "flex", justifyContent: "center", columnGap: "16px" }}>
        {cardsDetail.map((item, index) => <DetailCard
          key={index}
          header={item.header}
          bgColor={item.bgColor}
          sCase={item.sCase}
          logo={item.logo}
          points={item.data}
        />)}
      </Box>
    </Box >
  )
}

export default PricingDetails;

function DetailCard({ header, logo, points, bgColor, sCase }) {
  return (
    <Box sx={{ maxWidth: "405px", width: "100%", bgcolor: "#F4F4F4", borderRadius: "8px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75px", textAlign: "center", fontSize: "20px", color: "#fff", fontWeight: 800, borderRadius: "8px 8px 0 0" }}
        bgcolor={bgColor}>
        {header}
        {logo && <Image src={logo} alt="logo" />}
      </Box>
      <Box
        sx={{ padding: "10px 20px" }}
        className={styles.cardBorder}
      >
        {points.map((item, index) => <Box
          key={index}
          sx={{
            padding: "20px 0 20px 5px",
            height: "58px",
            display: "flex",
            fontSize: "16px",
            fontWeight: 800,
          }}
          alignItems={index === 1 && sCase ? "" : "center"}
        >
          {item} {index === 1 && sCase && <Typography sx={{ fontSize: "14px", marginLeft: "5px", lineHeight: "15px" }}> (initially 99$ but additional 40$ if you want full-color book)</Typography>}
        </Box>)}


      </Box>

    </Box>
  )
}