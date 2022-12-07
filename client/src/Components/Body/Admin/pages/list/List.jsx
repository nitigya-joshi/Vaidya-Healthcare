import styles from './List.module.css'
import Table from '../../components/table/Table'

const List = () => {
  return (
    <div className={styles.list}>
      <div className={styles.listContainer}>
        <Table/>
      </div>
    </div>
  )
}

export default List