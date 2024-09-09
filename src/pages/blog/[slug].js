"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

import Back from "@/__webAssets/svgs/back-aero.svg";
import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import Footer from "@/__webComponents/footer/Footer";
import NavBar from "@/__webComponents/navBar/NavBar";
import BlogDetails from "./sections/BlogDetails";
import styles from "./sections/BlogSection.module.css";

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
      className={styles.blogs}
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
            maxWidth: { lg: "1050px", md: "850px", sm: "600px", xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { lg: "70%", md: "80%", sm: "90%", xs: "100%" },
              margin: "auto",
            }}
          >
            <Box sx={{ width: "200px" }}>
              <Link href="/blog">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                    width: "200px",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid #E1683B",
                      borderRadius: "4px",
                      p: "6px 10px 5px",
                    }}
                  >
                    <Image src={Back} alt="icon" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { sm: "20px", xs: "18px" },
                      fontWeight: 600,
                    }}
                  >
                    Back to Blog
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Typography
              sx={{
                fontSize: { md: "48px", sm: "35px", xs: "32px" },
                fontWeight: { md: 500, sm: 600, xs: 600 },
                marginBottom: "20px",
                width: { md: "100%", sm: "100%", xs: "100%" },
                fontFamily: "Besley !important",
              }}
            >
              {blogsDetailsData?.data?.attributes?.title}
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              {blogsDetailsData?.data?.attributes?.author
                ? `Published by ${blogsDetailsData.data.attributes.author} on ${blogsDetailsData.data.attributes.datePublish}`
                : "No matching data found"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { lg: "70%", md: "80%", sm: "90%", xs: "100%" },
              margin: "auto",
            }}
          >
            <BlogDetails
              details={blogsDetailsData?.data?.attributes?.description}
            />
          </Box>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default BlogDetailPage;
