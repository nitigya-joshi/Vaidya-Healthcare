import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import styles from "./Input.module.css";

function ObjectInput(props) {
  const {
    value,
    setValue,
    type = "text",
    disabled = false,
    icon = "",
    text,
    placeholder,
    readOnly = false,
    required = true,
    obj,
    textarea,
    name,
  } = props;

  return (
    <>
      {!textarea ? (
        <label className={`${styles["app-label"]}`}>
          <input
            className={`${styles["input"]}`}
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value[obj]}
            required={required}
            onChange={(event) =>
              setValue((prevValue) => {
                return { ...prevValue, [obj]: event.target.value };
              })
            }
          />
          <span>{text}</span>
          <i className={icon}></i>
        </label>
      ) : (
        <div>
          <TextareaAutosize
            className={`${styles["resizable-text-area"]}`}
            name={name}
            disabled={disabled}
            readOnly={readOnly}
            value={value[obj]}
            required={required}
            onChange={(event) =>
              setValue((prevValue) => {
                return { ...prevValue, [obj]: event.target.value };
              })
            }
          />
          <span>{text}</span>
        </div>
      )}
    </>
  );
}

export default ObjectInput;
