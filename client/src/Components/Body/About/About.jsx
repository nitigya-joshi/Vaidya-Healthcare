import React from "react";

import AboutRow from "./AboutRow";
import BannerProps from "../Banner/BannerProps";
import { gridservices } from "../../AppConstant";
import styles from "./About.module.css";

function Services() {
  const gridServicesRow = gridservices?.map((service) => {
    return <AboutRow className={styles} service={service} />;
  });

  return (
    <div className={`${styles["services"]}`}>
      <BannerProps
        img="https://i.imgur.com/1PBKN6Z.png"
        title="About Us"
        text="Learn More about us"
      />
      <div className={`${styles["services-container"]}`}>{gridServicesRow}</div>
    </div>
  );
}

export default Services;
