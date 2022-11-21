import React from "react";

import Banner from "./Banner";
import styles from "./Banner.module.css";

function BannerProps(props) {
  const { img, title, text, backgroundColor = "#f5f5f5" } = props;

  return (
    <Banner
      className={`${styles["bp"]}`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundColor: backgroundColor,
      }}
      html={
        <>
          <div
            style={{
              width: "30%",
            }}
            data-aos="fade-right"
          >
            <h1>{title}</h1>
            <small className={`${styles["graytext"]}`}>{text}</small>
          </div>
        </>
      }
    />
  );
}

export default BannerProps;
