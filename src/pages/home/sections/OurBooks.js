"use client";

import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import { Box } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "./HomeSections.module.css";

const OurBooks = ({ details, heading, marked }) => {
  return (
    <Box
      sx={{
        padding: {
          lg: "160px 0 110px",
          md: "150px 0 100px",
          sm: "100px 0 ",
          xs: "100px 0",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
      className={styles.bookBox}
    >
      <PrimaryHeading
        lineWidth="160px"
        showStyle={true}
        heading={heading}
        marked={marked}
        color="#F3ECDA"
      />

      <Box
        position="relative"
        sx={{
          marginTop: { sm: "120px", xs: "70px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Marquee pauseOnHover={true}>
          {details.map((item, index) => (
            <Box
              sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}
              key={index}
            >
              <Image
                loading="lazy"
                src={item.coverImage}
                alt={item.alt}
                title={item.title}
                className={styles.book}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};
export default OurBooks;
