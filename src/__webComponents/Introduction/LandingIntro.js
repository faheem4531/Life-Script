"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Button from "@/__webComponents/button/Button";
import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import NavBar from "@/__webComponents/navBar/NavBar";
import { useTranslation } from "react-i18next";
import styles from "../ComponentsStyles.module.css";

const LandingIntro = ({ bgGreen = true, heading, marked, discription }) => {
  const { t } = useTranslation();
  return (
    <Box
      className={bgGreen && styles.features}
      color={bgGreen ? "#F3ECDA" : "#3e4f3c"}
    >
      <NavBar
        color={bgGreen ? "#F3ECDA" : "#3e4f3c"}
        logo={bgGreen ? Logo : "home"}
      />
      <Box
        sx={{
          padding: {
            lg: "120px 0 0 0",
            md: "120px 0 110px 0px",
            sm: "100px 0 70px 0px",
            xs: "60px 16px 100px",
          },
        }}
      >
        <Box sx={{ width: "100%", zIndex: "20", textAlign: "center" }}>
          <PrimaryHeading
            lineWidth="220px"
            lineHeight="60px"
            mdDirection="column"
            smDirection="column"
            direction="column"
            showStyle={false}
            heading={heading}
            marked={marked}
            variant="h1"
            lineBottom="-20px"
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
            {discription}
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
              margin: "0px",
            }}
          >
            {t("landingPage.hero.buttonDescription")}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: { lg: "600px", md: "500px", sm: "400px" },
            maxHeight: { lg: "350px", md: "210px", sm: "180px" },
            m: "-100px 0 0px auto",
            bgcolor: "rd",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            src="https://lifescript-media.s3.eu-north-1.amazonaws.com/old-opened-autobiography-book.webp"
            alt="An old opened autobiography book - LifeScript"
            width={600}
            height={280}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingIntro;
