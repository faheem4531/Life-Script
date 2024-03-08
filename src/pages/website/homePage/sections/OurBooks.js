"use client";

import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading"
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

const OurBooks = () => {

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        className="slick-arrow slick-prev"
        sx={{ position: "relative" }}
        style={{ left: '20px', zIndex: 1 }}
        onClick={onClick}
      >
        <Image src={Left} alt="icon" className={styles.leftAero} />
      </Box>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        className="slick-arrow slick-next"
        sx={{ position: "relative" }}
        style={{ right: '140px', zIndex: 1 }}
        onClick={onClick}
      >
        <Image src={Right} alt="icon" className={styles.rightAero} />
      </Box>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
          slidesToShow: 2,
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



  return (
    <Box
      sx={{ padding: "160px 0 110px" }}
      className={styles.bookBox}
    >
      <PrimaryHeading showStyle={true} heading="Our Books" color="#F3ECDA" />
      <Slider {...settings} className={styles.slider}>
        <Box sx={{ padding: "0 100px 0 0", width: { sm: "450px", xl: "500px" } }}>
          <Image src={Book} alt="image" className={styles.book} />
        </Box>
        <Box sx={{ padding: "0 100px 0 0", width: { sm: "450px", xl: "500px" } }}>
          <Image src={Book2} alt="image" className={styles.book} />
        </Box>
        <Box sx={{ padding: "0 100px 0 0", width: { sm: "450px", xl: "500px" } }}>
          <Image src={Book3} alt="image" className={styles.book} />
        </Box>
        <Box sx={{ padding: "0 100px 0 0", width: { sm: "450px", xl: "500px" } }}>
          <Image src={Book4} alt="image" className={styles.book} />
        </Box>
        <Box sx={{ padding: "0 100px 0 0", width: { sm: "450px", xl: "500px" } }}>
          <Image src={Book5} alt="image" className={styles.book} />
        </Box>
        <Box sx={{ padding: "0 100px 0 0", width: { sm: "450px", xl: "500px" } }}>
          <Image src={Book6} alt="image" className={styles.book} />
        </Box>
      </Slider>
    </Box>
  )
}
export default OurBooks