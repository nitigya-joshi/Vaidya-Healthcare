import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import { useState,useEffect } from "react";
import http from '../../../../../http-common.js'
function MedicalBillsTable() {
  const [dbData,setdbData]=useState([])
  useEffect(()=>{
    http.get('/getpatients')
    .then(res=>{
      console.log(res.data[0].medical_bills);
      setdbData(res.data[0].medical_bills)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medical Bills</h4>
          <HashLink smooth to="/medicalsBills#top">
            <AppButton text="Browse All" icon="fas fa-browser" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {
            dbData.map((row)=>{
              return(
                <tr>
                  <td>{row.Date_Of_Service}</td>
                  <td>{row.Amount_Due}</td>
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

export default MedicalBillsTable;
