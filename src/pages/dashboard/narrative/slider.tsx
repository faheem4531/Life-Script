import React, { useEffect, useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  children: React.ReactNode;
  currentIndex: number;
  totalSlides: number;
  handleSlideChange: (index: number) => void;
  CurrentSlideCheck: string;
}

const YourSliderComponent: React.FC<SliderProps> = ({
  children,
  currentIndex,
  totalSlides,
  handleSlideChange,
  CurrentSlideCheck,
}) => {
  const [sliderSettings, setSliderSettings] = useState<Settings>(() => ({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }));

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setSliderSettings((prevSettings) => ({
      ...prevSettings,
    }));
  }, [totalSlides]);

  useEffect(() => {
    if (sliderRef.current) {
      handleSlideNavigation();
    }
  }, [CurrentSlideCheck]);

  const handleSlideNavigation = () => {
    if (CurrentSlideCheck === "prev") {
      sliderRef.current?.slickPrev();
    } else if (CurrentSlideCheck === "next") {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <div>
      <Slider ref={sliderRef} {...sliderSettings} afterChange={handleSlideChange}>
        {children}
      </Slider>
    </div>
  );
};

export default YourSliderComponent;
