import React, { useState, useRef, useEffect } from "react";

import OptionsContainer from "./OptionsContainer";
import Selected from "./Selected";
import SearchBox from "./SearchBox";

function SelectMenu(props) {
  const [isActiveOptions, setIsActiveOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.placeholder);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const ref = useRef({
    selectDivRef: useRef(),
    selectLabelRef: useRef(),
    selectSvgRef: useRef(),
    selectPathRef: useRef(),
    searchRef: useRef(),
  });
  let newOptions;

  useEffect(() => {
    if (props.value !== "") {
      setSelectedOption(props.value);
    }
    else if (selectedOption !== props.placeholder && props.value === "") {
      setSelectedOption(props.placeholder)
    }

    function closeMenu(event) {
      if (
        event.path[0] !== ref.current.selectDivRef.current &&
        event.path[0] !== ref.current.selectLabelRef.current &&
        event.path[0] !== ref.current.selectSvgRef.current &&
        event.path[0] !== ref.current.selectPathRef.current
      ) {
        setIsActiveOptions(false);
      }
    }
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [props, selectedOption, isActiveOptions]);

  function optionsHandler(option) {
    setSelectedOption(option);
    setSearchTerm("");
    setIsActiveOptions(false);
    props.optionsHandler(option);
  }

  function searchHandler(searchTerm) {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      newOptions = props.options.filter((option) => {
        return Object.values(option)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());
      });
      setSearchResults(newOptions);
    } else {
      setSearchResults(props.options);
    }
  }

  function onClick() {
    setIsActiveOptions(!isActiveOptions);
    setSearchTerm("");
    if (props.isSearchBox) {
      !isActiveOptions
        ? ref.current.searchRef.current.focus()
        : ref.current.searchRef.current.blur();
    }
    if (props.setSpan !== undefined) {
      props.onClickMenu(props.id);
    }
  }

  return (
    <div className={props.className["custom-selection-box"]}>
      <label>
        {props.label}
        {props.required && (
          <span className={props.className["required"]}>
            <sup> *</sup>
          </span>
        )}
      </label>
      <div className={props.className["select-box"]}>
        <OptionsContainer
          className={props.className}
          options={searchTerm < 1 ? props.options : searchResults}
          isActiveOptions={isActiveOptions}
          isSearchBox={props.isSearchBox}
          optionsHandler={optionsHandler}
          searchTerm={searchTerm}
          onChange={props.onChange}
        />
        <Selected
          className={props.className}
          onClick={onClick}
          selectedOption={selectedOption}
          placeholder={props.placeholder}
          setSpan={props.setSpan}
          required={props.required}
          ref={ref.current}
        />
        {props.isSearchBox && (
          <SearchBox
            className={props.className}
            searchTerm={searchTerm}
            onChange={searchHandler}
            ref={ref.current.searchRef}
          />
        )}
      </div>
      {props.errorMessage !== undefined &&
        props.required === true &&
        props.setSpan === true &&
        !isActiveOptions &&
        selectedOption === props.placeholder ? (
        <span className={props.className["errorMessage"]}>
          {props.errorMessage}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectMenu;
