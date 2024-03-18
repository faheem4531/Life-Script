'use client'

import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@/pages/website/__webComponents/button/Button";
import Pen from "@/__webAssets/svgs/writing-pen.svg"
import Book from "@/__webAssets/pngs/hero-book.png"
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Typed from "typed.js";

import Image1 from "@/__webAssets/pngs/hero-1.png"
import Image2 from "@/__webAssets/pngs/hero-2.png"
import Image3 from "@/__webAssets/pngs/hero-3.png"
import Image4 from "@/__webAssets/pngs/hero-4.png"

const Introduction = () => {

  const color = { color: "#E1683B" }

  useEffect(() => {
    const element = document.querySelector(".multiple-text");
    if (element) {
      const typed = new Typed(element, {
        strings: ["Create.", "Gifts."],
        typeSpeed: 100,
        backSpeed: 100,
        delaySpeed: 100,
        loop: true,
        showCursor: false,
      });

      // Cleanup the typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <Box sx={{ padding: { md: "90px 0 0 75px", sm: "100px 0 0 50px", xs: "40px 16px 40px" }, position: "relative" }}>
      <Box sx={{ width: { md: '55%', sm: "100%", xs: "100%" }, zIndex: "20" }}>
        <Typography sx={{
          fontSize: { lg: '60px', md: "50px", sm: "44px", xs: "32px" },
          lineHeight: { sm: '70px', xs: "37px" },
          fontFamily: "Besley !important",
          minWidth: { md: "770px", sm: "550px", xs: "300px" },
          maxWidth: { xs: "400px", sm: "100%" },
          minHeight: "150px",
          zIndex: "10",
          position: "relative"
        }}
        >
          <h1>
            The Best Way To <span className="multiple-text" style={color}></span> <br className={styles.braker} /> A Personal Autobiography Book Easily
          </h1>
        </Typography>
        <Typography sx={{
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 500,
          fontFamily: "Avenir",
          margin: { sm: '90px 0 30px', xs: "32px 0 25px" },
          width: { sm: '70%', xs: "100%" }
        }}
        >
          Turn your stories into a beautiful hardcover book to preserve memories and connect with family or gift this unparalleled experience to your mom, dad or grandparent.
        </Typography>
        <Box sx={{ width: { sm: "250px", xs: "100%" }, height: "55px" }}>
          <Button
            title='Start 7-Day Free Trial'
            width="100%"
            height="100%"
            img1={Pen}
          />
        </Box>
        <Typography
          sx={{
            fontSize: '11px', lineHeight: '24px', fontWeight: 500, fontFamily: "Avenir",
            margin: { lg: '10px 0 100px', md: "10px 0 70px", sm: "10px 0 40px" }
          }}
        >No credit card required
        </Typography>
      </Box>

      <Image src={Image1} alt="image" className={styles.image1} />
      <Image src={Image2} alt="image" className={styles.image2} />
      <Image src={Image3} alt="image" className={styles.image3} />
      <Image src={Image4} alt="image" className={styles.image4} />
      <Image src={Book} alt="book" className={styles.bookImg} />
    </Box>
  )
}

export default Introduction;