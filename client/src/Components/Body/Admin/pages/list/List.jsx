import styles from './List.module.css'
import Table from '../../components/table/Table'

const List = ({listtype}) => {
  return (
    <div className={styles.list}>
      <div className={styles.listContainer}>
        <Table listtype={listtype}/>
      </div>
    </div>
  )
}

export default List