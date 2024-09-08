"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import Blogs from "./sections/Blog";
import IntroductionBlog from "./sections/Introduction";

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          Blog - Insights, Inspiration, and Practical Guides to Storytelling
        </title>
        <meta
          name="description"
          content="Your Guide to Capturing Life's Moments, Unlocking the Secrets of Personal Narratives and Leaving a Legacy Like No Other."
        />
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
