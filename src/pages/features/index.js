'use client'

import Head from 'next/head';
import { Box } from "@mui/material";
import FeaturesIntroduction from "../../__webComponents/Introduction/Introduction";
import FeaturesItems from "./sections/Features";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import { useTranslation } from "react-i18next";
const FeaturesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Features That Make Your Storytelling Fun and Easy</title>
        <meta name="description" content="Take advantage of our assisted editing, text formatting features, voice-to-text, family tree, automatic photo improvement, premium book covers and more." />
      </Head>


      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <FeaturesIntroduction
          heading={t("featurePage.headerSection.title")}
          keyWorld={t("featurePage.headerSection.subTitle")}
        />
        <FeaturesItems />
        <ContactFooter
          title={t("featurePage.stillConfusedSection.title")}
          marked={t("featurePage.stillConfusedSection.subTitle")}
          lineWidth={150}
          input1={t("featurePage.stillConfusedSection.input1")}
          input2={t("featurePage.stillConfusedSection.input2")}
          input3={t("featurePage.stillConfusedSection.input3")}
          button={t("featurePage.stillConfusedSection.btnText")}
        />
        <Footer />
      </Box>
    </>
  )
}

export default FeaturesPage;