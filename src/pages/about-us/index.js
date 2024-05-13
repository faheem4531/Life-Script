'use client'

import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import FeaturesIntroduction from "@/__webComponents/Introduction/Introduction";
import Mission from "./sections/Mission";
import Story from "./sections/Stories";
import Values from "./sections/Values";
import Head from 'next/head';
import { NextSeo } from "next-seo";
const AboutUs = () => {
  return (

    <>
      <Head>
        <title>About us</title>
        <meta
          property="og:title"
          content="About us"
        />
        <meta
          property="og:description"
          content="We believe that every life is special and deserves to be remembered. That is why we have created an easy-to-use, affordable platform to help people preserve their memories."
        />
        <NextSeo
          title="About us"
          description="We believe that every life is special and deserves to be remembered. That is why we have created an easy-to-use, affordable platform to help people preserve their memories."
          canonical="https://www.thelifescript.com/about-us"
        />
        {/* <meta
          name="description"
          discription="We believe that every life is special and deserves to be remembered. That is why we have created an easy-to-use, affordable platform to help people preserve their memories."
        /> */}
      </Head>


      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <FeaturesIntroduction heading="Empowering people to create a timeless legacy, resonating across" width="75%" keyWorld=" generations." />
        <Mission />
        <Story />
        <Values />
        <ContactFooter
          title="Still confused? Ask"
          marked=" away!"
          lineWidth={150}
          subTitle="Contact us Now!!!"
          input1="Your name"
          input2="Your email address"
          input3="What’s on your mind?"
          button="Get in touch!"
        />
        <Footer />
      </Box>
    </>

  )
}

export default AboutUs;