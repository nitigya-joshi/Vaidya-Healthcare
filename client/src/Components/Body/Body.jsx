import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotificationSystem from "react-notification-system";

import Icon from "../Reuseable/Icon/Icon";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Services from "./Services/Services";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import YouAreLost from "./404/YouAreLost";
import Footer from "../Footer/Footer";
import ProjectPage from "../Reuseable/ProjectPage/ProjectPage";
import { links, style, works } from "../AppConstant";
import { ContextApp } from "../../ContextAPI";
import styles from "./Body.module.css";

function Body() {
  const { scrolled, notifisystem } = useContext(ContextApp);
  const worksRoutes = works?.map((work) => {
    return <Route path={work.link} element={<ProjectPage project={work} />} />;
  });

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
      <NotificationSystem ref={notifisystem} style={style} />
      <Navbar links={links} />

      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          {worksRoutes}
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<YouAreLost />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Body;
