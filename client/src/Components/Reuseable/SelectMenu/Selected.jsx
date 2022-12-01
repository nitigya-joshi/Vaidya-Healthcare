import React, { forwardRef } from "react";

const Selected = forwardRef((props, ref) => {
  return (
    <div
      className={
        props.className["selected"] +
        (props.setSpan !== undefined &&
          props.required !== undefined &&
          props.required &&
          props.setSpan &&
          props.selectedOption === props.placeholder
          ? " " + props.className["error"]
          : "")
      }
      onClick={props.onClick}
      ref={ref.selectDivRef}
    >
      <label
        className={props.className["selected-current"]}
        ref={ref.selectLabelRef}
      >
        {props.selectedOption}
      </label>
      <svg viewBox="0 0 512 512" ref={ref.selectSvgRef}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 184l144 144 144-144"
          ref={ref.selectPathRef}
        />
      </svg>
    </div>
  );
});

export default Selected;
