import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import { useState,useEffect } from "react";
import http from '../../../../../http-common.js'

function AppointmentTable() {
  const [dbData,setdbData]=useState([])
  useEffect(()=>{
    http.get('/getpatients')
    .then(res=>{
      console.log(res.data[0].appointments);
      setdbData(res.data[0].appointments)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Appointments</h4>
          <HashLink smooth to="/appointmentTable#top">
            <AppButton text="Browse All" icon="fas fa-browser" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Visit Type</th>
            <th>Date</th>
            <th>Provider</th>
            <th>Status</th>
          </tr>
          {
            dbData.map((row)=>{
              return(
                <tr>
                  <td>{row.Visite_Tyoe}</td>
                  <td>{row.Date}</td>
                  <td>{row.Provider}</td>
                  <td>{row.Status}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default AppointmentTable;
