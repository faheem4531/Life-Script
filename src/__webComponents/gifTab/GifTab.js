"use client";

import Bandage from "@/__webAssets/pngs/bandage.png";
import Hurt from "@/__webAssets/pngs/bg-gift-tag.png";
import Button from "@/__webComponents/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../ComponentsStyles.module.css";

const GifTab = ({
  heading,
  subHeading,
  icon,
  button,
  btnLink = "/stripe-page/gift-subscription",
}) => {
  return (
    <Box
      sx={{
        width: { lg: "1200px", md: "850px", sm: "600px" },
        height: { lg: "255px", md: "200px", sm: "150px" },
        margin: { sm: "0 auto 0", xs: "20px" },
        display: "flex",
        padding: {
          lg: "100px 60px 40px 100px",
          md: "80px 40px 40px 80px",
          sm: "90px 20px 80px 50px",
          xs: "20px 30px 30px",
        },
        position: "relative",
      }}
      className={styles.gifTabBox}
    >
      <Image
        src={Bandage}
        alt="bandage"
        className={styles.bandageX}
        loading="lazy"
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "space-between",
          width: "100%",
          zIndex: "1",
        }}
      >
        <Box sx={{ width: { md: "100%", sm: "75%" } }}>
          <Typography
            sx={{
              fontSize: { lg: "32px", md: "26px", sm: "20px", xs: "24px" },
              fontWeight: 500,
              fontFamily: "Besley !important",
            }}
          >
            {heading}
          </Typography>
          {subHeading && (
            <Typography
              sx={{
                fontSize: "16px",
                opacity: "0.8",
                marginTop: "5px",
              }}
            >
              {subHeading}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            width: { md: "180px", sm: "120px", xs: "100%" },
            height: { md: "55px", sm: "43px", xs: "55px" },
            marginTop: { xs: "30px" },
          }}
        >
          <Link href={btnLink}>
            <Button title={button} width="100%" height="100%" img1={icon} />
          </Link>
        </Box>
      </Box>
      <Image src={Hurt} alt="img" className={styles.bgHurt} loading="lazy" />
    </Box>
  );
};

export default GifTab;
