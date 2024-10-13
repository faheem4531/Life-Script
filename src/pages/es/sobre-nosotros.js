// About us
"use client";

import { Box } from "@mui/material";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import FeaturesIntroduction from "@/__webComponents/Introduction/Introduction";
import { useAboutUsValueData } from "@/utils/webContent";
import Mission from "../about-us/sections/Mission";
import Story from "../about-us/sections/Stories";
import Values from "../about-us/sections/Values";

const AboutUs = () => {
  const { t } = useTranslation();
  const footerRef = useRef(null);
  const router = useRouter();
  const valuesData = useAboutUsValueData(t);

  useEffect(() => {
    if (router.asPath.includes("#ContactUs")) {
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Sobre Nosotros</title>
        <meta
          name="description"
          content="Creemos que cada vida es especial y merece ser recordada. Por eso hemos creado una plataforma asequible y fácil de usar para ayudar a las personas a preservar sus recuerdos."
        />
        <link rel="alternate" href="https://www.thelifescript.com/es/sobre-nosotros" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/about-us" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/sobre-nosotros" />
      </Head>
      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <FeaturesIntroduction
          heading={t("aboutSection.title")}
          width="75%"
          keyWorld={t("aboutSection.subTitle")}
        />
        <Mission />
        <Story />
        <Values valuesData={valuesData} />
        <ContactFooter
          title={t("aboutSection.stillConfusedSection.title")}
          marked={t("aboutSection.stillConfusedSection.title2")}
          lineWidth={150}
          subTitle={t("aboutSection.stillConfusedSection.subTitle")}
          input1={t("aboutSection.stillConfusedSection.input1")}
          input2={t("aboutSection.stillConfusedSection.input2")}
          input3={t("aboutSection.stillConfusedSection.input3")}
          button={t("aboutSection.stillConfusedSection.btnText")}
        />
        <Footer ref={footerRef} />
      </Box>
    </>
  );
};

export default AboutUs;
