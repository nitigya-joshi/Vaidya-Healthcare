import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";

import Card from "../../Reuseable/Card/Card";
import BannerProps from "../Banner/BannerProps";
import Skeleton from "../../Reuseable/Card/Skeleton";
import { ContextApp } from "../../../ContextAPI";
import { links, works } from "../../AppConstant";
import styles from "./Works.module.css";

function Works() {
  const { keyword, setKeyword } = useContext(ContextApp);
  const filtersRow = links[3].dropdown.map((link) => {
    return (
      <span
        className={`${styles["graytext"]} ${
          link.link === keyword ? styles["active"] : ""
        }`}
        onClick={() => setKeyword(link.link)}
      >
        {link.text}
      </span>
    );
  });
  const worksRow = works
    ?.filter(
      (work) => work.filterby === keyword || keyword === "" || keyword === "all"
    )
    .map((work) => {
      return (
        <HashLink>
          <Card
            className={styles}
            themeShadow
            card={work}
            learnMoreBtn={true}
          />
        </HashLink>
      );
    });

  return (
    <div className={`${styles["services"]}`}>
      <BannerProps
        img="https://i.imgur.com/akOOO5O.png"
        title="Works"
        text="View the projects that I have made in the past!"
      />
      <div className={`${styles["services-container"]}`}>
        <h2
          className={`${styles["graytext"]} ${styles["title"]}`}
          data-aos="fade-left"
        >
          <small>My Projects</small>
          <div className={`${styles["hr"]}`}></div>
        </h2>
        <div className={`${styles["filter-cards"]}`}>
          <div className={`${styles["filters"]}`}>{filtersRow}</div>
          <div className={`${styles["cards"]}`}>
            {worksRow.length === 0 ? (
              <>
                <Skeleton />
              </>
            ) : (
              worksRow
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
