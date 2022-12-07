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
          <HashLink smooth to="/profile#top">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Amount Due</th>
            <th>Status</th>
            <th>Physician</th>
            <th>Description</th>
            <th>Date of Service</th>
            <th>Actions</th>
          </tr>
          {
            dbData.map((row,index)=>{
              return(
                <tr>
                  <td>{index}</td>
                  <td>{row.Amount_Due}</td>
                  <td>{row.Status}</td>
                  <td>{row.Physician}</td>
                  <td>{row.Description}</td>
                  <td>{row.Date_Of_Service}</td>
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

export default MedicalBillsTable;
