import React, { useState } from "react";
import "./Slider.scss";
import { FiChevronLeft as Left, FiChevronRight as Right } from "react-icons/fi";
import { BsDot as Dot } from "react-icons/bs";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <>
      <div className="sliderStyles">
        <div className="">
          <div className="leftArrowStyles" onClick={goToPrevious}>
            <Left />
          </div>
          <div className="rightArrowStyles" onClick={goToNext}>
            <Right />
          </div>
        </div>
        <div className="slideStyles" style={slideStylesWidthBackground}></div>
        <div className="dotContainerStyles">
          {slides.map((slide, index) => (
            <div
              className="dotStyle"
              key={index}
              onClick={() => {
                goToSlide(index);
              }}
            >
              <Dot />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
