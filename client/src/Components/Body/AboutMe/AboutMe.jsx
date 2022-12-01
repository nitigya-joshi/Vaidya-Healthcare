import React from "react";

import BannerProps from "../Banner/BannerProps";
import AboutSection from "../AboutSection/AboutSection";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={`${styles["about-me"]}`}>
      <BannerProps
        title="About Me"
        text="Learn More About Me and My Skills"
      />
      <div className={`${styles["about-me-part"]}`}>
        <AboutSection fulltext limit={Infinity} />x
      </div>
    </div>
  );
}

export default AboutMe;
