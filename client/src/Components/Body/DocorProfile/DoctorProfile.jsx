import React, { useState } from "react";
import styles from "./DoctorProfile.module.css";
// import AppointmentTable from './Table/Small Tables/AppointmentTable';
// import MedicalBillsTable from './Table/Small Tables/MedicalBillsTable';
// import MedicalRecordsTable from './Table/Small Tables/MedicalRecordsTable';
// import Medications from './Table/Small Tables/Medications';

function DoctorProfile() {
  const [current, setCurrent] = useState('profile');

  function handleClick(event) {
    document.getElementById(current)?.classList.remove(`${styles["active-button"]}`);
    document.getElementById(`${current}Div`)?.setAttribute("style", "display:none");
    setCurrent(event);
    document.getElementById(event)?.classList.add(`${styles["active-button"]}`);
    document.getElementById(`${event}Div`)?.removeAttribute("style");
  }

  return (
    <div className={`${styles["profile-page"]}`}>
      <div className={`${styles["row"]}`}>
        <div className={`${styles["col"]}`}>
          <div className={`${styles["card"]}`}>
            <div className={`${styles["profile-img"]}`}>
              <img
                src="https://img.freepik.com/free-icon/doctor_318-201537.jpg?w=2000"
                alt="Admin"
              />
            </div>
            <div className={`${styles["profile-info"]}`}>
              <h4>Aryan Verma</h4>
            </div>
          </div>
          <div className={`${styles["buttons"]}`}>
            <button
              className={`${styles["active-button"]}`}
              id="profile"
              onClick={() => handleClick("profile")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fas fa-user-circle"></i>
                </div>
                <span>Profile</span>
              </h6>
            </button>
            <button
              className=""
              id="moreInfo"
              onClick={() => handleClick("moreInfo")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fas fa-info-circle"></i>
                </div>
                <span>More Info</span>
              </h6>
            </button>
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
              Aryan Verma
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Specialist</label>
            <span className={`${styles["profile-label-info"]}`}>
              Dermatalogists
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Rating</label>
            <span className={`${styles["profile-label-info"]}`}>
              0
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Consultant Fee</label>
            <span className={`${styles["profile-label-info"]}`}>
              200
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
          id="moreInfoDiv"
          style={{ display: "none" }}
        >
          <h4 className={`${styles["profile-heading"]}`}>More Info</h4>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Education</label>
            <span className={`${styles["profile-label-info"]}`}>
              MBBS
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Experience</label>
            <span className={`${styles["profile-label-info"]}`}>
              2 (Years)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
