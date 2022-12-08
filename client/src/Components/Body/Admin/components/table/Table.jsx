import styles from './Table.module.css'
import React,{useCallback, useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from "material-ui-search-bar";
import { selectUsers } from '../../../../../store/usersSlice';
import { selectDoctors } from '../../../../../store/doctorsSlice';
import { useSelector } from 'react-redux';

const Table = ({listtype}) => {

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
      width: 150,
    }
  ]} else if (listtype === "doctors") {
    columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 200 },
      {
        field: 'email',
        headerName: 'Email',
        width: 300,
      },
      {
        field: 'mobile',
        headerName: 'Mobile',
        width: 300,
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 300,
      },
      {
        field: 'experience',
        headerName: 'Experience',
        width: 300,
      }
    ]
  }

  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");


  const doctors = useSelector(selectDoctors)
  const users = useSelector(selectUsers)

  const fetchDoctors = useCallback(async () => {
    const doctorsObjList = []
    doctors.map((doctor, index) => {
      return doctorsObjList.push({
        "id": index +1,
        "name": doctor.name,
        "email": doctor.email,
        "mobile": doctor.mobile,
        "category": doctor.category,
        "experience": doctor.experience,
      })
    })
    setRows(doctorsObjList)
  }, [doctors])

  const fetchUsers = useCallback(async () => {
    const usersObjList = []
    users.map((user, index) => {
      return usersObjList.push({
        "id": index +1,
        "name": user.name,
        "email": user.email,
        "gender": user.gender,
        "verified": user.verified ? "✅" : "❌"
      })
    })
    setRows(usersObjList)
  }, [users])


  useEffect(() => {
    if (listtype === 'doctors') {
      fetchDoctors()
    } else if (listtype === 'users') {
      fetchUsers()
    }
  }, [fetchDoctors, listtype, fetchUsers])  

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

  return (
    <div className={styles.table}>
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
      />
    </div>
  )
}

export default Table