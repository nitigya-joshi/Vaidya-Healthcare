import React from 'react'
import Day from './Day';
import classes from '../css/Week.module.css';
const Week = (props) => {

    const daysArray = props.currentWeek.map((day, index) => {
        return <Day key={index} index={index} day={day.getDay()} date={day.getDate()} dayId={day.toDateString()} />
    })

    return (
        <div className={classes.weekRow}>
            {daysArray}
        </div>
    )
}

export default Week