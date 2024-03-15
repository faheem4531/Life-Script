"use client";

import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading"
import { Box } from "@mui/material"
import Image from "next/image"
import styles from "./HomeSections.module.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Book from "@/__webAssets/pngs/book-1.png"
import Book2 from "@/__webAssets/pngs/book-2.png"
import Book3 from "@/__webAssets/pngs/book-3.png"
import Book4 from "@/__webAssets/pngs/book-4.png"
import Book5 from "@/__webAssets/pngs/book-5.png"
import Book6 from "@/__webAssets/pngs/book-6.png"
import Left from "@/__webAssets/pngs/aero-left.png"
import Right from "@/__webAssets/pngs/aero-right.png"
import { useRef, useState } from "react";

const OurBooks = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

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
      <PrimaryHeading lineWidth="160px" showStyle={true} heading="Our " marked="Books" color="#F3ECDA" />

      <Box position="relative" sx={{ marginTop: { sm: "120px", xs: "70px" }, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Slider {...settings} className={styles.slider} ref={sliderRef}>
          <Box sx={{ width: { sm: "450px", xl: "500px" } }}>
            <Image src={Book} alt="image" className={styles.book} />
          </Box>
          <Box sx={{ width: { sm: "450px", xl: "500px" } }}>
            <Image src={Book2} alt="image" className={styles.book} />
          </Box>
          <Box sx={{ width: { sm: "450px", xl: "500px" } }}>
            <Image src={Book3} alt="image" className={styles.book} />
          </Box>
          <Box sx={{ width: { sm: "450px", xl: "500px" } }}>
            <Image src={Book4} alt="image" className={styles.book} />
          </Box>
          <Box sx={{ width: { sm: "450px", xl: "500px" } }}>
            <Image src={Book5} alt="image" className={styles.book} />
          </Box>
          <Box sx={{ width: { sm: "450px", xl: "500px" } }}>
            <Image src={Book6} alt="image" className={styles.book} />
          </Box>
        </Slider>

        <Image src={Left} alt="icon" className={styles.leftAero} onClick={goToPrevSlide} />
        <Image src={Right} alt="icon" className={styles.rightAero} onClick={goToNextSlide} />
      </Box>

    </Box>
  )
}
export default OurBooks