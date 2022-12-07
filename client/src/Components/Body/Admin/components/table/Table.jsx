import styles from './Table.module.css'
import React,{useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import originalRows from '../../data/sampleUserdata';
import SearchBar from "material-ui-search-bar";
const columns = [
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
];

const Table = ({listtype}) => {

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const fetchDoctors = async () => {
    const res = await fetch('http://localhost:3000/api/doctors/getdoctors', {
      credentials: 'include'
    })
    const doctors = await res.json()
    console.log(doctors)
    // setList(doctors)
  }

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users/getusers', {
      credentials: 'include'
    })
    const users = await res.json()
    const usersObjList = []
    users.map((user, index) => {
      usersObjList.push({
        "id": index +1,
        "name": user.name,
        "email": user.email,
        "gender": user.gender,
        "verified": user.verified
      })
    })
    console.log(usersObjList)
    setRows(usersObjList)
  }

  useEffect(() => {
    if (listtype === 'doctors') {
      fetchDoctors()
    } else if (listtype === 'users') {
      fetchUsers()
    }
  }, [])  

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
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