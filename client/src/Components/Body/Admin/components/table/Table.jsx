import styles from './Table.module.css'
import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import originalRows from '../../data/sampleUserdata';
import SearchBar from "material-ui-search-bar";
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
  }
];


const Table = () => {

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

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