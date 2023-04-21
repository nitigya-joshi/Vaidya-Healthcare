import React, { useState } from "react";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setAvatar } from "../../../store/userSlice";
import AppointmentTable from "./Table/BigTables/AppointmentTable";
import { Button } from "@material-ui/core";


// import AppointmentTable from './Table/Small Tables/AppointmentTable';
import MedicalBillsTable from './Table/BigTables/MedicalBillsTable';
import AppButton from "../../Reuseable/Button/AppButton";
// import MedicalRecordsTable from './Table/Small Tables/MedicalRecordsTable';
// import Medications from './Table/Small Tables/Medications';

function Profile() {
  const [current, setCurrent] = useState('profile');
  const [image, setImage] = useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function handleClick(event) {
    document.getElementById(current)?.classList.remove(`${styles["active-button"]}`);
    document.getElementById(`${current}Div`)?.setAttribute("style", "display:none");
    setCurrent(event);
    document.getElementById(event)?.classList.add(`${styles["active-button"]}`);
    document.getElementById(`${event}Div`)?.removeAttribute("style");
  }

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(file);
      dispatch(setAvatar(reader.result));
    };
  }

  async function updatePhotoHandler(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("avatarInput", image)
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/upload`, {
      credentials: 'include',
      method: "POST",
      body: formData
    });
    const data = await res.json();
    dispatch(setAvatar(data.path));
  }

  return (
    <div className={`${styles["profile-page"]}`}>
      <div className={`${styles["row"]}`}>
        <div className={`${styles["col"]}`}>
          <div className={`${styles["card"]}`}>
            <div className={`${styles["profile-img"]}`}>
              <img
                src={user.pic}
                alt="profile"
              />
              <input
                onChange={captureImage}
                id="avatarInput"
                name="avatarInput"
                type="file"
                className={`${styles["avatar-input"]}`}
              />
              <label className={styles.avatarLabel} htmlFor="avatarInput">
                Choose a different photo
              </label>
              <Button color="primary" variant="contained" onClick={updatePhotoHandler}>Update Photo</Button>
            </div>
            {/* <div className={`${styles["profile-info"]}`}>
              <h4>{user.name}</h4>
            </div> */}
          </div>
          <div className={`${styles["buttons"]}`}>
            <button
              className={`${styles["active-button"]}`}
              id="profile"
              onClick={() => handleClick("profile")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i className="fas fa-user-circle"></i>
                </div>
                <span>Profile</span>
              </h6>
            </button>
            <button
              className=""
              id="appointments"
              onClick={() => handleClick("appointments")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i className="fad fa-calendar-check"></i>
                </div>
                <span>Appointments</span>
              </h6>
            </button>
            {user.isDoctor && <button
              className=""
              id="medicalBills"
              onClick={() => handleClick("medicalBills")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i className="fad fa-file-invoice-dollar"></i>
                </div>
                <span>Patient's Appointments</span>
              </h6>
            </button>}
            {/* <button
              className=""
              id="medicalRecords"
              onClick={() => handleClick("medicalRecords")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i className="fad fa-file-medical-alt"></i>
                </div>
                <span>Medical Records</span>
              </h6>
            </button> */}
            {/* <button
              className=""
              id="medications"
              onClick={() => handleClick("medications")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i className="fad fa-capsules"></i>
                </div>
                <span>Medications</span>
              </h6>
            </button> */}
          </div>
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="profileDiv"
        >
          <h4 className={`${styles["profile-heading"]}`}>Profile</h4>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Full Name</label>
            <span className={`${styles["profile-label-info"]}`}>
              {user.name}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Email</label>
            <span className={`${styles["profile-label-info"]}`}>
              {user.email}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Mobile</label>
            <span className={`${styles["profile-label-info"]}`}>
              (+91) 1234567890
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Address</label>
            <span className={`${styles["profile-label-info"]}`}>
              BH-1, IIIT Sri City, Chittoor, A.P.
            </span>
          </div>
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="appointmentsDiv"
          style={{ display: "none" }}
        >
          <AppointmentTable />
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="medicalBillsDiv"
          style={{ display: "none" }}
        >
          <MedicalBillsTable />
          {/* <iframe src={resume} className={`${styles["iframe"]}`} /> */}
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="medicalRecordsDiv"
          style={{ display: "none" }}
        >
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="medicationsDiv"
          style={{ display: "none" }}
        >
        </div>
      </div>
    </div>
  );
}

export default Profile;
