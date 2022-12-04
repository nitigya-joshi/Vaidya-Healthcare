import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Icon from "../Reuseable/Icon/Icon";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import Doctors from "./Doctors/Doctors";
import BookAppointment from "./BookAppointment/BookAppointment";
import About from "./About/About";
import Contact from "./Contact/Contact";
import YouAreLost from "./404/YouAreLost";
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";
import { links } from "../AppConstant";
import { ContextApp } from "../../ContextAPI";
import styles from "./Body.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
function Body() {

  const { scrolled } = useContext(ContextApp);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    if (user) {
      dispatch(login({
        ...user,
        "loggedIn": true
      }))
    }
  }, [dispatch])

  return (
    <div className={`${styles["body"]}`}>
      <Icon
        icon = {
          scrolled
            ? `fad fa-arrow-up ${styles["top"]} ${styles["scrol"]}`
            : `${styles["top"]}`
        }
        clickEvent={() => window.scrollTo(0, 0)}
      />
      <Navbar links={links} user={user}/>

      <AnimatePresence>
        <Routes>
          <Route path="/login" element={!user ? <LogIn />  : <Navigate to='/' />} />
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/signup" element={!user ? <SignUp />  : <Navigate to='/' />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book" element={user?.loggedIn ? <BookAppointment />  : <Navigate to='/login' />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={user?.loggedIn ? <Profile /> : <Navigate to='/login' />} />
          <Route path="*" element={<YouAreLost />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Body;
