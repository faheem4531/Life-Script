'use client'

import Head from "next/head";
import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import NavBar from "@/__webComponents/navBar/NavBar";
import styles from "./Faq.module.css"
import Faqs from "./Faqs";

import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg"
import { useTranslation } from "react-i18next";
const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Frequently Asked Questions </title>
        <meta
          name="description"
          discription="Want to know more about Lifescript? Here, you’ll find answers to the questions we get asked the most about."
        />
      </Head>

      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }} className={styles.faqPage}>
        <NavBar color="#F3ECDA" logo={Logo} />
        <Faqs />
        <ContactFooter
          title={t("faqsSections.stillConfusedSection.title")}
          marked={t("faqsSections.stillConfusedSection.title2")}
          lineWidth={150}
          subTitle={t("faqsSections.stillConfusedSection.subTitle")}
          input1={t("faqsSections.stillConfusedSection.input1")}
          input2={t("faqsSections.stillConfusedSection.input2")}
          input3={t("faqsSections.stillConfusedSection.input3")}
          button={t("faqsSections.stillConfusedSection.btnText")}
        />
        <Footer />
      </Box>
    </>
  )
}

export default FaqPage;