import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css";
import Image from "next/image";
import Link from "next/link";
import More from "@/__webAssets/svgs/read-more.svg";
import { useRouter } from "next/router";
const MapCard = ({ title, date, image, details,caption, slug }) => {
  // console.log(slug,"hello")
  const [showFullDetails, setShowFullDetails] = useState(false);

  //   const toggleDetails = () => {
  //       setShowFullDetails(!showFullDetails);
  //   };

  const truncatedDetails = details.split("\n").slice(0, 5).join("\n");

  const router = useRouter();
  const handleReadMoreClick = () => {
    router.push({
      pathname: "/blog/blogDetails",
      // query: { title, date, image, details },
      query: { slug },
    });
  };

  return (
    <Box
      sx={{
        padding: {
          lg: "0 190px 50px 200px",
          md: "0 90px 150px",
          sm: "0 50px 100px",
          xs: "0 20px 50px",
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { sm: "40px", xs: "30px" },
            fontWeight: 500,
            marginBottom: "20px",
            width: { sm: "80%", xs: "100%" },
            fontFamily: "Besley !important",
            lineHeight: { sm: "50px", xs: "36px" },
          }}
        >
          {title}
        </Typography>
        <Typography x={{ fontSize: "16px" }}>{date}</Typography>
      </Box>
      <img
        src={image}
        alt="img"
        className={styles.blogImg}
        width={250}
        height={250}
      />
     {caption && (
                <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Caption: {caption}</Typography>
            )}
      {/* <Typography sx={{ fontSize: "16px", maxWidth: "1050px", width: "100%" }}>{details}
            <Link href="/blog/blogDetails">
              <span className={styles.readMore}>Read more <Image src={More} alt="more" /></span>
            </Link>
          </Typography> */}
      {/* <Typography sx={{ fontSize: "16px", maxWidth: "1050px", width: "100%" }}>
                {showFullDetails ? details : truncatedDetails}
                {details.length > truncatedDetails.length && (
                    <span className={styles.readMore} onClick={toggleDetails}>
                        {showFullDetails ? 'Read less ' : 'Read more '}
                        <Image src={More} alt="more" />
                    </span>
                )}
            </Typography> */}
      {/* <Typography sx={{ fontSize: "16px", maxWidth: "1050px", width: "100%" }}>{details}
                <span className={styles.readMore} onClick={handleReadMoreClick}>
                    Read more <Image src={More} alt="more" />
                </span>
            </Typography> */}

      <Typography sx={{ fontSize: "16px", maxWidth: "1050px", width: "100%" }}>
        {showFullDetails ? details : truncatedDetails}
        {details.length > truncatedDetails.length && (
          <span className={styles.readMore} onClick={handleReadMoreClick}>
            {showFullDetails ? "Read less " : "Read more "}
            <Image src={More} alt="more" />
          </span>
        )}
      </Typography>
    </Box>
  );
};

export default MapCard;
