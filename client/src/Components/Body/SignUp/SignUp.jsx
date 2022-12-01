import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import Iconbox from "../../Reuseable/Icon/Iconbox";
import AppButton from "../../Reuseable/Button/AppButton";
import { ContextApp } from "../../../ContextAPI";
import { signupInputs } from "../../AppConstant";
import { addNotification } from "../../AppFunctions";
import styles from "./SignUp.module.css";

function SignUp() {
  const { notifisystem } = useContext(ContextApp);
  const [formValues, setFormValues] = useState({
    hospitalName: "",
    hospitalAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const formInputs = signupInputs?.map((input) => {
    return (
      <ObjectInput
        key={Math.random}
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
      <div className={`${styles["contact-info"]}`}>
        <div className={`${styles["contact-title"]}`} data-aos="flip-left">
          <h2>Sign Up</h2>
        </div>
        <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>
            <Iconbox className={styles} icon="fad fa-envelope" />
            <h2>Sign Up Here</h2>
          </div>
          <form onSubmit={sendEmail}>
            {formInputs}
            <AppButton text={"Submit"} icon="fad fa-envelope" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
