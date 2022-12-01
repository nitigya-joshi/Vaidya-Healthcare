import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";

import ObjectInput from "../../Reuseable/Input/ObjectInput";
// import BannerProps from "../Banner/BannerProps";
import Iconbox from "../../Reuseable/Icon/Iconbox";
import AppButton from "../../Reuseable/Button/AppButton";
import { ContextApp } from "../../../ContextAPI";
import { loginInputs } from "../../AppConstant";
import { addNotification } from "../../AppFunctions";
import styles from "./LogIn.module.css";
import { HashLink } from "react-router-hash-link";

function LogIn() {
  const { notifisystem } = useContext(ContextApp);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function sendEmail(event) {
    console.log("asd");
    event.preventDefault();
    emailjs
      .sendForm(
        "service_jsaoihr",
        "template_h5vq1co",
        event.target,
        "user_B0W0FA6EBGqj9vC542Rs3"
      )
      .then(
        (result) => {
          console.log(result.text);
          const parameters = {
            msg: "Email Sent!",
            icon: "fad fa-envelope",
            notifisystem,
          };
          addNotification(parameters);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const formInputs = loginInputs?.map((input) => {
    return (
      <ObjectInput
        name={input.name}
        text={input.text}
        type={input.type}
        value={formValues}
        setValue={setFormValues}
        obj={input.value}
        textarea={input.textarea}
      />
    );
  });

  return (
    <div className={`${styles["contact"]}`}>
      {/* <BannerProps
        img="https://i.imgur.com/fzc9vDw.png"
        title="Login"
        text=""
      /> */}
      <div className={`${styles["contact-info"]}`}>
        <div className={`${styles["contact-title"]}`} data-aos="flip-left">
          <h2>LogIn</h2>
        </div>
        <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>
            <Iconbox className={styles} icon="fad fa-sign-in" />
            <h2>LogIn here</h2>
          </div>
          <form onSubmit={sendEmail}>
            {formInputs}
            <AppButton text={"Login"} icon="fad fa-sign-in" />
            <div className={`${styles["create-account"]}`}>
              <HashLink smooth to="/signup#top">
                Create New Account
              </HashLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
