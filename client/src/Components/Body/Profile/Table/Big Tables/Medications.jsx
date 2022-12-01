import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import { useState,useEffect } from "react";
import http from '../../../../../http-common.js'
function Medications() {
  const [dbData,setdbData]=useState([])
  useEffect(()=>{
    http.get('/getpatients')
    .then(res=>{
      console.log(res.data[0].medications);
      setdbData(res.data[0].medications)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medications</h4>
          <HashLink smooth to="/profile#top">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Medication Name</th>
            <th>Dose</th>
            <th>Frequency</th>
            <th>Quantity</th>
            <th>Refills</th>
            <th>Condition</th>
            <th>Provider</th>
            <th>Prescribed</th>
            <th>Renew By</th>
            <th>Actions</th>
          </tr>
          {
            dbData.map((row)=>{
              return(
                <tr>
                  <td>{row.Medication_Name}</td>
                  <td>{row.Dose}</td>
                  <td>{row.Frequency}</td>
                  <td>{row.Quantity}</td>
                  <td>{row.Refills}</td>
                  <td>{row.Condition}</td>
                  <td>{row.Provider}</td>
                  <td>{row.Prescribed}</td>
                  <td>{row.Renew_By}</td>
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

export default Medications;
