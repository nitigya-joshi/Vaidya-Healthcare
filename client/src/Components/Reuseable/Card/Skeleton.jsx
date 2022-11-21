import React from "react";

import Iconbox from "../Icon/Iconbox";
import styles from "./Skeleton.module.css";

function Skeleton() {
  return (
    <div className={`${styles["skeleton"]}`}>
      <Iconbox />
      <h4> </h4>
      <div className={`${styles["skeleton-div"]}`}></div>
    </div>
  );
}

export default Skeleton;
