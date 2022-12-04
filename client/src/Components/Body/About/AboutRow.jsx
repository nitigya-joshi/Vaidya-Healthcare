import React from "react";

function AboutRow(props) {
  const { className, service } = props;
  const { title, texts, img, reverse, text } = service;

  return (
    <div
      id={title.replaceAll(" ", "").toLowerCase()}
      className={`${className["about"]} ${
        reverse ? className["row-reverse"] : ""
      }`}
    >
      <div
        className={`${className["content"]} ${reverse}`}
        data-aos={`fade-${reverse ? "left" : "right"}`}
      >
        <h2>{title}</h2>
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
        <img src={img} alt="pp" />
      </div>
    </div>
  );
}

export default AboutRow;
