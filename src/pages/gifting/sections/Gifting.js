import { Box, Typography } from "@mui/material";

import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import LeftStyle from "@/__webAssets/pngs/left-style2.png";
import RightStyle from "@/__webAssets/pngs/right-style2.png";

const Gifting = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        textAlign: "center",
        margin: "50px 0 0",
      }}
    >
      <PrimaryHeading
        showStyle={true}
        removeStyleMbl={true}
        heading="What you can"
        marked="gift"
        left={LeftStyle}
        right={RightStyle}
      />
      <Typography
        sx={{
          fontSize: { sm: "24px", xs: "16px" },
          margin: { sm: "40px 0 30px", xs: "30px 0 30px" },
        }}
      >
        Give the gift of inspiration on their special day
      </Typography>
    </Box>
  );
};

export default Gifting;
