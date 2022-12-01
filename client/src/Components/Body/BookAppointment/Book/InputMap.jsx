import React, { useState } from "react";

import FormInput from "./FormInput";
import PatientSex from "./PatientSex";
import State from "./State";
import City from "./City";
import FormInputArea from "./FormInputArea";

function InputMap(props) {
  const [selectedStateId, setselectedStateId] = useState(0);

  function handleSelectedState(selectedStateId) {
    setselectedStateId(selectedStateId);
  }

  return props.inputs.map((input) => {
    if (input.type === "radio" && input.id === "patientSex") {
      return (
        <PatientSex
          key={input.id}
          className={props.className}
          {...input}
          value={props.values[input.name]}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          onClickMenu={props.onClickMenu}
          onChange={props.onChange}
        />
      );
    } else if (input.type === "radio" && input.id === "patientState") {
      return (
        <State
          key={input.id}
          className={props.className}
          {...input}
          value={props.values[input.name]}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          onChange={props.onChange}
          onClickMenu={props.onClickMenu}
          selectedState={handleSelectedState}
        />
      );
    } else if (input.type === "radio" && input.id === "patientCity") {
      return (
        <City
          key={input.id}
          className={props.className}
          {...input}
          value={props.values[input.name]}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          onChange={props.onChange}
          onClickMenu={props.onClickMenu}
          selectedStateId={selectedStateId}
        />
      );
    } else if (input.type === "text-area") {
      return (
        <FormInputArea
          key={input.id}
          className={props.className}
          {...input}
          value={props.values[input.name]}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          onChange={props.onChange}
        />
      );
    } else {
      return (
        <FormInput
          key={input.id}
          className={props.className}
          {...input}
          value={props.values[input.name]}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          onChange={props.onChange}
        />
      );
    }
  });
}

export default InputMap;
