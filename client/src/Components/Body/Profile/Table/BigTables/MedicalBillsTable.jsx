import React from "react";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
function MedicalBillsTable() {

  const [appointmentData, setAppointmentData] = useState([])

  const fetchAppointmentData = async () => {
    const res = await fetch('http://localhost:3000/api/doctors/doctorappointments', {
      credentials: 'include'
    });
    const data = await res.json();
    console.log(data)
    setAppointmentData([...data])
  }

  useEffect(() => {
    fetchAppointmentData()
  }, [])

  const navigate = useNavigate()

  const handleJoinRoom = (roomId) => {
    // console.log(roomId)
    navigate(`/room/${roomId}`)
  }

  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Patient's Appointments</h4>
        </div>
        <tbody>
          <tr>
            <th>#</th>
            <th>Patient's Name</th>
            <th>Patient's Mobile</th>
            <th>Appointment Reason</th>
            <th>Date</th>
            <th>Time</th>
            <th>Join meeting</th>
          </tr>
          {
            appointmentData.map((row, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{row.name}</td>
                  <td>{row.mobile}</td>
                  <td>{row.reason ? row.reason : 'N/A'}</td>
                  <td>{row.appointmentDate.split('T')[0]}</td>
                  <td>{row.appointmentTime}</td>
                  <td>
                    <td><Button onClick={() => handleJoinRoom(`${row._id}`)}>Join</Button></td>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </div>
    </div>
  );
}

export default MedicalBillsTable;
