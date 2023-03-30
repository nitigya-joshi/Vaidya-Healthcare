import styles from './Home.module.css'
// import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import BannerProps from '../../../Banner/BannerProps'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUsers } from '../../../../../store/usersSlice'
import { addDoctors } from '../../../../../store/doctorsSlice'

const AdminHome = () => {

    const dispatch = useDispatch()

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:3000/api/users/getusers', {
            credentials: 'include'
        })
        const users = await res.json()
        dispatch(addUsers(users))

        const doctorres = await fetch('http://localhost:3000/api/doctors/getdoctors', {
            credentials: 'include'
        })
        const doctors = await doctorres.json()
        dispatch(addDoctors(doctors))
    }, [dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            <BannerProps
                img="https://i.imgur.com/fzc9vDw.png"
                title="Admin"
                text="This is the page where you have full access and previliges!"
            />
            <div className={styles.home}>
                {/* <Sidebar />  */}
                <div className={styles.homeContainer}>
                    {/* <Navbar /> */}
                    <div className={styles.widgets}>
                        <Widget type='user' />
                        <Widget type='doctor' />
                        <Widget type='appointment' />
                        <Widget type='earning' />
                    </div>
                    <div className={styles.charts}>
                        <Featured />
                        <Chart />
                    </div>
                </div>
            </div>
        </>

    )
}

export default AdminHome