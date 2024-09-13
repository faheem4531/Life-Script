"use client";

import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import NavBar from "@/__webComponents/navBar/NavBar";
import { Box } from "@mui/material";
import styles from "../ComponentsStyles.module.css";
import Heading from "../headings/Heading";

const FeaturesIntroduction = ({
  heading,
  keyWorld,
  width = "100%",
  lineWidth,
}) => {
  return (
    <Box
      sx={{
        height: { lg: "700px", sm: "100vh", xs: "100vh" },
        position: "relative",
      }}
      className={styles.features}
    >
      <NavBar color="#F3ECDA" logo={Logo} />
      <Box
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          maxWidth: { xs: "100%", sm: "1200px" },
          transform: "translate(-50%,-50%)",
        }}
        width={width}
      >
        <Heading
          heading={heading}
          marked={keyWorld}
          color="#F3ECDA"
          lineWidth={lineWidth}
        />
      </Box>
    </Box>
  );
};

export default FeaturesIntroduction;
