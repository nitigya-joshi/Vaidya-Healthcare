import React from "react";

import Icon from "./Icon";
import styles from "./Icon.module.css";

function Iconbox(props) {
  const { className = "", icon } = props;
  return (
    <div
      className={`${styles["iconbox"]} ${
        className !== "" ? className["iconbox"] : ""
      }`}
    >
      <Icon className={className} icon={icon} />
    </div>
  );
}

export default Iconbox;
