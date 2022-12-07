import styles from './Widget.module.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Link } from 'react-router-dom';
const Widget = ({ type }) => {
    let data;
    const diff = 20
    const amount = 100
    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: 'See all users',
                route: 'users',
                icon: <PersonOutlinedIcon className='icon' />
            }
            break;
        case 'doctor':
            data = {
                title: "DOCTORS",
                isMoney: false,
                link: 'See all doctors',
                route: 'doctors',
                icon: <PersonOutlinedIcon className='icon' />
            }
            break;
        case 'appointment':
            data = {
                title: "APPOINTMENTS",
                isMoney: false,
                link: 'View all appointments',
                route: 'appointments',
                icon: <LocalHospitalIcon className='icon' />
            }
            break;
        case 'earning':
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletOutlinedIcon className='icon'/>
            }
            break;

        default:
            break;
    }

    return (
        <div className={styles.widget}>
            <div className={styles.left}>
                <span className={styles.title}>{data.title}</span>
                <span className={styles.counter}>{data.isMoney && "$"}{amount}</span>
                <Link to={data.route}><span className={styles.link}>{data.link}</span></Link>
            </div>
            <div className={styles.right}>
                <div className={`${styles.percentage} `}>
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget