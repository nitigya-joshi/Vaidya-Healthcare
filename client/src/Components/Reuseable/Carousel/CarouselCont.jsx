import React from "react";
import Carousel from "react-material-ui-carousel";

import RippleIcon from "../Icon/RippleIcon";
import styles from "./Carousel.module.css";

function CarouselCont(props) {
  const { slides, setCurrentSlideShown } = props;

  return (
    <Carousel
      className={`${styles["carousel"]}`}
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <div onClick={onClick}>
            <RippleIcon icon={`fal fa-arrow-${next ? "right" : "left"} `} />
          </div>
        );
      }}
      IndicatorIcon={<div className={`${styles["line"]}`}></div>}
      activeIndicatorIconButtonProps={{ className: styles["active"] }}
      interval={5000}
      onChange={(event) => setCurrentSlideShown(event)}
    >
      {slides}
    </Carousel>
  );
}

export default CarouselCont;
