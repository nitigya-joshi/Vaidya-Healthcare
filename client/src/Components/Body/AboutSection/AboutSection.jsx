import React from "react";

import Bar from "./Bar";
import TextArrow from "../../Reuseable/TextArrow/TextArrow";
import Iconbox from "../../Reuseable/Icon/Iconbox";
import { bars } from "../../AppConstant";
import styles from "./AboutSection.module.css";

function AboutSection(props) {
  const { fulltext, limit = 5 } = props;
  const barsRow = bars.slice(0, limit).map((bar) => {
    return <Bar className={styles} bar={bar} />;
  });

  return (
    <div
      className={`${fulltext ? styles["about-me"] : ""} ${
        styles["about-section"]
      }`}
    >
      {fulltext && (
        <>
          <div className={`${styles["left-part"]}`} data-aos="fade-right">
            <div className={`${styles["about-img"]}`}>
              <img src="https://i.imgur.com/b88Bw6C.jpg" alt="" />
            </div>
          </div>
          <div
            className={`${styles["about-me"]} ${styles["aboutc"]} ${styles["about-cont"]}`}
            id="aboutc"
          >
            <h3>About Me</h3>
            <p>
              Extremely motivated to constantly develop my skills and grow
              professionally. I am confident in my ability to come up with new
              ideas and enhance my UI and UX skills.
            </p>
          </div>
          <div>
            <div className={`${styles["about-me"]} ${styles["works"]}`}>
              <img src="https://i.imgur.com/Azabnhm.png" alt="" />
            </div>
          </div>
        </>
      )}
      {!fulltext && (
        <div className={`${styles["left-part"]}`} data-aos="fade-right">
          <div className={`${styles["about-img"]}`}>
            <img src="https://i.imgur.com/b88Bw6C.jpg" alt="" />
          </div>
        </div>
      )}
      <div className={`${styles["right-part"]}`} data-aos="fade-left">
        <div className={`${styles["about-cont"]}`}>
          {!fulltext && (
            <>
              <div>
                <h2>About Me</h2>
                <small className={`${styles["graytext"]}`}>
                  Self Motivated
                </small>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem ipsa alias nisi repellat quisquam itaque doloribus
                  facere aspernatur? Quo error explicabo recusandae
                  <span className={`${styles["fade"]}`}>
                    unde ab doloribus rem a non dicta provident...
                  </span>
                </p>
                <TextArrow link="/aboutme" />
              </div>
            </>
          )}
          <div className={`${styles["bars"]}`}>
            <h3>
              <span>My Skills</span>
              <Iconbox icon="fal fa-paint-brush" />
            </h3>
            {barsRow}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
