"use client";

import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading"
import { Box } from "@mui/material"
import Image from "next/image"
import styles from "./HomeSections.module.css"
import Marquee from "react-fast-marquee";

import Book1 from "@/__webAssets/webp/bookCovers/anniversary-celebration-gift-book-cover-design.webp"
import Book2 from "@/__webAssets/webp/bookCovers/family-full-picture-life-story-book-cover-design.webp"
import Book3 from "@/__webAssets/webp/bookCovers/grandma-birthday-gift-book-cover-design.webp"
import Book4 from "@/__webAssets/webp/bookCovers/grandparents-book-cover-design.webp"
import Book5 from "@/__webAssets/webp/bookCovers/memoir-gift-book-cover-design.webp"
import Book6 from "@/__webAssets/webp/bookCovers/simplistic-autobiography-book-cover-design-minimalistic.webp"
import { useTranslation } from "react-i18next";

const OurBooks = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: { lg: "160px 0 110px", md: "150px 0 100px", sm: "100px 0 ", xs: "100px 0" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}
      className={styles.bookBox}
    >
      <PrimaryHeading
        lineWidth="160px"
        showStyle={true}
        heading={t("landingPage.bookSection.title")}
        marked={t("landingPage.bookSection.subTitle")}
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
        <Marquee
          pauseOnHover={true}
        >
          <Box sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}>
            <Image
              src={Book1}
              alt="A book cover design with an old man celebrating anniversary with his wife on a swing - LifeScript"
              title="Half picture-half title book cover design"
              className={styles.book}
            />
          </Box>
          <Box sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}>
            <Image
              src={Book2}
              alt="A full book cover picture design of a life story book with family standing in front of a lake - LifeScript"
              title="Full-picture book cover design"
              className={styles.book}
            />
          </Box>
          <Box sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}>
            <Image
              src={Book3}
              alt="A book cover design with an old couple celebrating grandma birthday - LifeScript"
              title="Full-picture book cover design"
              className={styles.book}
            />
          </Box>
          <Box sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}>
            <Image
              src={Book4}
              alt="A book cover design with a couple in the forest enjoying the sun and playing around - LifeScript"
              title="Side picture book cover design"
              className={styles.book}
            />
          </Box>
          <Box sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}>
            <Image
              src={Book5}
              alt="Memoir book cover design with small picture of author and customizable text - LifeScript"
              title="Memoir book cover design"
              className={styles.book}
            />
          </Box>
          <Box sx={{ marginRight: { md: "40px", sm: "20px", xs: "20px" } }}>
            <Image
              src={Book6}
              alt="Simplistic design of autobiography book cover with minimalistic elements that you can customize - LifeScript"
              title="Simplistic design of autobiography book cover"
              className={styles.book}
            />
          </Box>
        </Marquee>
      </Box>

    </Box>
  )
}
export default OurBooks