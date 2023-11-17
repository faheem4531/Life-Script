import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Carousel1 from "../../../public/carousel1.png";
import Carousel2 from "../../../public/carousel.png";
import Carousel3 from "../../../public/carousel3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setActiveSlide(index),

  };
 const carouselItems = [
    { path: Carousel1, alt: 'Login Image' },
    { path: Carousel2, alt: 'Signup Image' },
    { path: Carousel3, alt: 'Signup Image' },

    // Add more images as needed
  ];
  return (
    
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <Image
              src={item.path}
              alt={`Slide ${index + 1}`}
              style={{
                height: "100%",
                maxHeight: "92vh",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    
    </div>
  );
};

export default Carousel;
