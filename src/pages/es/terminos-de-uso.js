

import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import Head from 'next/head';

import TermsAndConditions from "../terms-of-use/TermsAndConditions";

const TermsOfUse = () => {
  return (
    <>
     <Head>
        <title>Términos de Uso - LifeScript</title>
        <meta name="description" content="Revisa los Términos de Uso de LifeScript para entender cómo utilizar y acceder a nuestro sitio web y servicios." />
        <link rel="alternate" href="https://www.thelifescript.com/es/terminos-de-uso" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/terms-of-use" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/terminos-de-uso" />
      </Head>

      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
      <TermsAndConditions />
      <Footer />
    </Box>
    </>
  )
}

export default TermsOfUse;