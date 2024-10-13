// FAQ page
'use client'

import Head from "next/head";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import NavBar from "@/__webComponents/navBar/NavBar";
import Faqs from "../faqs/Faqs";
import styles from "../faqs/Faq.module.css"
import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg"

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Preguntas Frecuentes</title>
        <meta
          name="description"
          content="¿Quieres saber más sobre LifeScript? Aquí encontrarás respuestas a las preguntas que más nos hacen."
        />
        <link rel="alternate" href="https://www.thelifescript.com/es/preguntas-frecuentes" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/faqs" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/preguntas-frecuentes" />

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