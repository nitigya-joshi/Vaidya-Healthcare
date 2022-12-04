import React, { useState } from "react";
import Card from "../../Reuseable/Card/Card";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import BannerProps from "../Banner/BannerProps";
import AppButton from "../../Reuseable/Button/AppButton";
import { contactInputs, contactBoxes } from "../../AppConstant";
import styles from "./Contact.module.css";
import svg from "../../../img/contact.svg";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  function contactHandler(event) {
    event.preventDefault();
    console.log("contact details sent");
  }

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
          <a href={box.link} target="__blank">
            <i className={`fal fa-chevron-right ${styles["arrow-icon"]}`}></i>
          </a>
        }
      />
    );
  });

  return (
    <div className={`${styles["contact"]}`}>
      <BannerProps
        img="https://i.imgur.com/fzc9vDw.png"
        title="Contact"
        text="Contact me to get your dream website up and ready for the rest of the world to see!"
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
            <img src={svg} alt="contact" style={{"height": "230px"}}/>
          </div>
          <form onSubmit={contactHandler}>
            {formInputs}
            <AppButton text={"Submit"} icon="fad fa-envelope" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
