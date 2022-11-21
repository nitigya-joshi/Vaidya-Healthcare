import React from "react";

import BannerProps from "../Banner/BannerProps";
import AboutSection from "../AboutSection/AboutSection";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={`${styles["about-me"]}`}>
      <BannerProps
        img="https://i.imgur.com/1PBKN6Z.png"
        title="About Me"
        text="Learn More About Me and My Skills"
      />
      <div className={`${styles["about-me-part"]}`}>
        <AboutSection fulltext limit={Infinity} />
      </div>
    </div>
  );
}

export default AboutMe;
