import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { ContextApp } from "../../../ContextAPI";

function Dropdown(props) {
  const { className, options, link } = props;
  const { setKeyword } = useContext(ContextApp);
  const optionsrow = options?.map((option) => {
    return (
      <HashLink
        to={link.keyword ? "/works" : option.link}
        onClick={() => {
          link.keyword && setKeyword(option.link);
        }}
      >
        <span>
          <span>{option.text}</span>
        </span>
        <i className="fad fa-chevron-right"></i>
      </HashLink>
    );
  });

  return <div className={`${className["dropdown"]}`}>{optionsrow}</div>;
}

export default Dropdown;
