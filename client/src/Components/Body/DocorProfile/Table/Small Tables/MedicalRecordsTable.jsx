import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import { useState, useEffect } from "react";
import http from '../../../../../http-common.js'
function MedicalRecordsTable() {
  const [dbData, setdbData] = useState([])
  useEffect(() => {
    http.get('/getpatients')
      .then(res => {
        console.log(res.data[0].medical_records);
        setdbData(res.data[0].medical_records)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medical Records</h4>
          <HashLink smooth to="/medicalRecordsTable#top">
            <AppButton text="Browse All" icon="fas fa-browser" />
          </HashLink>
        </div>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Note Type</th>
          </tr>
          {
            dbData.map((row) => {
              return (
                <tr>
                  <td>{row.Date}</td>
                  <td>{row.Name}</td>
                  <td>{row.Note_Type}</td>
                </tr>
              )
            })
          }
        </tbody>
      </div>
    </div>
  );
}

export default MedicalRecordsTable;
