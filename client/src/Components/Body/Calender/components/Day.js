import React from 'react'
import classes from '../css/Day.module.css';
const Day = (props) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let dayBlockClasses = `${classes.dayBlock} ${(props.dayId === new Date().toDateString()) ? classes.currentDay : ''}`;

    const dateClickHandler = () => {
        console.log(props.dayId)
    }

    return (
        <div className={dayBlockClasses} onClick={dateClickHandler}>
            <span>{days[props.day]}</span>
            <span>{props.date}</span>
        </div>
    )
}

export default Day