"use client";

import { Box } from "@mui/material";
import Head from 'next/head';

import Footer from "@/__webComponents/footer/Footer";
import Policy from "../privacy-policy/Policy";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidad - LifeScript</title>
        <meta
          name="description"
          content="Estamos comprometidos a proteger tu privacidad. Aquí puedes aprender cómo LifeScript recopila, utiliza y divulga tu información personal."
        />
        <link rel="alternate" href="https://www.thelifescript.com/es/politica-de-privacidad" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/privacy-policy" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/politica-de-privacidad" />
      </Head>

      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <Policy />
        <Footer />
      </Box>
    </>
  );
};

export default PrivacyPolicy;
