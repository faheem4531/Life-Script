"use client";

import Line from "@/__webAssets/svgs/line-orange.svg";
import { Typography } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";

const Heading = ({ heading, marked, color = "#3e4f3c", lineWidth }) => {
  return (
    <Typography
      sx={{
        fontSize: { md: "55px", sm: "44px", xs: "32px" },
        padding: "0 20px",
        fontWeight: 500,
        margin: { md: " 0 auto 30px", sx: "20px", xs: "0px" },
        color: color,
        fontFamily: "Besley !important",
      }}
      variant="h1"
    >
      {heading}{" "}
      <span className={styles.lineBox}>
        {marked}
        <Image src={Line} alt="img" className={styles.line} width={lineWidth} />
      </span>
    </Typography>
  );
};

export default Heading;
