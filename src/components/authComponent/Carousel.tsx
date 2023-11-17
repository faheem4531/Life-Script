import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
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
