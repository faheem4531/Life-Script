import { Box, Typography } from "@mui/material";
import LeftStyle from "@/__webAssets/pngs/left-style.png"
import RightStyle from "@/__webAssets/pngs/right-style.png"
import Image from "next/image";
import Line from "@/__webAssets/pngs/under-line-long.png"

const PrimaryHeading = ({ heading, showStyle, color, lineHeight, left = LeftStyle, right = RightStyle }) => {

  const styleLine = {
    width: "140px",
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      {showStyle && <Image src={left} alt="logo" />}
      <Box color={color} lineHeight={lineHeight} sx={{ fontSize: "52px", fontWeight: 500, margin: "0 18px", position: "relative", fontFamily: "Besley !important" }}>
        {heading}
        <Box sx={{ position: "absolute", top: "25px", right: "0" }}>
          <Image src={Line} style={styleLine} alt="mark" />
        </Box>
      </Box>
      {showStyle && <Image src={right} alt="logo" />}

    </Box >
  )
}

export default PrimaryHeading;