import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./NavbarLink.css";

function NavbarLink(props) {
  const { className, link, clickEvent } = props;
  return (
    <div className={`${className["link-container"]}`}>
      <NavHashLink
        to={link.link}
        activeclassname={`${className["activelink"]}`}
        onClick={() => {
          clickEvent && clickEvent();
        }}
      >
        <span>{link.text}</span>
        <div className={`${className["dot"]}`}></div>
      </NavHashLink>
    </div>
  );
}
export default NavbarLink;
