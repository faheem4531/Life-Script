import { Box, Typography } from "@mui/material";
import LeftStyle from "@/__webAssets/pngs/left-style.png"
import RightStyle from "@/__webAssets/pngs/right-style.png"
import Image from "next/image";
import Line from "@/__webAssets/pngs/under-line-long.png"
import styles from "../ComponentsStyles.module.css"

const PrimaryHeading = ({ heading, showStyle, color, lineHeight, left = LeftStyle, right = RightStyle, lineWidth, removeStyleMbl = false }) => {

  const styleLine = {
    width: "140px" || lineWidth,
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <Box sx={{
        display: {
          md: "block",
          sm: removeStyleMbl && "none",
          xs: removeStyleMbl && "none"
        }
      }} >
        {showStyle && <Image src={left} alt="logo" className={styles.headingStyles} />}
      </Box>
      <Box color={color} lineHeight={lineHeight} sx={{ fontSize: { md: "52px", sm: "44px", xs: "32px" }, fontWeight: 500, margin: { sm: "0 18px", xs: "0" }, position: "relative", fontFamily: "Besley !important" }}>
        {heading}
        <Box sx={{ position: "absolute", top: { sm: "25px", xs: "15px" }, right: "0" }}>
          <Image src={Line} style={styleLine} alt="mark" className={styles.headingLine} />
        </Box>
      </Box>
      <Box sx={{
        display: {
          md: "block",
          sm: removeStyleMbl && "none",
          xs: removeStyleMbl && "none"
        }
      }} >
        {showStyle && <Image src={right} alt="logo" className={styles.headingStyles} />}
      </Box >
    </Box >
  )
}

export default PrimaryHeading;