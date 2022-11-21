import React, { useState } from "react";
import styles from "./Slider.module.scss";
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
      <div className={styles.sliderStyles}>
        <div className="">
          <div className={styles.leftArrowStyles} onClick={goToPrevious}>
            <Left />
          </div>
          <div className={styles.rightArrowStyles} onClick={goToNext}>
            <Right />
          </div>
        </div>
        <div
          className={styles.slideStyles}
          style={slideStylesWidthBackground}
        ></div>
        <div className={styles.dotContainerStyles}>
          {slides.map((slide, index) => (
            <div
              className={styles.dotStyle}
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
