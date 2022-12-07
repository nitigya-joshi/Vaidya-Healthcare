import React from "react";

import TextArrow from "../../Reuseable/TextArrow/TextArrow";
import styles from "./AboutSection.module.css";

function AboutSection(props) {
  const { fulltext } = props;

  return (
    <>
      <div
        className={`${fulltext ? styles["about-me"] : ""} ${styles["about-section"]
          }`}
      >
        <div className={`${styles["bg-image"]}`}></div>
        <div className={`${styles["header"]}`} data-aos="flip-left">
          <h2>About Us</h2>
        </div>
        <div className={`${styles["about-section-row"]}`}>
          {!fulltext && (
            <div className={`${styles["left-part"]}`} data-aos="fade-right">
              <div className={`${styles["about-img"]}`}>
                <img src={require("../../../img/about.png")} alt="He" />
              </div>
            </div>
          )}
          <div className={`${styles["right-part"]}`} data-aos="fade-left">
            <div className={`${styles["about-cont"]}`}>
              {!fulltext && (
                <>
                  <div>
                    <h2>Welcome To Our Health Center</h2>
                  </div>
                  <div>
                    <p>
                      Looking for a trusted & secured online dr consultation in India?
                      Consult a doctor online on Vaidya for any health concern. Our pool of over 1000 trusted doctors across 25+ specialties will ensure all your health queries are answered. You can get online dr advice from a Psychiatrist, Dermatologist, Gynecologist, Sexologist, Pediatrician, Cardiologist, Neurologist, Gastroenterologist, Urologist, Endocrinologist, Dentist, Psychologist, and many more.
                    </p>
                    <TextArrow link="/about" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
