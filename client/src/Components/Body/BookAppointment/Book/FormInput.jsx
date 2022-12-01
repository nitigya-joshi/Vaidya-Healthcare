import React, { useState } from "react";

function FormInput(props) {
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
      <label>
        {label}
        {props.required && (
          <span className={className["required"]}>
            <sup> *</sup>
          </span>
        )}
      </label>
      <input
        id={id}
        className={className["input"]}
        {...inputProps}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onChange={handleChange}
        focused={focused.toString()}
      />
      <span className={className["errorMessage"]}>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
