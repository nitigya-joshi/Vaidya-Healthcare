import React, { useContext, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import Logo from "../Reuseable/Logo/Logo";
import MappedArray from "../Body/MappedArray/MappedArray";
import NavbarLink from "./NavbarLink";
import AppButton from "../Reuseable/Button/AppButton";
import { ContextApp } from "../../ContextAPI";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const { links } = props;
  const { scrolled, setScrolled } = useContext(ContextApp);
  const [navmenu, setNavmenu] = useState(false);
  const linksrow = (
    <MappedArray array={links}>
      {({ prop }) => <NavbarLink className={styles} link={prop} />}
    </MappedArray>
  );

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <div
      className={`${styles["navbar"]} ${scrolled ? styles["navscrolled"] : ""}`}
    >
      <Logo text1="Vaidya" text2="Healthcare" />
      <div className={`${styles["links"]}`}>
        {linksrow}
        <HashLink smooth to="/login#top">
          <AppButton text="Login" icon="fad fa-sign-in" />
        </HashLink>
      </div>
      <div
        className={`${styles["mobbtn"]} ${navmenu ? styles["open"] : ""}`}
        onClick={() => setNavmenu(!navmenu)}
      >
        <hr className={`${styles["l1"]}`} />
        <hr className={`${styles["l2"]}`} />
        <hr className={`${styles["l3"]}`} />
      </div>
      <div
        className={`${styles["navmenu"]} ${navmenu ? styles["navmenu-enter"] : ""
          }`}
      >
        <Logo text1="Vaidya" text2="Healthcare" />
        <div className={styles["linksmenu"]}>
          {links?.map((link) => {
            return (
              <NavbarLink
                className={styles}
                link={link}
                clickEvent={() => setNavmenu(false)}
              />
            );
          })}
        </div>
        <HashLink smooth to="/login#top">
          <AppButton text="Login" icon="fad fa-sign-in" />
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
