import React from "react";

function Item(props) {
  const { className, title, text } = props;

  return (
    <div className={`${className["item"]}`}>
      <small className={`${className["graytext"]}`}>{title}</small>
      <span>
        {text.constructor === Array ? (
          text?.map((txt) => {
            return (
              <span
                className={`${className["color"]}`}
                title={txt}
                style={{ backgroundColor: txt }}
              ></span>
            );
          })
        ) : (
          <span>{text}</span>
        )}
      </span>
    </div>
  );
}

export default Item;
