import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import styles from "./BlogSection.module.css";
import Image from "next/image";
import More from "@/__webAssets/svgs/read-more.svg";
import { useRouter } from "next/router";
import moment from 'moment';

const truncateHtml = (html, maxLength) => {
  const div = document.createElement("div");
  div.innerHTML = html;

  let text = div.textContent || div.innerText || "";

  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + "...";
  }

  const truncatedDiv = document.createElement("div");
  truncatedDiv.textContent = text;

  return truncatedDiv.innerHTML;
};

const MapCard = ({ title, date, image, details, caption, id, subtitle, slug }) => {
  let formatedDate = moment(date).format("DD MMMM YYYY");
  const [showFullDetails, setShowFullDetails] = useState(false);

  const truncatedDetails = truncateHtml(details, 500);
  const isTruncated = details !== truncatedDetails;
  const cardDescription = truncateHtml(details, 80);
  const trimmedSubtitle = truncateHtml(subtitle, 120);
  const router = useRouter();
  const handleReadMoreClick = () => {
    setShowFullDetails(!showFullDetails);
    if (!showFullDetails) {
      if(slug) {
        // router.push(`/blog/blog-details?slug=${slug}`);
        router.push(`/blog/${slug}`);
      }
    }
  };


  return (
    <Box onClick={handleReadMoreClick} sx={{ cursor: "pointer" }}>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          minHeight: "460px",
          maxHeight: "460px",
          display: "flex",
          // overflowY:"auto",
          flexDirection: "column",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.06)",
          },
        }}
      >
        <CardActionArea
          sx={{
            "&:hover .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          }}
        >
          <CardMedia
            component="img"
            height="280"
            image={image}
            alt="green iguana"
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>

            <Typography
              sx={{
                width: "100%",
                cursor: "pointer",
                fontSize: { sm: "20px", xs: "18px", lg: "19px" },
                fontWeight: 600,
                marginBottom: "10px",
                fontFamily: "Besley !important",
              }}
            >
              {/* <Typography gutterBottom variant="h5" component="div" fontWeight="bold"> */}
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* {cardDescription} */}
              {trimmedSubtitle}

            </Typography>
            <Typography sx={{ fontSize: "12px", marginTop: "10px", color: "grey", marginBottom: 0 }}>
              {formatedDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>

    // <Box
    //   sx={{marginTop: 3,}}>
    //   <Box>
    // <Typography
    //   sx={{
    //     width: "100%",
    //     cursor: "pointer",
    //     fontSize: { sm: "20px", xs: "18px", lg: "24px" },
    //     fontWeight: 500,
    //     marginBottom: "20px",
    //     fontFamily: "Besley !important",
    //   }}
    //       onClick={handleReadMoreClick}
    //     >
    //       {title}
    //     </Typography>
    //     <Typography sx={{ fontSize: "16px", marginBottom: 1 }}>{date}</Typography>
    //   </Box>
    //   <img
    //     src={image}
    //     alt="img"
    //     width={"100%"}
    //     height={"300px"}
    //     style={{ cursor: "pointer" }}
    //     onClick={handleReadMoreClick}
    //   />
    //   {caption && (
    //     <Typography
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       Caption: {caption}
    //     </Typography>
    //   )}

    //   {/* <Typography sx={{ fontSize: "px", marginTop: 2, }}>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: showFullDetails ? details : truncatedDetails,
    //       }}
    //     />
    //      {isTruncated && (
    //       <span className={styles.readMore} onClick={handleReadMoreClick}>
    //         {showFullDetails ? "Read less " : "Read more "}
    //         <Image src={More} alt="more" />
    //       </span>
    //     )}
    //   </Typography> */}
    // </Box>
  );
};

export default MapCard;
