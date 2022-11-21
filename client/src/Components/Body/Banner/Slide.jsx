import React from "react";

import Iconbox from "../../Reuseable/Icon/Iconbox";
import TextArrow from "../../Reuseable/TextArrow/TextArrow";

function Slide(props) {
  const { className, slide, currentSlide, index } = props;

  function determineFade(type) {
    if (currentSlide === index) return "";

    return `fade-${type}`;
  }

  return (
    <div
      className={`${className["slide"]} ${
        currentSlide === index ? "active" : "inactive"
      }`}
    >
      <div>
        <h3 data-aos={determineFade("right")}>
          <Iconbox icon={`fad fa-${slide.icon}`} />
          <span>{slide.title}</span>
        </h3>
        <p
          className={`${className["graytext"]}`}
          data-aos={determineFade("right")}
        >
          <i className={`fad fa-${slide.texticon}`}></i>
          <span>{slide.text}</span>
        </p>
        <div className={`${className["btns"]}`} data-aos={determineFade("up")}>
          <TextArrow link="/aboutme" />
        </div>
      </div>
      <div data-aos={determineFade("left")}>
        <img src={slide.img} alt="" />
      </div>
    </div>
  );
}

export default Slide;
