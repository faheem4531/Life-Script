import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css";
import Image from "next/image";
import More from "@/__webAssets/svgs/read-more.svg";
import { useRouter } from "next/router";

const truncateHtml = (html, maxLength) => {
  const div = document.createElement('div');
  div.innerHTML = html;

  let text = div.textContent || div.innerText || '';

  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + '...';
  }

  const truncatedDiv = document.createElement('div');
  truncatedDiv.textContent = text;

  return truncatedDiv.innerHTML;
};

const MapCard = ({ title, date, image, details, caption, id }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const truncatedDetails = truncateHtml(details, 500);
  const isTruncated = details !== truncatedDetails;

  const router = useRouter();
  const handleReadMoreClick = () => {
    setShowFullDetails(!showFullDetails);
    if (!showFullDetails) {
      router.push({
        pathname: "/blog/blog-details",
        query: { id },
      });
    }
  };

  return (
    <Box
      sx={{ width: "50%", margin: "auto", justifyContent: 'center', marginTop: 5 }}>
      <Box>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: { sm: "30px", xs: "30px" },
            fontWeight: 500,
            marginBottom: "20px",
            fontFamily: "Besley !important",
            lineHeight: { sm: "50px", xs: "36px" },
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "16px", marginBottom: 1 }}>{date}</Typography>
      </Box>
      <img
        src={image}
        alt="img"
        width={"100%"}
        height={"100%"}
        style={{ cursor: "pointer" }}
      />
      {caption && (
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Caption: {caption}
        </Typography>
      )}

      <Typography sx={{ fontSize: "20px", marginTop: 2,}}>
        <div
          dangerouslySetInnerHTML={{
            __html: showFullDetails ? details : truncatedDetails,
          }}
        />
        {isTruncated && (
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
