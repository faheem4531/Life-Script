'use client'

import Head from 'next/head';
import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import IntroductionBlog from "./sections/Introduction";
import Blogs from "./sections/Blog";

const BlogPage = () => {
  return (

    <>
      <Head>
        <title>Blog - Insights, Inspiration, and Practical Guides to Storytelling</title>
        <meta
          name="description"
          discription="Your Guide to Capturing Life's Moments, Unlocking the Secrets of Personal Narratives and Leaving a Legacy Like No Other."
        />
      </Head>


      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <IntroductionBlog />
        <Blogs />
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

export default BlogPage;