"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import Blogs from "../blog/sections/Blog";
import IntroductionBlog from "../blog/sections/Introduction";

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          Blog - Perspectivas, Inspiración y Guías Prácticas para Contar Historias
        </title>
        <meta
          name="description"
          content="Tu guía para capturar los momentos de la vida, descubrir los secretos de las narrativas personales y dejar un legado como ningún otro."
        />
        <link rel="alternate" href="https://www.thelifescript.com/es/blog" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/blog" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/blog" />

      </Head>

      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <IntroductionBlog />
        <Blogs />

        <ContactFooter
          title={t("blogSection.stillConfusedSection.title")}
          marked={t("blogSection.stillConfusedSection.title2")}
          lineWidth={150}
          subTitle={t("blogSection.stillConfusedSection.subTitle")}
          input1={t("blogSection.stillConfusedSection.input1")}
          input2={t("blogSection.stillConfusedSection.input2")}
          input3={t("blogSection.stillConfusedSection.input3")}
          button={t("blogSection.stillConfusedSection.btnText")}
        />
        <Footer />
      </Box>
    </>
  );
};

export default BlogPage;
