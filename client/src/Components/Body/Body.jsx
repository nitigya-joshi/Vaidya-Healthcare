import React, { useEffect } from "react";
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
import DoctorProfile from "./DocorProfile/DoctorProfile";
import { links } from "../AppConstant";
import styles from "./Body.module.css";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import AdminHome from "./Admin/pages/home/AdminHome";
import List from "./Admin/pages/list/List";
import Calender from "./Calender/pages/Calender";
import Chatbot from "./Chatbot/Chatbot";
import { selectScrolled } from "../../store/scrolledSlice";
import DoctorApplication from "./DoctorApplication/DoctorApplication";
import RoomPage from "../VideoCall/Room";

function Body() {

  const scrolled = useSelector(selectScrolled)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const logoutHandler = async () => {
  //   try {
  //     const res = await fetch('http://localhost:3000/api/users/logout', {
  //       method: 'GET',
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include"
  //     })
  //     const data = await res.json()
  //     if (data.status === 200) {
  //       dispatch(logout())
  //       navigate('/login')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getUserdata = async () => {
    try {
      const res = await fetch(`/api/users/me`, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
      const data = await res.json()
      if (res.status === 200) {
        dispatch(login({
          ...data,
          "loggedIn": true
        }))
      } else {
        const error = new Error(res.error)
        throw error;
      }
    } catch (error) {
      console.error(error)
      dispatch(logout())
    }
  }

  useEffect(() => {
    getUserdata()
  }, [])

  return (
    <div className={`${styles["body"]}`}>
      <Icon
        icon={
          scrolled
            ? `fad fa-arrow-up ${styles["top"]} ${styles["scrol"]}`
            : `${styles["top"]}`
        }
        clickEvent={() => window.scrollTo(0, 0)}
      />
      <Navbar links={links} user={user} />

      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={!user ? <LogIn /> : <Navigate to='/' />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to='/' />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book" element={user?.loggedIn ? <BookAppointment /> : <Navigate to='/login' />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={user?.loggedIn ? <Profile /> : <Navigate to='/login' />} />
          <Route path="/docProfile" element={<DoctorProfile />} />
          <Route path="/admin" element={user?.loggedIn ? <AdminHome /> : <Navigate to='/login' />} />
          <Route path="/admin/users" element={user?.loggedIn ? <List listtype={'users'} /> : <Navigate to='/login' />} />
          <Route path="/admin/doctors" element={user?.loggedIn ? <List listtype={'doctors'} /> : <Navigate to='/login' />} />
          <Route path="/admin/approve" element={user?.loggedIn ? <List listtype={'approve'} /> : <Navigate to='/login' />} />
          <Route path="/events" element={<Calender />} />
          <Route path="/apply" element={<DoctorApplication />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="*" element={<YouAreLost />} />
        </Routes>
      </AnimatePresence>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default Body;
