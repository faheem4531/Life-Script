"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Button from "@/__webComponents/button/Button";
import { images } from "@/utils/assetsUrl";
import styles from "./HomeSections.module.css";

const Introduction = ({ data }) => {
  const { t } = useTranslation();
  const [Typed, setTyped] = useState(null);

  useEffect(() => {
    let typedInstance;
    const loadTyped = async () => {
      if (!Typed) {
        const { default: TypedLib } = await import("typed.js");
        setTyped(() => TypedLib);
      }
    };

    loadTyped();

    if (Typed) {
      const element = document.querySelector(".multiple-text");
      if (element) {
        typedInstance = new Typed(element, {
          strings: [
            t("landingPage.hero.animationText1"),
            t("landingPage.hero.animationText2"),
          ],
          typeSpeed: 100,
          backSpeed: 100,
          delaySpeed: 100,
          loop: true,
          showCursor: false,
        });
      }
    }

    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, [Typed, t]);

  const color = { color: "#E1683B" };

  return (
    <Box
      sx={{
        padding: {
          md: "90px 0 0 75px",
          sm: "100px 0 0 50px",
          xs: "40px 16px 40px",
        },
        position: "relative",
      }}
    >
      <Box sx={{ width: { md: "55%", sm: "100%", xs: "100%" }, zIndex: "20" }}>
        <Typography
          component="div"
          sx={{
            fontSize: { lg: "60px", md: "50px", sm: "44px", xs: "32px" },
            lineHeight: { sm: "70px", xs: "37px" },
            fontFamily: "Besley !important",
            maxWidth: { sm: "700px", xs: "100%" },
            minHeight: { sm: "150px", xs: "100px" },
            zIndex: "10",
            position: "relative",
          }}
        >
          <h1 className={styles.pureHeadings}>
            <span className="multiple-text" style={color}></span>{" "}
            {t("landingPage.hero.mainHeading")}
          </h1>
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 500,
            fontFamily: "Avenir",
            margin: { sm: "90px 0 30px", xs: "32px 0 25px" },
            width: { sm: "70%", xs: "100%" },
          }}
        >
          {t("landingPage.hero.mainDescription")}
        </Typography>
        <Box sx={{ width: { sm: "250px", xs: "100%" }, height: "55px" }}>
          <Link href="/purchase">
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
            margin: { lg: "10px 0 100px", md: "10px 0 0px", sm: "10px 0 40px" },
          }}
        >
          {t("landingPage.hero.buttonDescription")}
        </Typography>
      </Box>

      {data.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          title={image.alt}
          className={styles[image.className]}
          width={image.width}
          height={image.height}
          loading={index === images.length - 1 ? undefined : "lazy"}
          priority={index === images.length - 1}
        />
      ))}
    </Box>
  );
};

export default Introduction;
