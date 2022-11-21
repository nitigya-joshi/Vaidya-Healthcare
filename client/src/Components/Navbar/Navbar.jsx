import React, { useContext, useEffect, useState } from "react";

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
      <Logo text1="TurtleX" text2="Digital" />
      <div className={`${styles["links"]}`}>{linksrow}</div>
      <div
        className={`${styles["mobbtn"]} ${navmenu ? styles["open"] : ""}`}
        onClick={() => setNavmenu(!navmenu)}
      >
        <hr className={`${styles["l1"]}`} />
        <hr className={`${styles["l2"]}`} />
        <hr className={`${styles["l3"]}`} />
      </div>
      <div
        className={`${styles["navmenu"]} ${
          navmenu ? styles["navmenu-enter"] : ""
        }`}
      >
        <Logo text1="TurtleX" text2="Digital" />
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
          <AppButton text="Learn More" icon="fal fa-arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
