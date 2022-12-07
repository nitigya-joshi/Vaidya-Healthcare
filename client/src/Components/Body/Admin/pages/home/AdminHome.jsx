import styles from './Home.module.css'
// import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import BannerProps from '../../../Banner/BannerProps'
const AdminHome = () => {
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
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
        </>

    )
}

export default AdminHome