import React from "react";

import SocialIconTab from "./SocialIconTab";
import styles from "./Banner.module.css";

function Banner(props) {
  const { className = "", html, style, height = "50vh" } = props;

  return (
    <div
      className={`${styles["bannercont"]} ${className}`}
      style={{ height: height ?? "" }}
    >
      <div
        className={`${styles["banner"]}`}
        style={style}
        data-aos="zoom-out"
      ></div>
      <SocialIconTab className={styles} />
      {html}
    </div>
  );
}

export default Banner;
