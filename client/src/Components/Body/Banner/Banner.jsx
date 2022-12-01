import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  const { html, style, height } = props;

  return (
    <div
      className={`${styles["bannercont"]}`}
      style={{ height: height ?? "" }}
    >
      <div
        className={`${styles["banner"]}`}
        style={style}
        data-aos="zoom-out"
      ></div>
      {html}
    </div>
  );
}

export default Banner;
