import React, { useState } from "react";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
// import BannerProps from "../Banner/BannerProps";
// import Iconbox from "../../Reuseable/Icon/Iconbox";
import AppButton from "../../Reuseable/Button/AppButton";
import { loginInputs } from "../../AppConstant";
import styles from "./LogIn.module.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function loginHandler(event) {
    event.preventDefault();
    try {
      if (formValues.email && formValues.password) {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(formValues)
        });
        const data = await res.json();
        console.log(data)
        if (data.status === "SUCCESS") {
          dispatch(login({
            ...data.user,
            "loggedIn": true
          }))
          navigate("/")
        }
      }
    } catch (error) {
      console.log(error)
    }

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
      <div className={`${styles["contact-info"]}`}>
        <div className={`${styles["contact-title"]}`} data-aos="flip-left">
          <h1>Log in</h1>
        </div>
        <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>
            <img src="https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826" alt="doctor" style={{ "height": "300px" }} />
          </div>
          <form onSubmit={loginHandler}>
            {formInputs}
            <div style={{ "marginTop": "20px" }}>
              <AppButton text={"Login"} icon="fad fa-sign-in" />
            </div>
            <div className={`${styles["create-account"]}`}>
              <span>Don't have an account?</span>&nbsp;
              <HashLink smooth to="/signup">
                Register
              </HashLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
