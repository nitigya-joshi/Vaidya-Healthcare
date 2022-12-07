import React from "react";

import Logo from "../Reuseable/Logo/Logo";
import Icon from "../Reuseable/Icon/Icon";
import Columns from "./Columns";
import { contactBoxes, services, socialIcons } from "../AppConstant";
import styles from "./Footer.module.css";

function Footer(props) {
  const columns = [
    {
      title: <Logo text1="Vaidya" text2="Healthcare" />,
      logo: true,
    },
    {
      title: "Features",
      links: services,
      linkTitle: true,
    },
    {
      title: "Contact Us",
      links: contactBoxes,
      copy: true,
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

  const columnsRow = columns?.map((column, index) => {
    return <Columns key={index} className={styles} column={column} />;
  });

  const socialIconsRow = socialIcons?.map((icon, index) => {
    return (
      <a key={index} href={icon.link} target="__blank">
        <Icon key={index} className={styles} icon={`${icon.icon} social-icon`} />
      </a>
    );
  });

  return (
    <div className={`${styles["footer"]}`} id="footer">
      <div className={`${styles["footer-grid"]}`}>{columnsRow}</div>
      <div className={`${styles["bottom-content"]}`}>
        <div className={`${styles["rights-reserved"]}`}>
          <small className={`${styles["graytext"]}`}>
            All Rights Reserved  2022, made by Vaidya Healthcare Team
          </small>
        </div>
        <div className={`${styles["social-icons"]}`}>{socialIconsRow}</div>
      </div>
    </div>
  );
}

export default Footer;
