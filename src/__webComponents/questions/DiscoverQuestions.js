"use client";

import LeftStyle from "@/__webAssets/pngs/left-style2.png";
import RightStyle from "@/__webAssets/pngs/right-style2.png";
import { Box } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";

const DiscoverQuestions = ({ questions }) => {
  return (
    <Box
      sx={{
        padding: {
          sm: "50px 0",
          xs: "20px",
        },
      }}
    >
      <PrimaryHeading
        left={LeftStyle}
        right={RightStyle}
        lineWidth="160px"
        showStyle={true}
        marked={true}
        removeStyleMbl={true}
        heading={"Discover our questions"}
        color="#3e4f3c"
      />
    </Box>
  );
};
export default DiscoverQuestions;
