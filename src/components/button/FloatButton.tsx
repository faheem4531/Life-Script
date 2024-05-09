import * as React from "react";
import { Box, Fab } from "@mui/material";
import styles from "./Button.module.css";
import FloatImage from "@/_assets/svg/float-btn.svg";
import Image from "next/image";
// import LoadImage from "@/_assets/svg/loading.svg";
import animationLogo from "@/_assets/svg/animationLogo.svg";
// import BgLoadImage from "@/_assets/svg/bckgrnd-Loading.svg";


const FloatButton = ({ onClick, narrativeRefuse }) => {
  return (
    <div className={styles.floatButton}>
      <Fab
        sx={{ height: "100px", width: "100px" }}
        onClick={onClick} // Handle the click event
      >
        <Box className={styles.loadImageMain}>
          <Image
            src={animationLogo}
            alt="BgLoadImage"
            className={narrativeRefuse ? styles.BgloadImage : styles.BgLoad}
          />
          {/* <Image alt="image" src={animationLogo} className={styles.loadImage} /> */}
        </Box>
      </Fab>
    </div>
  );
};

export default FloatButton;
