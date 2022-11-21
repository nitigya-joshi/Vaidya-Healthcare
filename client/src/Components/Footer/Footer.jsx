import React from "react";

import Logo from "../Reuseable/Logo/Logo";
import Icon from "../Reuseable/Icon/Icon";
import Columns from "./Columns";
import { contactBoxes, services, socialIcons } from "../AppConstant";
import styles from "./Footer.module.css";

function Footer(props) {
  const columns = [
    {
      title: <Logo text1="TurtleX" text2="Digital" />,
      logo: true,
    },
    {
      title: "Features",
      links: services,
      linkTitle: true,
    },
    {
      title: "Contact Me",
      links: contactBoxes,
      copy: true,
    },
    {
      title: "Portfolio",
      links: [
        {
          text: "Github",
          icon: "fab fa-github",
          link: "https://github.com/Joshua131313",
        },
        {
          text: "Dribbble",
          icon: "fab fa-dribbble",
          link: "https://dribbble.com/josh1231",
        },
      ],
      blank: true,
    },
    {
      title: "Policies",
      links: [
        {
          text: "Privacy Policy",
          link: "/website/privacy",
          icon: "fad fa-shield",
        },
        {
          text: "Terms and Conditions",
          link: "/website/terms",
          icon: "fad fa-file",
        },
        {
          text: "Learn More",
          link: "/website/about",
          icon: "fad fa-info-circle",
        },
      ],
    },
  ];

  const columnsRow = columns?.map((column) => {
    return <Columns className={styles} column={column} />;
  });

  const socialIconsRow = socialIcons?.map((icon) => {
    return (
      <a href={icon.link} target="__blank">
        <Icon className={styles} icon={`${icon.icon} social-icon`} />
      </a>
    );
  });

  return (
    <div className={`${styles["footer"]}`} id="footer">
      <div className={`${styles["footer-grid"]}`}>{columnsRow}</div>
      <div className={`${styles["bottom-content"]}`}>
        <div className={`${styles["rights-reserved"]}`}>
          <small className={`${styles["graytext"]}`}>
            All Rights Reserved TurtleXDigital 2022, made by Aryan Verma
          </small>
        </div>
        <div className={`${styles["social-icons"]}`}>{socialIconsRow}</div>
      </div>
    </div>
  );
}

export default Footer;
