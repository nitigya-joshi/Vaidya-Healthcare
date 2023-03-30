import React from "react";
import { HashLink } from "react-router-hash-link";
import Iconbox from "../Icon/Iconbox";
import TextArrow from "../TextArrow/TextArrow";
import styles from "./Card.module.css";

function Card(props) {
  const {
    className = "",
    themeShadow,
    iconLink,
    learnMoreBtn = false,
  } = props;
  const { text, icon, title, link } = props.card;
  return (
    <HashLink
      to={link}
      className={`${className !== "" ? className["card"] : ""} ${styles["card"]
        } ${themeShadow ? styles["theme-shadow-card"] : ""}`}
      data-aos="zoom-in"
    >
      <Iconbox className={className} icon={icon} />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      {iconLink}
      {learnMoreBtn && <TextArrow className={className} text="Learn More" />}
    </HashLink>
  );
}

export default Card;
