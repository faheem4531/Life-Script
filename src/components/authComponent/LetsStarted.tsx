import React from "react";
import Image from "next/image";
import Arrow from "../../../public/startArrow.png";
import { Box, Typography } from "@mui/material";
import Dots from "@/_assets/png/getStarted-dots.png"
import styles from "./GetTitle.module.css"

const LetsStarted = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/letsStarted.png")',
        backgroundSize: "cover",
        backgroundPosition: { sm: "center center", xs: "left " },
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box sx={{ marginLeft: { xl: "200px", lg: "150px", md: "100px", sm: "100px", xs: "50px" } }}>
        <Typography sx={{ fontSize: { lg: "60px", md: "50px", sm: "40px", xs: "30px" } }}>
          Hi Naseer 👋
        </Typography>
        <Image
          src={Arrow}
          alt="arrow"
          className={styles.aero}
        />
        <Typography sx={{ fontWeight: 700, fontSize: { xl: "85px", lg: "65px", md: "55px", sm: "40px", xs: "35px" } }}>
          Let Us Help You...
        </Typography>
      </Box>



      <Image
        src={Dots}
        alt="arrow"
        className={styles.topDots}
      />
      <Image
        src={Dots}
        alt="arrow"
        className={styles.bottomDots}
      />
    </Box>
  );
};

export default LetsStarted;
