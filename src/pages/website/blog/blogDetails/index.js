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
      <Box>
        <Box sx={{ margin: "250px 190px 0 200px", maxWidth: "1050px", }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
              <Link href="/blog">
                <Image src={Back} alt="icon" />
              </Link>
              <Typography>Back to Blog</Typography>
            </Box>
            <Typography sx={{ fontSize: "40px", fontWeight: 500, marginBottom: "20px", width: "80%", fontFamily: "Besley !important" }}>
              Crafting Your Legacy: A Guide to Writing Your Autobiography
            </Typography>
            <Typography x={{ fontSize: "16px" }}>
              Published by Angel on January 12, 2024
            </Typography>
          </Box>
          <Image src={BlogImage} alt="img" className={styles.blogImg} />
          <BlogDetails />
        </Box>
      </Box>
      <Box sx={{ margin: "240px 0" }}>
        <GifTab
          heading="Still not convinced? Try it now!"
          subHeading="Don’t worry no credit card required."
          button="Free Trial"
          icon={Pen}
        />
      </Box>
      <Footer />
    </Box>
  )
}

export default BlogDetailPage;