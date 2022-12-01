import React from "react";
import { useState,useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import http from '../../../../../http-common.js'
function AppointmentTable() {
  const [dbData,setdbData]=useState([])
  useEffect(()=>{
    http.get('/getpatients')
    .then(res=>{
      console.log(res);
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
          <HashLink smooth to="/profile#top">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Visit Type</th>
            <th>Clinician</th>
            <th>Provider</th>
            <th>Location</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Comments</th>
            <th>Insurance</th>
            <th>Actions</th>
          </tr>
          {
            dbData.map((row,index)=>{
              return(
                <tr>
                  <td>{index}</td>
                  <td>{row.Visite_Tyoe}</td>
                  <td>{row.Clinician}</td>
                  <td>{row.Provider}</td>
                  <td>{row.Location}</td>
                  <td>{row.Date}</td>
                  <td>{row.Duration} min</td>
                  <td>{row.Comments}</td>
                  <td>{row.Insurance?"Check":"Uncheck"}</td>
                  <td>
                    <AppButton text="Delete" icon="fas fa-trash-alt" />
                  </td>
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
