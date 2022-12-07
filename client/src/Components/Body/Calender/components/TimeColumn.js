import React from 'react'
import classes from '../css/TimeColumn.module.css';
const TimeColumn = () => {

    const column = new Array(24).fill(null).map((elem, index) => {
        return <div key={index} className={classes.timeItem}>{index % 12 === 0 ? 12 : index % 12}:00 {(index < 12) ? 'AM' : 'PM'}</div>
    })

    return (
        <div className={classes.timeColumnContainer}>
            {column}
        </div>
    )
}

export default TimeColumn;