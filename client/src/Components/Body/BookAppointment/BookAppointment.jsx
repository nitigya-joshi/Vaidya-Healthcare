import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import InputMap from "./Book/InputMap";
import Button from "./Book/Button";
import styles from "./BookAppointment.module.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function BookAppointment() {
  const [patientInfoInputs, setPatientInfoInputs] = useState([
    {
      id: "patientFirstName",
      name: "patientFirstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First Name is required",
      label: "Patient's First Name",
      required: true,
    },
    {
      id: "patientLastName",
      name: "patientLastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name is required",
      label: "Patient's Last Name",
      required: true,
    },
    {
      id: "patientMobileNo",
      name: "patientMobileNo",
      type: "tel",
      errorMessage: "Mobile pattern: 0123456789 or +910123456789",
      placeholder: "Mobile Number",
      label: "Patient's Mobile No.",
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      minLength: "10",
      maxLength: "13",
    },
    {
      id: "patientDOB",
      name: "patientDOB",
      type: "text",
      errorMessage:
        "Date Of Birth is required & Age will be set according to DOB",
      placeholder: "DOB",
      label: "Patient's DOB",
      max: "",
      required: true,
    },
    {
      id: "patientAge",
      name: "patientAge",
      type: "number",
      errorMessage: "Age is required",
      placeholder: "Age",
      label: "Patient's Age",
      required: true,
      disabled: true,
    },
    {
      id: "patientEmail",
      name: "patientEmail",
      type: "email",
      errorMessage: "Email is required",
      placeholder: "Email",
      label: "Patient's Email",
      pattern: `[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}`,
      required: true,
    },
    {
      id: "patientSex",
      name: "patientSex",
      type: "radio",
      errorMessage: "Sex of the person is required",
      placeholder: "Select Sex",
      label: "Patient's Sex",
      required: true,
      setSpan: false,
    },
    {
      id: "patientState",
      name: "patientState",
      type: "radio",
      errorMessage: "State is required",
      placeholder: "Select State",
      label: "State",
      required: true,
      setSpan: false,
    },
    {
      id: "patientCity",
      name: "patientCity",
      type: "radio",
      errorMessage: "City is required",
      placeholder: "Select City",
      label: "City",
      required: true,
      setSpan: false,
    },
    {
      id: "appointmentReason",
      name: "appointmentReason",
      type: "text-area",
      placeholder: "Appointment Reason",
      label: "Appointment Reason",
    },
  ]);
  const [patientInfoValues, setPatientInfoValues] = useState({
    patientFirstName: "",
    patientLastName: "",
    patientMobileNo: "",
    patientDOB: "",
    patientAge: "",
    patientEmail: "",
    patientSex: "",
    patientState: "",
    patientCity: "",
    appointmentReason: "",
  });
  const [docInfoInputs, setdocInfoInputs] = useState([
    {
      id: "doctorName",
      name: "doctorName",
      type: "text",
      placeholder: "Doctor's Name",
      label: "Doctor's Name",
      required: false,
      disabled: true,
    },
    {
      id: "doctorSpecialization",
      name: "doctorSpecialization",
      type: "text",
      placeholder: "Doctor's Specialization",
      label: "Doctor's Specialization",
      required: false,
      disabled: true,
    },
    {
      id: "appointmentDate",
      name: "appointmentDate",
      type: "text",
      errorMessage:
        "Please Provide the correct date on which you want the Appointment",
      placeholder: "Appointment Date",
      label: "Appointment Date",
      min: "",
      required: false,
    },
    {
      id: "appointmentTime",
      name: "appointmentTime",
      type: "text",
      errorMessage: "Please Provide the time on which you want the Appointment",
      placeholder: "Appointment Time",
      label: "Appointment Time",
      required: false,
    },
    {
      id: "appointmentLocState",
      name: "appointmentLocState",
      type: "text",
      placeholder: "Appointment State or Union Territorie",
      label: "Appointment State or Union Territorie",
      required: false,
      disabled: true,
    },
    {
      id: "appointmentLocCity",
      name: "appointmentLocCity",
      type: "text",
      placeholder: "Appointment City",
      label: "Appointment City",
      required: false,
      disabled: true,
    },
  ]);
  const [docInfoValues, setDocInfoValues] = useState({
    doctorName: "",
    doctorSpecialization: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentLocState: "",
    appointmentLocCity: "",
  });
  const [buttons, setButtons] = useState([
    {
      id: "appointment-form-button1",
      type: "button",
      value: "Auto Fill",
    },
    {
      id: "appointment-form-button2",
      type: "submit",
      value: "Next",
    },
  ]);

  const [dateTime, setdateTime] = useState([
    {
      tday_dd: new Date().getDate(),
      tday_mm: new Date().getMonth() + 1,
      tday_yy: new Date().getFullYear(),
    },
    {
      tm_dd: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getDate(),
      tm_mm:
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth() + 1,
      tm_yy: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear(),
    },
  ]);

  useEffect(() => {
    function updateObjects(objects, id, key, value) {
      const updatedObjects = objects.map((object) => {
        if (object.id === id) {
          return { ...object, [key]: value };
        }
        return object;
      });

      if (objects === patientInfoInputs) {
        setPatientInfoInputs(updatedObjects);
      } else if (objects === docInfoInputs) {
        setdocInfoInputs(updatedObjects);
      }
    }

    if (
      +dateTime[0].tday_dd !== new Date().getDate() ||
      dateTime[0].tday_dd.toString().length !== 2 ||
      dateTime[0].tday_mm.toString().length !== 2 ||
      dateTime[1].tm_dd.toString().length !== 2 ||
      dateTime[1].tm_mm.toString().length !== 2
    ) {
      const newDateTime = dateTime.map((dT) => {
        if (+dT.tday_dd < 10 && dT.tday_dd.toString().length !== 2) {
          return { ...dT, tday_dd: "0" + dT.tday_dd.toString() };
        }
        if (+dT.tday_mm < 10 && dT.tday_mm.toString().length !== 2) {
          return { ...dT, tday_mm: "0" + dT.tday_mm.toString() };
        }
        if (+dT.tm_dd < 10 && dT.tm_dd.toString().length !== 2) {
          return { ...dT, tm_dd: "0" + dT.tm_dd.toString() };
        }
        if (+dT.tm_mm < 10 && dT.tm_mm.toString().length !== 2) {
          return { ...dT, tm_mm: "0" + dT.tm_mm.toString() };
        }
        return dT;
      });
      setdateTime(newDateTime);
    }

    if (
      patientInfoInputs[3].max !==
      dateTime[0].tday_yy.toString() +
        "-" +
        dateTime[0].tday_mm.toString() +
        "-" +
        dateTime[0].tday_dd.toString()
    ) {
      updateObjects(
        patientInfoInputs,
        "patientDOB",
        "max",
        dateTime[0].tday_yy.toString() +
          "-" +
          dateTime[0].tday_mm.toString() +
          "-" +
          dateTime[0].tday_dd.toString()
      );
    }

    if (
      docInfoInputs[2].min !==
      dateTime[1].tm_yy.toString() +
        "-" +
        dateTime[1].tm_mm.toString() +
        "-" +
        dateTime[1].tm_dd.toString()
    ) {
      updateObjects(
        docInfoInputs,
        "appointmentDate",
        "min",
        dateTime[1].tm_yy.toString() +
          "-" +
          dateTime[1].tm_mm.toString() +
          "-" +
          dateTime[1].tm_dd.toString()
      );
    }
  }, [dateTime, patientInfoInputs, docInfoInputs]);

  function getAge(dob) {
    if (Math.floor((new Date() - dob) / 1000 / 60 / 60 / 24 / 365.25) + 1 < 0) {
      return 0;
    }
    return Math.floor((new Date() - dob) / 1000 / 60 / 60 / 24 / 365.25);
  }

  function updateObjects(objects, id, key, value) {
    const updatedObjects = objects.map((object) => {
      if (object.id === id) {
        return { ...object, [key]: value };
      }
      return object;
    });

    if (objects === patientInfoInputs) {
      setPatientInfoInputs(updatedObjects);
    } else if (objects === docInfoInputs) {
      setdocInfoInputs(updatedObjects);
    }
  }

  function updateButtons(updatedButtons) {
    const newButtons = buttons.map((button, index) => {
      if (button.id === updatedButtons[index].id) {
        return {
          ...button,
          type: updatedButtons[index].type,
          value: updatedButtons[index].value,
        };
      }
      return button;
    });
    setButtons(newButtons);
  }

  const [searchParams] = useSearchParams();

  // const fetchDoctor = useCallback(async () => {
  //   const res = await fetch(
  //     `http://localhost:3000/api/doctors/doctor/${searchParams.get("doctor")}`
  //   );
  //   const doctorDetails = await res.json();
  //   const obj = {
  //     doctorName: doctorDetails.name,
  //     doctorSpecialization: doctorDetails.category,
  //     appointmentLocState: doctorDetails.clinicaddress.split(",")[1],
  //     appointmentLocCity: doctorDetails.clinicaddress.split(",")[0],
  //   };
  //   setDocInfoValues((prevState) => {
  //     return { ...prevState, ...obj };
  //   });
  // }, [searchParams]);

  // useEffect(() => {
  //   fetchDoctor();
  // }, [fetchDoctor]);

  async function submitHandler(event) {
    event.preventDefault();
    let isEmpty = false;
    for (const [key, value] of Object.entries(patientInfoValues)) {
      setPatientInfoValues((prevState) => {
        return { ...prevState, [key]: value.toString().trim() };
      });
      if (
        key !== "patientMobileNo" &&
        key !== "appointmentReason" &&
        key !== "appointmentDate" &&
        key !== "appointmentTime" &&
        value.toString().trim().length === 0
      ) {
        isEmpty = true;
      }
    }

    if (!isEmpty) {
      // here
      // const obj = {
      //   name:
      //     patientInfoValues.patientFirstName +
      //     " " +
      //     patientInfoValues.patientLastName,
      //   mobile: patientInfoValues.patientMobileNo,
      //   email: patientInfoValues.patientEmail,
      //   gender: patientInfoValues.patientSex,
      //   state: patientInfoValues.patientState,
      //   city: patientInfoValues.patientCity,
      //   reason: patientInfoValues.appointmentReason,
      //   dob: patientInfoValues.patientDOB,
      //   age: patientInfoValues.patientAge,
      //   appointmentDate: docInfoValues.appointmentDate,
      //   appointmentTime: docInfoValues.appointmentTime,
      // };
      // console.log(obj);
      // const res = await fetch(
      //   `http://localhost:3000/api/bookappointment?id=${searchParams.get(
      //     "doctor"
      //   )}`,
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     credentials: "include",
      //     body: JSON.stringify(obj),
      //   }
      // );
      // const appointment = await res.json();
      // if (appointment.status === "ok") {
      //   notifySuccess();
      // } else {
      //   notifyError();
      // }
    } else {
      const newPatientInfoInputs = patientInfoInputs.map((input) => {
        if (input.setSpan === false) {
          return { ...input, setSpan: true };
        }
        return input;
      });
      setPatientInfoInputs(newPatientInfoInputs);
    }
  }

  // const notifySuccess = () => toast.success("Appointment booked!");
  // const notifyError = () => toast.error("Something went wrong!");

  function onBlur(event) {
    if (event.target.id === "patientDOB") {
      if (event.target.value === "") {
        updateObjects(patientInfoInputs, "patientDOB", "type", "text");
      } else {
        updateObjects(patientInfoInputs, "patientDOB", "type", "date");
      }
    }
    if (event.target.id === "appointmentDate") {
      if (event.target.value === "") {
        updateObjects(docInfoInputs, "appointmentDate", "type", "text");
      } else {
        updateObjects(docInfoInputs, "appointmentDate", "type", "date");
      }
    }
    if (event.target.id === "appointmentTime") {
      if (event.target.value === "") {
        updateObjects(docInfoInputs, "appointmentTime", "type", "text");
      } else {
        updateObjects(docInfoInputs, "appointmentTime", "type", "time");
      }
    }
  }

  function onFocus(event) {
    if (event.target.id === "patientDOB") {
      updateObjects(patientInfoInputs, "patientDOB", "type", "date");
      document.body.click();
    }
    if (event.target.id === "appointmentDate") {
      updateObjects(docInfoInputs, "appointmentDate", "type", "date");
      document.body.click();
    }
    if (event.target.id === "appointmentTime") {
      updateObjects(docInfoInputs, "appointmentTime", "type", "time");
      document.body.click();
    }
  }

  function onInput(event) {
    if (event.target.id === "patientMobileNo") {
      event.target.value = event.target.value
        .replace(/[^+0-9]/g, "")
        .replace(/(\..*)\./g, "$1");
    }
  }

  function onChange(event) {
    if (
      event.target.name === "patientState" &&
      event.target.value !== patientInfoValues.patientState
    ) {
      setPatientInfoValues((prevState) => {
        return { ...prevState, patientCity: "" };
      });
    }
    setPatientInfoValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    if (event.target.id === "patientDOB") {
      const age = getAge(new Date(event.target.value));
      if (
        Math.floor(
          (new Date() - new Date(event.target.value)) / 1000 / 60 / 60 / 24
        )
      ) {
        setPatientInfoValues((prevState) => {
          return { ...prevState, patientAge: age };
        });
      } else {
        setPatientInfoValues((prevState) => {
          return { ...prevState, patientAge: 0 };
        });
      }
    }

    setDocInfoValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  async function onClickButton(event) {
    let isEmptyPatient = false;
    for (const [key, value] of Object.entries(patientInfoValues)) {
      if (
        key !== "patientMobileNo" &&
        key !== "appointmentReason" &&
        key !== "appointmentDate" &&
        key !== "appointmentTime" &&
        value.toString().trim().length === 0
      ) {
        isEmptyPatient = true;
      }
    }
    if (!document.getElementById("patientMobileNo").checkValidity()) {
      isEmptyPatient = true;
    }

    if (event.target.id === "appointment-form-button1") {
      if (event.target.value === "Back") {
        const updatedButtons = [
          {
            id: "appointment-form-button1",
            type: "button",
            value: "Auto Fill",
          },
          {
            id: "appointment-form-button2",
            type: "submit",
            value: "Next",
          },
        ];
        updateButtons(updatedButtons);
      } else {
        const res = await fetch("http://localhost:3000/api/users/me", {
          credentials: "include",
        });
        const userData = await res.json();
        setPatientInfoValues((prevState) => {
          return {
            ...prevState,
            patientFirstName: userData.name.split(" ")[0],
            patientLastName: userData.name.split(" ")[1],
            patientEmail: userData.email,
            patientSex: userData.gender,
          };
        });
      }
    }

    if (!isEmptyPatient && event.target.id === "appointment-form-button2") {
      const newDocInfoInputs = docInfoInputs.map((docInfoInput) => {
        if (
          docInfoInput.required !== undefined &&
          docInfoInput.required === false
        ) {
          return { ...docInfoInput, required: true };
        }
        return docInfoInput;
      });
      setdocInfoInputs(newDocInfoInputs);

      if (event.target.value === "Submit") {
        const updatedButtons = [
          {
            id: "appointment-form-button1",
            type: "button",
            value: "Back",
          },
          {
            id: "appointment-form-button2",
            type: "submit",
            value: "Submit",
          },
        ];
        updateButtons(updatedButtons);
      } else {
        const updatedButtons = [
          {
            id: "appointment-form-button1",
            type: "button",
            value: "Back",
          },
          {
            id: "appointment-form-button2",
            type: "button",
            value: "Submit",
          },
        ];
        updateButtons(updatedButtons);
      }
    }
  }

  function onClickMenu(id) {
    updateObjects(patientInfoInputs, id, "setSpan", true);
  }

  return (
    <div className={styles["book-appointment"]}>
      <div className={styles["appointment-form"]}>
        <h1 className={styles["title"]}>Appointment Form</h1>
        <form onSubmit={submitHandler} className={styles["form"]}>
          <div className={styles["info"]}>
            <div
              className={
                styles["patient-info"] +
                (buttons[0].value === "Auto Fill" && buttons[1].value === "Next"
                  ? " " + styles["active"]
                  : "")
              }
            >
              <h2 className={styles["title"]}>
                <u>Patient's Info</u>
              </h2>
              <div className={styles["patient-inputs"]}>
                <InputMap
                  className={styles}
                  inputs={patientInfoInputs}
                  values={patientInfoValues}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onInput={onInput}
                  onClickMenu={onClickMenu}
                  onChange={onChange}
                />
              </div>
            </div>
            <div
              className={
                styles["doctor-info"] +
                (buttons[0].value === "Back" && buttons[1].value === "Submit"
                  ? " " + styles["active"]
                  : "")
              }
            >
              <h2 className={styles["title"]}>
                <u>Doctors's Info</u>
              </h2>
              <div className={styles["doctor-inputs"]}>
                <InputMap
                  className={styles}
                  inputs={docInfoInputs}
                  values={docInfoValues}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onInput={onInput}
                  onClick={onClickMenu}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className={styles["buttons"]}>
            {buttons.map((button) => {
              return (
                <Button
                  key={button.id}
                  className={styles["button"]}
                  {...button}
                  onClick={onClickButton}
                />
              );
            })}
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default BookAppointment;
