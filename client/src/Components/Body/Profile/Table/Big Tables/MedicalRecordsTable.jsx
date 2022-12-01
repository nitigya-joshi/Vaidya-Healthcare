import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import { useState,useEffect } from "react";
import http from '../../../../../http-common.js'
function MedicalRecordsTable() {
  const [dbData,setdbData]=useState([])
  useEffect(()=>{
    http.get('/getpatients')
    .then(res=>{
      console.log(res.data[0].medical_records);
      setdbData(res.data[0].medical_records)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medical Records</h4>
          <HashLink smooth to="/profile#top">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Note Type</th>
            <th>Author</th>
            <th>Last Updated</th>
            <th>Last Updated By</th>
            <th>Actions</th>
          </tr>
          {
            dbData.map((row)=>{
              return(
                <tr>
                  <td>{row.Date}</td>
                  <td>{row.Name}</td>
                  <td>{row.Note_Type}</td>
                  <td>{row.Author}</td>
                  <td>{row.Last_Updated}</td>
                  <td>{row.Last_Updated_by}</td>
                  <td>
                    <AppButton text="Delete" icon="fas fa-trash-alt" />
                  </td>
                </tr>
              )
            })
          }
          {/* <tr>
            <td>0</td>
            <td>Urgent</td>
            <td>Dr. Branch</td>
            <td>Stephanie Branch</td>
            <td>SOUTH MEDIC CENTER</td>
            <td>22/10/2022</td>
            <td>
              <AppButton text="Delete" icon="fas fa-trash-alt" />
            </td>
          </tr> */}
        </table>
      </div>
    </div>
  );
}

export default MedicalRecordsTable;
