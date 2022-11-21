import React from "react";
import Iconbox from "../../Reuseable/Icon/Iconbox";

function Bar(props) {
  const { percent, skill, icon } = props.bar;
  const { className } = props;

  return (
    <div className={`${className["bar"]}`}>
      <strong className={`${className["flexrow"]}`}>
        <span>{skill}</span>
        <Iconbox icon={icon} />
      </strong>
      <div className={`${className["track"]}`}>
        <div
          className={`${className["percentage"]}`}
          style={{ width: `${percent}%` }}
        >
          <span>{`${percent}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default Bar;
