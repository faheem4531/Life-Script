'use client'

import { Box, Typography } from "@mui/material";
import GifTab from "../../homePage/sections/GifTab";
import NavBar from "@/pages/website/__webComponents/navBar/NavBar";
import styles from "../sections/BlogSection.module.css"
import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Image from "next/image";
import BlogImage from "@/__webAssets/pngs/blog-img.png"
import Back from "@/__webAssets/svgs/back-aero.svg"
import BlogDetails from "../sections/BlogDetails";
import Footer from "@/pages/website/__webComponents/footer/Footer";
import Pen from "@/__webAssets/svgs/writing-pen.svg"
import Link from "next/link";

const BlogDetailPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }} className={styles.introBlog}>
      <NavBar color="#F3ECDA" logo={Logo} />
      <Box sx={{
        margin: { lg: "250px auto 200px", md: "180px auto 150px", sm: "120px auto 100px", xs: "100px 20px 80px" },
        maxWidth: { lg: "1050px", md: "850px", sm: "570px", xs: "100%" },
      }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "8px", marginBottom: { xs: "20px", sm: "0" } }}>
            <Link href="/blog">
              <Image src={Back} alt="icon" />
            </Link>
            <Typography>Back to Blog</Typography>
          </Box>
          <Typography sx={{
            fontSize: { sm: "40px", xs: "30px" },
            fontWeight: 500,
            marginBottom: "20px",
            width: { md: "80%", sm: "100%", xs: "100%" },
            fontFamily: "Besley !important"
          }}>
            Crafting Your Legacy: A Guide to Writing Your Autobiography
          </Typography>
          <Typography x={{ fontSize: "16px" }}>
            Published by Angel on January 12, 2024
          </Typography>
        </Box>
        <Image src={BlogImage} alt="img" className={styles.blogImg} />
        <BlogDetails />
      </Box>
      <Box sx={{ margin: { lg: "240px auto", md: "150px auto", sm: "100px auto", xs: "120px 0 80px" } }}>
        <GifTab
          heading="Still not convinced? Try it now!"
          subHeading="Don’t worry no credit card required."
          button="Free Trial"
          icon={Pen}
        />
      </Box>
      <Footer />
    </Box >
  )
}

export default BlogDetailPage;