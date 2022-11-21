import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import AppButton from "../../Reuseable/Button/AppButton";
import styles from "./YouAreLost.module.css";

function YouAreLost() {
  const [textShadow, setTExtShadow] = useState({
    x: 450,
    y: 300,
  });

  function determineShadow(event) {
    setTExtShadow({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div className={`${styles["you-are-lost"]}`} onMouseMove={determineShadow}>
      <p
        style={{
          textShadow: `${textShadow.x / 30}px ${
            textShadow.y / 30
          }px 10px rgba(0, 0, 0, 0.33) `,
        }}
      >{`4{}4`}</p>
      <HashLink smooth to="/#top">
        <AppButton text="Back Home" icon="fad fa-home" />
      </HashLink>
    </div>
  );
}

export default YouAreLost;
