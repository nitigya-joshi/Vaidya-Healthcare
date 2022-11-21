import React from "react";
import Button from "@material-ui/core/Button";

import styles from "./AppButton.module.css";

function AppButton(props) {
  const { icon, clickEvent, text } = props;

  return (
    <Button
      type="submit"
      className={`${styles["button"]}`}
      onClick={() => clickEvent && clickEvent()}
    >
      <span>{text}</span>
      <i className={icon}></i>
    </Button>
  );
}

export default AppButton;
