"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Button from "@/__webComponents/button/Button";
import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        padding: {
          md: "120px 0 0 0px",
          sm: "100px 0 0 0px",
          xs: "60px 16px 0px",
        },
        position: "relative",
      }}
    >
      <Box sx={{ width: "100%", zIndex: "20", textAlign: "center" }}>
        <PrimaryHeading
          lineWidth="280px"
          lineHeight="60px"
          mdDirection="column"
          smDirection="column"
          direction="column"
          lineBottom="-24px"
          showStyle={false}
          heading={"LifeScript, the best Storyworth"}
          marked={"alternative"}
        />
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            fontFamily: "Avenir",
            margin: { md: "40px auto", sm: "20px auto", xs: "20px auto" },
            width: "100%",
            textAlign: "center",
            maxWidth: { md: "650px", sm: "500px", xs: "100%" },
          }}
        >
          Save time, efforts and enjoy a more personalized, secure and
          supportive storytelling experience with no hidden costs.
        </Typography>
        <Box
          sx={{
            width: { sm: "250px", xs: "100%" },
            margin: "0 auto",
            height: "55px",
          }}
        >
          <Link href="/stripe-page">
            <Button
              title={t("landingPage.hero.mainButton")}
              width="100%"
              height="100%"
              img1={Pen}
            />
          </Link>
        </Box>
        <Typography
          sx={{
            fontSize: "11px",
            lineHeight: "24px",
            fontWeight: 500,
            fontFamily: "Avenir",
            margin: { md: "10px 0 40px", sm: "10px 0 40px" },
          }}
        >
          {t("landingPage.hero.buttonDescription")}
        </Typography>
      </Box>

      <Image
        src="https://lifescript-media.s3.eu-north-1.amazonaws.com/old-opened-autobiography-book.webp"
        alt="An old opened autobiography book - LifeScript"
        className={styles.bookImg}
        width={600}
        height={280}
      />
    </Box>
  );
};

export default Introduction;
