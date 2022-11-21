import React from "react";

import styles from "./Icon.module.css";
import "./SocialIcon.css";

function Icon(props) {
  const { className = "", icon, style, clickEvent } = props;

  return (
    <i
      className={`${icon} ${styles["icon"]} ${
        className !== "" ? className["icon"] : ""
      }`}
      onClick={() => clickEvent && clickEvent()}
      style={style}
    ></i>
  );
}

export default Icon;
