import * as React from "react";
import { Box, Fab } from "@mui/material";
import styles from "./Button.module.css";
import Image from "next/image";
import animationLogo from "@/_assets/svg/animationLogo.png";
import logo from "@/_assets/svg/Frame.svg";

const FloatButton = ({ onClick, narrativeRefuse }) => {
  return (
    <Box className={styles.floatButton}>
      <Fab
        sx={{ height: "100px", width: "100px" }}
        onClick={onClick} 
      >
        <Box className={styles.loadImageMain}>
          <Image
            src={animationLogo}
            alt="BgLoadImage"
            className={narrativeRefuse ? styles.BgloadImage : styles.BgLoad}
          />
          <Image alt="image" src={logo} className={styles.loadImage} />
        </Box>
      </Fab>
    </Box>
  );
};

export default FloatButton;
