"use client";

import Back from "@/__webAssets/svgs/back-aero.svg";
import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Footer from "@/__webComponents/footer/Footer";
import NavBar from "@/__webComponents/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import GifTab from "../../home/sections/GifTab";
import BlogDetails from "../sections/BlogDetails";
import styles from "../sections/BlogSection.module.css";

const BlogDetailPage = () => {
  const router = useRouter();
  const [blogsDetailsData, setBlogsDetailsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!slug) return; // Prevent fetching data if slug is not available yet
        const response = await fetch(
          `https://strapi.thelifescript.com/api/blogs/${slug}?populate=*`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setBlogsDetailsData(responseData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!slug || Object.keys(slug).length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f3ecda",
          color: "#3e4f3c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">No matching data found</Typography>
      </Box>
    );
  }

  const imageUrl =
    blogsDetailsData?.data?.attributes?.image?.data[0] &&
    blogsDetailsData?.data?.attributes?.image?.data[0]?.attributes?.url;
  return (
    <Box
      sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}
      className={styles.introBlog}
    >
      <NavBar color="#F3ECDA" logo={Logo} />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            bgcolor: "#f3ecda",
            color: "#3e4f3c",
          }}
        >
          <Box
            sx={{
              margin: {
                lg: "200px auto 50px",
                md: "180px auto 50px",
                sm: "120px auto 50px",
                xs: "100px 20px 30px",
              },
              maxWidth: { lg: "1050px", md: "850px", sm: "570px", xs: "100%" },
            }}
          >
            <Circles
              height="80"
              width="80"
              color="#B4522D"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            margin: {
              lg: "200px auto 120px",
              md: "180px auto 150px",
              sm: "120px auto 100px",
              xs: "100px 20px 80px",
            },
            maxWidth: { lg: "1050px", md: "850px", sm: "570px", xs: "100%" },
          }}
        >
          <Box sx={{ width: "70%", margin: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "8px",
                marginBottom: { xs: "20px", sm: "0" },
              }}
            >
              <Link href="/blog">
                <Image src={Back} alt="icon" />
              </Link>
              <Typography>Back to Blog</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { sm: "28px", xs: "24px" },
                fontWeight: 500,
                marginBottom: "20px",
                width: { md: "80%", sm: "100%", xs: "100%" },
                fontFamily: "Besley !important",
              }}
            >
              {/* Crafting Your Legacy: A Guide to Writing Your Autobiography */}
              {blogsDetailsData?.data?.attributes?.title}
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              {blogsDetailsData?.data?.attributes?.author
                ? `Published by ${blogsDetailsData.data.attributes.author} on ${blogsDetailsData.data.attributes.datePublish}`
                : "No matching data found"}
            </Typography>
          </Box>
          <Box sx={{ width: "70%", margin: "auto" }}>
            {/* <img src={imageUrl} alt="img" className={styles.blogImg} /> */}
            <BlogDetails
              details={blogsDetailsData?.data?.attributes?.description}
            />
          </Box>
        </Box>
      )}
      <Box
        sx={{
          margin: {
            lg: "80px auto",
            md: "150px auto",
            sm: "100px auto",
            xs: "120px 0 80px",
          },
        }}
      >
        <GifTab
          heading="Still not convinced? Try it now!"
          subHeading="Don’t worry no credit card required."
          button="Free Trial"
          icon={Pen}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogDetailPage;
