import React from "react";

import Card from "../../Reuseable/Card/Card";
import { services } from "../../AppConstant";
import styles from "./FeaturesSection.module.css";

function FeaturesSection() {
  const servicesRow = services?.map((service) => {
    return <Card card={service} themeShadow={true} />;
  });

  return (
    <div className={`${styles["features-section"]}`}>
      <div className={`${styles["header"]}`} data-aos="flip-left">
        <h2>Features</h2>
      </div>
      <div className={`${styles["cards-container"]}`}>{servicesRow}</div>
    </div>
  );
}

export default FeaturesSection;
