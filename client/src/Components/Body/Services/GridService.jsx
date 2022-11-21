import React from "react";
import { HashLink } from "react-router-hash-link";

import Iconbox from "../../Reuseable/Icon/Iconbox";

function GridService(props) {
  const { className, service } = props;
  const { title, texts, img, reverse, text, icon, link } = service;

  return (
    <div
      id={title.replaceAll(" ", "").toLowerCase()}
      className={`${className["gridservice"]} ${
        reverse ? className["row-reverse"] : ""
      }`}
    >
      <div
        className={`${className["content"]} ${reverse}`}
        data-aos={`fade-${reverse ? "left" : "right"}`}
      >
        <Iconbox icon={icon} className={className} />
        <HashLink to={link + "#top"}>
          <h2>{title}</h2>
        </HashLink>
        <div className={`${className["texts"]}`}>
          <div>
            {texts?.map((text) => {
              return <span>{text + "."}</span>;
            })}
          </div>
          <small className={`${className["graytext"]}`}>{text}</small>
        </div>
      </div>
      <div
        className={`${className["img"]}`}
        data-aos={`fade-${reverse ? "right" : "left"}`}
      >
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default GridService;
