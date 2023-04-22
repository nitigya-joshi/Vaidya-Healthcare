import React, { useState } from "react";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import AppButton from "../../Reuseable/Button/AppButton";
import { applicationInputs } from "../../AppConstant";
import styles from "./DoctorApplication.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    languages: ["English", "Hindi", "Telugu"],
    fee: "",
    education: "",
    experience: "",
    email: "",
    phone: "",
    address: "",
  });

  const notifySuccess = () => toast.success("Application sent!");
  const notifyError = () => toast.error("Something went wrong!");


  async function sendEmail(event) {
    event.preventDefault();
    try {
      const data = {
        name: formValues.name,
        category: formValues.category,
        languages: formValues.languages,
        fee: formValues.fee,
        edu: formValues.education,
        experience: formValues.experience,
        email: formValues.email,
        mobile: formValues.phone,
        clinicaddress: formValues.address,
      };
      const res = await fetch(`/api/doctors/register`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data)
      });
      const doctorRegister = await res.json();
      if (doctorRegister) {
        notifySuccess();
      }
    } catch (error) {
      notifyError();
    }
  }

  const formInputs = applicationInputs?.map((input) => {
    return (
      <ObjectInput
        key={input.id}
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
          <h1>Apply for Doctor</h1>
        </div>
        <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>
            <img src="https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826" alt="doctor" style={{ "height": "300px" }} />
          </div>
          <form onSubmit={sendEmail}>
            {formInputs}
            <div style={{ "marginTop": "20px" }}>
              <AppButton text={"Submit Application"} icon="fad fa-sign-in" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
