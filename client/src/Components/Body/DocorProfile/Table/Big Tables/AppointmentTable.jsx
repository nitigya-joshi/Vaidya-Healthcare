import React from "react";
import { useState, useEffect } from "react";
import styles from "./Tables.module.css";
function AppointmentTable() {

  const [appointmentData, setAppointmentData] = useState([])

  const fetchAppointmentData = async () => {
    const res = await fetch(`/api/getappointments`, {
      credentials: 'include'
    });
    const data = await res.json();
    setAppointmentData([...data])
  }

  useEffect(() => {
    fetchAppointmentData()
  }, [])

  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Appointments</h4>
        </div>
        <tbody>
          <tr>
            <th>#</th>
            <th>Patient's Name</th>
            <th>Doctor's Name</th>
            <th>Doctor's Mobile</th>
            <th>Fee</th>
            <th>Clinic Address</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
          {
            appointmentData.map((row, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{row.name}</td>
                  <td>{row.doctor.name}</td>
                  <td>{row.doctor.mobile}</td>
                  <td>₹{row.doctor.fee}</td>
                  <td>{row.doctor.clinicaddress.split(',')[0]}</td>
                  <td>{row.appointmentDate.split('T')[0]}</td>
                  <td>{row.appointmentTime}</td>
                </tr>
              )
            })
          }
        </tbody>
      </div>
    </div>
  );
}

export default AppointmentTable;
