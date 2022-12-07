import React, { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./DoctorProfile.module.css";
// import AppointmentTable from './Table/Small Tables/AppointmentTable';
// import MedicalBillsTable from './Table/Small Tables/MedicalBillsTable';
// import MedicalRecordsTable from './Table/Small Tables/MedicalRecordsTable';
// import Medications from './Table/Small Tables/Medications';

function DoctorProfile() {
  const [current, setCurrent] = useState('profile');
  const [doctorData, setDoctorData] = useState({
    name: "",
    edu: "",
    category: "",
    fee: "",
    lang: "",
    exp: "",
    email: "",
    mobile: "",
    rating: ""
  });

  const [searchParams] = useSearchParams();

  const fetchDoctorData = useCallback(async () => {
    const res = await fetch(`http://localhost:3000/api/doctors/doctor/${searchParams.get("doctor")}`);
    const doctorDetails = await res.json();
    const obj = {
      name: doctorDetails.name,
      category: doctorDetails.category,
      state: doctorDetails.clinicaddress.split(',')[1],
      city: doctorDetails.clinicaddress.split(',')[0],
      edu: doctorDetails.edu,
      email: doctorDetails.email,
      mobile: doctorDetails.mobile,
      exp: doctorDetails.experience,
      fee: doctorDetails.fee,
      rating: doctorDetails.rating,
      lang: doctorDetails.languages
    };
    setDoctorData(obj);
  }, [searchParams]);


  useEffect(() => {
    fetchDoctorData();
  }, [fetchDoctorData]);

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
              <h4>{doctorData.name}</h4>
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
                  <i className="fas fa-user-circle"></i>
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
                  <i className="fas fa-info-circle"></i>
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
              {doctorData.name}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Specialist</label>
            <span className={`${styles["profile-label-info"]}`}>
              {doctorData.category}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Rating</label>
            <span className={`${styles["profile-label-info"]}`}>
              {doctorData.rating}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Consultant Fee</label>
            <span className={`${styles["profile-label-info"]}`}>
              {doctorData.fee}
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
              {doctorData.edu}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Experience</label>
            <span className={`${styles["profile-label-info"]}`}>
              {doctorData.exp}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
