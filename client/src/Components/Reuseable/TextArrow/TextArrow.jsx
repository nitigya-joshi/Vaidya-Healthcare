import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./TextArrow.module.css";

function TextArrow(props) {
  const {
    className = "",
    text = "Read More",
    icon = "fad fa-long-arrow-right",
    link,
  } = props;

  return (
    <HashLink
      to={link + "#top"}
      className={`${className !== "" ? className["readmore"] : ""} ${
        styles["readmore"]
      }`}
    >
      <span>{text}</span>
      <i className={icon}></i>
    </HashLink>
  );
}

export default TextArrow;
