import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo(props) {
  const { text1, text2 } = props;

  return (
    <Link className={`${styles["logo"]}`} to="">
      <img src="https://i.imgur.com/QQ8FTjR.png" alt="" />
      <span>
        <strong>{text1}</strong>
        <span>{text2}</span>
      </span>
    </Link>
  );
}

export default Logo;
