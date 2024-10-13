// Features
"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import { useFeaturesData } from "@/utils/webContent";
import FeaturesIntroduction from "../../__webComponents/Introduction/Introduction";
import FeaturesItems from "../features/sections/Features";

const FeaturesPage = () => {
  const { t } = useTranslation();
  const featuresData = useFeaturesData(t);
  return (
    <>
      <Head>
        <title>Características que Hacen Divertido y Fácil Contar tu Historia</title>
        <meta
          name="description"
          content=
          "Aprovecha nuestra edición asistida, funciones de formato de texto, voz a texto, árbol genealógico, mejora automática de fotos, portadas de libros premium y más."
        />
        <link rel="alternate" href="https://www.thelifescript.com/es/caracteristicas" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/features" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/caracteristicas" />
      </Head>

      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <FeaturesIntroduction
          heading={t("featurePage.headerSection.title")}
          keyWorld={t("featurePage.headerSection.subTitle")}
        />
        <FeaturesItems featuresData={featuresData} />
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
  );
};

export default FeaturesPage;
