'use client'

import { Box } from "@mui/material";
import Footer from "@/pages/website/__webComponents/footer/Footer";
import ContactFooter from "@/pages/website/__webComponents/footer/ContactFooter";
import IntroductionBlog from "./sections/Introduction";
import Blogs from "./sections/Blog";

const BlogPage = () => {
  return (
    <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
      <IntroductionBlog />
      <Blogs />
      <ContactFooter
        title="Still confused? Ask away!"
        subTitle="Contact us Now!!!"
        input1="Your name"
        input2="Your email address"
        input3="What’s on your mind?"
        button="Get in touch!"
      />
      <Footer />
    </Box>
  )
}

export default BlogPage;