import React from 'react'
import style from './DoctorRow.module.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'

const DoctorRow = ({id, imgsrc, name, degree, location, fee, type, rating}) => {
    const navigate = useNavigate()
    const handleBook = () => {
        navigate(`/book?doctor=${id}`)
    }
    return (
        <div className={`${style["row-container"]}`}>
            <div className={`${style["pp"]}`}>
                <img src={`https://xsgames.co/randomusers/assets/avatars/pixel/${imgsrc}.jpg`} alt='pp' className={`${style["pp-img"]}`}/>
            </div>
            <div className={`${style["details"]}`}>
                <div className={`${style["name"]}`} onClick={() => navigate(`/docProfile?doctor=${id}`)}>{name}</div>
                <div className={`${style["degree"]}`}>{degree}</div>
            </div>
            <div className={`${style["location"]}`}><span style={{color:"grey",fontSize:"12px"}}>in</span>&nbsp;{location}</div>
            <div className={`${style["fee"]}`}>{`₹${fee}`}</div>
            <div className={`${style["type"]}`}>{type}</div>
            <div className={`${style["rating"]}`}>
                <span>{rating}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="yellow"
                    stroke="grey" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                </svg>
            </div>
            <div>
            <Button style={{"backgroundColor":"var(--theme-color)","color":"white"}} onClick={handleBook}>Book Now</Button>
            </div>
        </div>
    )
}

export default DoctorRow