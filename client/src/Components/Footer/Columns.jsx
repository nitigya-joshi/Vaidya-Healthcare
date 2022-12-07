import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Columns.module.css";

function Columns(props) {
  const { className = "", column } = props;
  const [expanded, setExpanded] = useState(false);

  function determineLink(link, index) {
    return (
      <HashLink key={index} smooth to={`${link.link} #top`}>
        <i className={link.icon}></i>
        <p className={`${styles["link-cont"]}`}>
          {column.linkTitle ? link.title : link.text}
        </p>
      </HashLink>
    );
  }

  return (
    <div
      className={`${styles["col"]} ${className !== "" ? className["col"] : ""}`}
    >
      <div
        className={`${styles["expand-title"]} ${
          className !== "" ? className["expand-title"] : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <h3>{column.title}</h3>
        {!column.logo && (
          <i
            className={`fad fa-chevron-${
              expanded
                ? `down transformed ${
                    className !== "" ? className["transformed"] : ""
                  }`
                : "down"
            }`}
          ></i>
        )}
      </div>
      <div
        className={`${styles["expand"]} ${
          className !== "" ? className["expand"] : ""
        } ${
          expanded
            ? `${styles["expanded"]} ${
                className !== "" ? className["expanded"] : ""
              }`
            : ""
        }`}
      >
        <div className={`${styles["column-links"]}`}>
          {column.links?.map((link, index) => {
            return determineLink(link, index);
          })}
        </div>
      </div>
    </div>
  );
}

export default Columns;
