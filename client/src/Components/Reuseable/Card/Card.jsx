import React, { useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { withStyles } from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import CopyToClipboard from "react-copy-to-clipboard";

import Iconbox from "../Icon/Iconbox";
import TextArrow from "../TextArrow/TextArrow";
import { ContextApp } from "../../../ContextAPI";
import { addNotification } from "../../AppFunctions";
import styles from "./Card.module.css";

function Card(props) {
  const {
    className = "",
    themeShadow,
    iconLink,
    copy = false,
    learnMoreBtn = false,
  } = props;
  const { text, icon, title, link } = props.card;
  const { notifisystem } = useContext(ContextApp);
  const [copied, setCopied] = useState(false);

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#fff",
      color: "var(--theme-color)",
      boxShadow: "var(--light-shadow)",
      fontSize: 11,
    },
    arrow: {
      color: "#fff",
      boxShadow: "var(--light-shadow)",
    },
  }))(Tooltip);

  function determineCopy() {
    const parameters = {
      msg: "Copied to clipboard!",
      icon: "fad fa-copy",
      notifisystem,
    };

    if (copy) {
      return (
        <CopyToClipboard
          text={text}
          onCopy={() => {
            setCopied(true);
            addNotification(parameters);
            setTimeout(() => {
              setCopied(false);
            }, 4000);
          }}
        >
          <LightTooltip
            TransitionComponent={Fade}
            placement="top"
            title={copied ? "Copied" : "Copy"}
          >
            <p style={{ cursor: "pointer" }}>{text}</p>
          </LightTooltip>
        </CopyToClipboard>
      );
    }
    return <p>{text}</p>;
  }

  return (
    <HashLink
      to={link + "#top"}
      className={`${className !== "" ? className["card"] : ""} ${
        styles["card"]
      } ${themeShadow ? styles["theme-shadow-card"] : ""}`}
      data-aos="zoom-in"
    >
      <Iconbox className={className} icon={icon} />
      <div>
        <h4>{title}</h4>
        {determineCopy()}
      </div>
      {iconLink}
      {learnMoreBtn && <TextArrow className={className} text="Learn More" />}
    </HashLink>
  );
}

export default Card;
