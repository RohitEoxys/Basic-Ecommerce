import React, { useState, useEffect } from "react";

import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import "./Slider.scss";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    let interval;
    if (slideIndex !== dataSlider.length + 1) {
      interval = setInterval(() => {
        setSlideIndex(slideIndex + 1);
      }, 10000);
    } else if (slideIndex === dataSlider.length + 1) {
      setSlideIndex(1);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? "slide active-anim" : "slide"
            }>
            <img
              src={require(`../../../../Assets/Slider/${index + 1}.jpg`)}
              // src={imag}
              alt="finance"
              className={`${slideIndex === 1 ? "logoImage" : ""}`}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
}
