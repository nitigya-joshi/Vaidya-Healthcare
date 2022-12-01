import React, { useState } from "react";
import styles from "./Profile.module.css";
// import AppointmentTable from './Table/Small Tables/AppointmentTable';
// import MedicalBillsTable from './Table/Small Tables/MedicalBillsTable';
// import MedicalRecordsTable from './Table/Small Tables/MedicalRecordsTable';
// import Medications from './Table/Small Tables/Medications';

function Profile() {
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
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
              />
            </div>
            <div className={`${styles["profile-info"]}`}>
              <h4>Aryan Verma</h4>
              <p>Student</p>
              <p>IIIT Sri City, Chittoor, A.P.</p>
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
              id="appointments"
              onClick={() => handleClick("appointments")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fad fa-calendar-check"></i>
                </div>
                <span>Appointments</span>
              </h6>
            </button>
            <button
              className=""
              id="medicalBills"
              onClick={() => handleClick("medicalBills")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fad fa-file-invoice-dollar"></i>
                </div>
                <span>Medical Bills</span>
              </h6>
            </button>
            <button
              className=""
              id="medicalRecords"
              onClick={() => handleClick("medicalRecords")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fad fa-file-medical-alt"></i>
                </div>
                <span>Medical Records</span>
              </h6>
            </button>
            <button
              className=""
              id="medications"
              onClick={() => handleClick("medications")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fad fa-capsules"></i>
                </div>
                <span>Medications</span>
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
            <label className={`${styles["profile-label"]}`}>Email</label>
            <span className={`${styles["profile-label-info"]}`}>
              aryan.v20@iiits.in
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
          {/* <Donut series={skillsData} title="Sample" colors={colors} /> */}
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="medicalBillsDiv"
          style={{ display: "none" }}
        >
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
