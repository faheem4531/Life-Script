"use client";

import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

import ChristmasCap from "@/__webAssets/svgs/christmas-hat-icon-christmas-gift-for-mom.svg";
import Line from "@/__webAssets/svgs/line-orange.svg";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";

const Heading = ({ heading, marked, color = "#3e4f3c", lineWidth }) => {
  const pathname = usePathname();

  return (
    <Typography
      sx={{
        fontSize: { md: "55px", sm: "44px", xs: "32px" },
        padding: "0 20px",
        fontWeight: 500,
        margin: { md: " 0 auto 30px", sx: "20px", xs: "0px" },
        color: color,
        fontFamily: "Besley !important",
        position: "relative",
        display: "inline-block",
      }}
      variant="h1"
    >
      {heading}{" "}
      <span className={styles.lineBox}>
        {marked}
        <Image src={Line} alt="img" className={styles.line} width={lineWidth} />
      </span>
      {pathname === "/christmas-gift-for-mom" && (
        <Box
          sx={{
            position: "absolute",
            right: { lg: "-10px", sm: "30px", xs: "30px" },
            top: { sm: "-75px", xs: "-70px" },
            width: { xs: "60px", sm: "auto" },
          }}
        >
          <Image
            src={ChristmasCap}
            alt="A festive Christmas hat, perfect for adding a holiday touch to thoughtful Christmas gifts for moms - LifeScript"
            title="Christmas hat for moms’ Christmas gift page"
            style={{ width: "100%" }}
          />
        </Box>
      )}
    </Typography>
  );
};

export default Heading;
