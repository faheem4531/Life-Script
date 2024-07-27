"use client";

import Footer from "@/__webComponents/footer/Footer";
import { Box } from "@mui/material";
import Policy from "./Policy";
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - The Lifescript</title>
        <meta
          name="description"
          content="We are committed to protecting your privacy. Here you can learn how your personal information is collected, used, and disclosed by LifeScript."
        />
      </Head>
      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <Policy />
        <Footer />
      </Box>
    </>
  );
};

export default PrivacyPolicy;
