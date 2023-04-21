import styles from './Table.module.css'
import React, { useCallback, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from "material-ui-search-bar";
// import { selectUsers } from '../../../../../store/usersSlice';
// import { selectDoctors } from '../../../../../store/doctorsSlice';
// import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

const Table = ({ listtype }) => {

  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [unapprovedDoctors, setUnapprovedDoctors] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const fetchData = useCallback(async () => {
    if (listtype === "users") {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/getusers`, {
        credentials: 'include'
      })
      setUsers(await res.json())
    }

    if (listtype === "doctors") {
      const doctorres = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/doctors/getdoctors`, {
        credentials: 'include'
      })
      setDoctors(await doctorres.json())
    }

    if (listtype === "approve") {
      const doctorres = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/doctors/unapproved`, {
        credentials: 'include'
      })
      setUnapprovedDoctors(await doctorres.json())
    }
  }, [listtype])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  let columns = []
  if (listtype === "users") {
    columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 200 },
      {
        field: 'email',
        headerName: 'Email',
        width: 300,
      },
      {
        field: 'gender',
        headerName: 'Gender',
        width: 150,
      },
      {
        field: 'verified',
        headerName: 'Verified',
        width: 100,
      },
      {
        field: 'admin',
        headerName: 'Admin',
        width: 100,
      }
    ]
  } else if (listtype === "doctors") {
    columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 200 },
      {
        field: 'email',
        headerName: 'Email',
        width: 200,
      },
      {
        field: 'mobile',
        headerName: 'Mobile',
        width: 150,
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 200,
      },
      {
        field: 'experience',
        headerName: 'Experience',
        width: 100,
      }
    ]
  } else if (listtype === "approve") {
    columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 200 },
      {
        field: 'email',
        headerName: 'Email',
        width: 200,
      },
      {
        field: 'mobile',
        headerName: 'Mobile',
        width: 150,
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 200,
      },
      {
        field: 'experience',
        headerName: 'Experience',
        width: 100,
      }
    ]
  }

  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");



  const fetchDoctors = useCallback(async () => {
    const doctorsObjList = []
    doctors?.map((doctor, index) => {
      return doctorsObjList.push({
        "id": index + 1,
        "mongo_id": doctor._id,
        "name": doctor.name,
        "email": doctor.email,
        "mobile": doctor.mobile,
        "category": doctor.category,
        "experience": doctor.experience,
      })
    })
    setRows(doctorsObjList)
  }, [doctors])

  const fetchUnapprovedDoctors = useCallback(async () => {
    const doctorsObjList = []
    unapprovedDoctors?.map((doctor, index) => {
      return doctorsObjList.push({
        "id": index + 1,
        "mongo_id": doctor._id,
        "user_id": doctor.user,
        "name": doctor.name,
        "email": doctor.email,
        "mobile": doctor.mobile,
        "category": doctor.category,
        "experience": doctor.experience,
      })
    })
    setRows(doctorsObjList)
  }, [unapprovedDoctors])

  const fetchUsers = useCallback(async () => {
    const usersObjList = []
    console.log(users)
    users?.map((user, index) => {
      return usersObjList.push({
        "id": index + 1,
        "mongo_id": user._id,
        "name": user.name,
        "email": user.email,
        "gender": user.gender,
        "verified": user.verified ? "✅" : "❌",
        "admin": user.isAdmin ? "✅" : "❌"
      })
    })
    setRows(usersObjList)
  }, [users])


  useEffect(() => {
    if (listtype === 'doctors') {
      fetchDoctors()
    } else if (listtype === 'users') {
      fetchUsers()
    } else if (listtype === 'approve') {
      fetchUnapprovedDoctors()
    }
  }, [fetchDoctors, listtype, fetchUsers, fetchUnapprovedDoctors])

  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const deleteUsers = async (mongo_ids) => {
    try {
      if (listtype === "users") {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/deleteUser`, {
          method: 'POST',
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mongo_ids
          })
        })
        const data = await res.json()
        console.log(data.remaining)
        if (data) {
          setUsers(data.remaining)
        }
      }
      if (listtype === "doctors") {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/doctors/deleteDoctor`, {
          method: 'POST',
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mongo_ids
          })
        })
        const data = await res.json()
        console.log(data.remaining)
        if (data) {
          setDoctors(data.remaining)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const approveUsers = async (details) => {
    try {
      if (listtype === "approve") {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/doctors/approve`, {
          method: 'POST',
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            details
          })
        })
        const data = await res.json()
        console.log(data.remaining)
        setUnapprovedDoctors(data.remaining)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    setSelectedUsers(selectedRowsData)

  };

  const deleteUsersHandler = () => {
    const mongo_ids = []
    selectedUsers.forEach((data) => {
      mongo_ids.push(data.mongo_id)
    })
    deleteUsers(mongo_ids);
  }

  const approveUserHandler = () => {
    const mongo_ids = []
    const user_ids = []
    selectedUsers.forEach((data) => {
      mongo_ids.push(data.mongo_id)
      user_ids.push(data.user_id)
    })
    approveUsers({ mongo_ids, user_ids });
  }

  return (
    <div className={styles.container}>
      <div className={styles.table} style={{ width: '80%' }}>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          // disableSelectionOnClick
          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
      </div>
      {(listtype === "users" || listtype === "doctors") && <Button disabled={selectedUsers.length === 0} variant="contained" color="error" sx={{ height: 50 }} onClick={deleteUsersHandler}>DELETE {listtype === "users" ? "USERS" : "DOCTORS"}</Button>}
      {listtype === "approve" && <Button disabled={selectedUsers.length === 0} variant="contained" color="primary" sx={{ height: 50 }} onClick={approveUserHandler}>APPROVE</Button>}
    </div>
  )
}

export default Table