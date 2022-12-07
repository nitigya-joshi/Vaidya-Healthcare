import styles from "./Featured.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Appointments</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} styles={buildStyles({
            pathColor: `rgba(1, 203, 153, ${70 / 100})`,
            textColor: `rgba(1, 203, 153)`
          })}/>
        </div>
        <p className={styles.title}>Total appointments booked today</p>
        <p className={styles.amount}>12</p>
        <p className={styles.desc}>
          Previous appointment's transactions processing. Last appointment may not be included.
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={`${styles.itemResult} ${styles.negative}`}>
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className={styles.resultAmount}>100</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={styles.resultAmount}>58</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={styles.resultAmount}>1248</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured