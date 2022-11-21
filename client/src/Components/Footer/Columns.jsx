import React, { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link";
import CopyToClipboard from "react-copy-to-clipboard";

import { ContextApp } from "../../ContextAPI";
import { addNotification } from "../AppFunctions";
import styles from "./Columns.module.css";

function Columns(props) {
  const { className = "", column } = props;
  const { notifisystem } = useContext(ContextApp);
  const [expanded, setExpanded] = useState(false);

  function determineLink(link) {
    if (column.copy) {
      const parameters = {
        msg: "Copied to clipboard!",
        icon: "fad fa-copy",
        notifisystem,
      };
      return (
        <CopyToClipboard
          text={link.text}
          onCopy={() => addNotification(parameters)}
        >
          <a
            className={`${styles["link-cont"]}`}
            href={link.link}
            target={!link.notBlank && "__blank"}
          >
            <i className={link.icon}></i>
            <span>{link.text}</span>
          </a>
        </CopyToClipboard>
      );
    }

    if (column.blank) {
      return (
        <a
          className={`${styles["link-cont"]}`}
          href={link.link}
          target={!link.notBlank && "__blank"}
        >
          <i className={link.icon}></i>
          <span>{link.text}</span>
        </a>
      );
    }

    return (
      <HashLink smooth to={`${link.link} #top`}>
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
          {column.links?.map((link) => {
            return determineLink(link);
          })}
        </div>
      </div>
    </div>
  );
}

export default Columns;
