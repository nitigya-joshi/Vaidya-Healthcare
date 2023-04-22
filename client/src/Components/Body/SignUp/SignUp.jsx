import React, { useState } from "react";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import AppButton from "../../Reuseable/Button/AppButton";
import { signupInputs } from "../../AppConstant";
import styles from "./SignUp.module.css";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate()

  async function sendEmail(event) {
    event.preventDefault();
    console.log("register");
    try {
      let obj = {
        name: formValues.name,
        username: formValues.name.split(' ')[0],
        gender: 'Male',
        email: formValues.email,
        password: formValues.password,
      }
      const res = await fetch(`/api/users/register`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(obj)
      });
      const data = await res.json();
      console.log(data)
      if (data) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
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
          <h1>Sign Up</h1>
        </div>
        <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>
            <img src="https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826" alt="doctor" style={{ "height": "300px" }} />
          </div>
          <form onSubmit={sendEmail}>
            {formInputs}
            <div style={{ "marginTop": "20px" }}>
              <AppButton text={"Register"} icon="fad fa-sign-in" />
            </div>
            <div className={`${styles["create-account"]}`}>
              <span>Already have an account?</span>&nbsp;
              <HashLink smooth to="/login">
                Login
              </HashLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
