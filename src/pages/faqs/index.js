'use client'

import Head from "next/head";
import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import NavBar from "@/__webComponents/navBar/NavBar";
import styles from "./Faq.module.css"
import Faqs from "./Faqs";

import Logo from "@/__webAssets/svgs/logo-footer.svg"

const FaqPage = () => {

  return (
    <>
      <Head>
        <title>Frequently Asked Questions </title>
        <meta
          name="description"
          content="Want to know more about Lifescript? Here, you’ll find answers to the questions we get asked the most about."
        />
      </Head>

      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }} className={styles.faqPage}>
        <NavBar color="#F3ECDA" logo={Logo} />
        <Faqs />
        <ContactFooter
          title="Still have any questions?"
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

export default FaqPage;