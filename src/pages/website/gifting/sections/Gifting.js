import { Box, Typography } from "@mui/material";
import styles from "./gift.module.css"
import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading";

import LeftStyle from "@/__webAssets/pngs/left-style2.png"
import RightStyle from "@/__webAssets/pngs/right-style2.png"

const Gifting = () => {
  return (
    <Box sx={{
      minHeight: "100vh",
      alignItems: "center",
      textAlign: "center"
    }}
    >
      <PrimaryHeading showStyle={true} heading="What you can gift" left={LeftStyle} right={RightStyle} />
      <Typography sx={{ fontSize: "24px", margin: "40px 0 30px" }}>
        Give the gift of inspiration on their special day
      </Typography>
    </Box>
  )
}

export default Gifting;