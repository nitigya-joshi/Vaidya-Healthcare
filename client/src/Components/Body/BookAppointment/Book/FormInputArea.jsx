import React, { useState } from "react";

function FormInputArea(props) {
  const [focused, setFocused] = useState(false);
  const {
    className,
    label,
    errorMessage,
    onBlur,
    onFocus,
    onInput,
    onChange,
    id,
    ...inputProps
  } = props;

  function handleBlur(event) {
    setFocused(true);
    onBlur(event);
  }

  function handleFocus(event) {
    onFocus(event);
  }

  function handleInput(event) {
    onInput(event);
  }

  function handleChange(event) {
    onChange(event);
  }

  return (
    <div className={className["form-input"]}>
      <label>{label}</label>
      <textarea
        id={id}
        className={className["text-area"]}
        {...inputProps}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onChange={handleChange}
        focused={focused.toString()}
      >
        {" "}
      </textarea>
      <span className={className["errorMessage"]}>{errorMessage}</span>
    </div>
  );
}

export default FormInputArea;
