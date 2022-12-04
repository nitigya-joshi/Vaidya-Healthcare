import React from "react";
import { NavHashLink } from "react-router-hash-link";
import Dropdown from "./Dropdown/Dropdown";
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
      {link.dropdown && (
        <Dropdown className={className} options={link.dropdown} link={link} />
      )}
    </div>
  );
}
export default NavbarLink;
