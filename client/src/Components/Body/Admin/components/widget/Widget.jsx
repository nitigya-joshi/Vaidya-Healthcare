import styles from './Widget.module.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Link } from 'react-router-dom';
import { selectUsers } from '../../../../../store/usersSlice';
import { selectDoctors } from '../../../../../store/doctorsSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Widget = ({ type }) => {
    let data;
    const diff = 20

    const [unapproved, setUnapproved] = useState()

    useEffect(() => {
        const fetchUnapprovedDoctors = async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/doctors/unapproved`, {
                credentials: 'include'
            })
            const doctors = await res.json()
            setUnapproved(doctors.length)
        }
        fetchUnapprovedDoctors()
    })

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
                title: "TO APPROVE",
                isMoney: false,
                link: 'Approve doctors',
                route: 'approve',
                icon: <LocalHospitalIcon className='icon' />
            }
            break;

        default:
            break;
    }
    const users = useSelector(selectUsers)
    const doctors = useSelector(selectDoctors)
    let number
    if (type === "user") {
        number = users.length
    } else if (type === "doctor") {
        number = doctors.length
    } else if (type === "appointment") {
        number = 127
    } else if (type === "earning") {
        number = unapproved
    }


    return (
        <div className={styles.widget}>
            <div className={styles.left}>
                <span className={styles.title}>{data.title}</span>
                <span className={styles.counter}>{data.isMoney && "$"}{number}</span>
                <Link to={data.route}><span className={styles.link}>{data.link}</span></Link>
            </div>
            <div className={styles.right}>
                <div className={`${styles.percentage} `}>
                    <KeyboardArrowUpOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget