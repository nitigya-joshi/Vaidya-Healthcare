import React, { useState } from "react";
import Card from "../../Reuseable/Card/Card";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import BannerProps from "../Banner/BannerProps";
import AppButton from "../../Reuseable/Button/AppButton";
import { contactInputs, contactBoxes } from "../../AppConstant";
import styles from "./Contact.module.css";
import svg from "../../../img/contact.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  async function contactHandler(event) {
    event.preventDefault();
    try {
      const obj = {
        name: formValues.name,
        email: formValues.email,
        phone: '+911234567890',
        message: formValues.msg
      };
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/postContactData`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      });
      const data = await res.json();
      if (data) {
        notifySuccess();
      }
    } catch (error) {
      notifyError();
    }
  }


  const notifySuccess = () => toast.success("Message sent!");
  const notifyError = () => toast.error("Something went wrong!");

  const formInputs = contactInputs?.map((input) => {
    return (
      <ObjectInput
        name={input.name}
        text={input.text}
        value={formValues}
        setValue={setFormValues}
        obj={input.value}
        textarea={input.textarea}
      />
    );
  });

  const contactBoxesRow = contactBoxes?.map((box) => {
    return (
      <Card
        className={styles}
        copy={true}
        card={box}
        iconLink={
          // <a href={box.link} target="__blank">
          <i className={`fal fa-chevron-right ${styles["arrow-icon"]}`}></i>
          // </a>
        }
      />
    );
  });

  return (
    <div className={`${styles["contact"]}`}>
      <BannerProps
        img="https://i.imgur.com/fzc9vDw.png"
        title="Contact Us"
        text="Contact Us if you are getting any problem while using our Website"
      />
      <div className={`${styles["contact-info"]}`}>
        {/* <div className={`${styles["contact-title"]}`} data-aos="flip-left">
          <h2>Contact Me</h2>
          <small className={`${styles["graytext"]}`}>
            Don't hesitate to reach out to me!
          </small>
        </div> */}
        <div className={`${styles["contact-boxes"]}`}>{contactBoxesRow}</div>
        <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>

            <img src={svg} alt="contact" style={{ "height": "230px" }} />
          </div>
          <form onSubmit={contactHandler}>
            {formInputs}
            <AppButton text={"Submit"} icon="fad fa-envelope" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
