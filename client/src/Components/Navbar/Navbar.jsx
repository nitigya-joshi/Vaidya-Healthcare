import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import Logo from "../Reuseable/Logo/Logo";
import MappedArray from "../Body/MappedArray/MappedArray";
import NavbarLink from "./NavbarLink";
import AppButton from "../Reuseable/Button/AppButton";
import styles from "./Navbar.module.css";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectScrolled, setScrolled } from "../../store/scrolledSlice";

function Navbar(props) {
  const { links, user } = props;
  const scrolled = useSelector(selectScrolled)
  const [navmenu, setNavmenu] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const linksrow = (
    <MappedArray array={links}>
      {({ prop }) => <NavbarLink key={prop.id} className={styles} link={prop} />}
    </MappedArray>
  );

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        dispatch(setScrolled(true))
      } else {
        dispatch(setScrolled(false))
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, [dispatch]);

  const logoutHandler = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/users/logout', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
      const data = await res.json()
      if (data.message === "logged out") {
        dispatch(logout())
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className={`${styles["navbar"]} ${scrolled ? styles["navscrolled"] : ""}`}
    >
      <Logo text1="Vaidya" text2="Healthcare" />
      <div className={`${styles["links"]}`}>
        {linksrow}
        {user?.loggedIn ? <NavbarLink className={styles} link={{ link: "/profile", text: "Profile" }} /> : ''}
        {user?.loggedIn && user?.isAdmin ? <NavbarLink className={styles} link={{ link: "/admin", text: "Admin" }} /> : ''}
        {user?.loggedIn && user?.isDoctor ? <NavbarLink className={styles} link={{ link: "/events", text: "Events" }} /> : <NavbarLink className={styles} link={{ link: "/apply", text: "Apply Now" }} />}
        {!user?.loggedIn ?
          <HashLink smooth to="/login">
            <AppButton text="Login" icon="fad fa-sign-in" />
          </HashLink>
          :
          <AppButton text="Logout" icon="fad fa-sign-in" clickEvent={logoutHandler} />
        }
      </div>
      <div className={`${styles["mobbtn"]} ${navmenu ? styles["open"] : ""}`} onClick={() => setNavmenu(!navmenu)}>
        <hr className={`${styles["l1"]}`} />
        <hr className={`${styles["l2"]}`} />
        <hr className={`${styles["l3"]}`} />
      </div>
      <div className={`${styles["navmenu"]} ${navmenu ? styles["navmenu-enter"] : ""}`}>
        <Logo text1="Vaidya" text2="Healthcare" />
        <div className={styles["linksmenu"]}>
          {links?.map((link) => {
            return (
              <NavbarLink
                key={link.id}
                className={styles}
                link={link}
                clickEvent={() => setNavmenu(false)}
              />
            );
          })}
        </div>
        {!user?.loggedIn ?
          <HashLink smooth to="/login">
            <AppButton text="Login" icon="fad fa-sign-in" />
          </HashLink>
          :
          <AppButton text="Logout" icon="fad fa-sign-in" clickEvent={logoutHandler} />
        }
      </div>
    </div>
  );
}

export default Navbar;
