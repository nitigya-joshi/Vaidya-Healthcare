import React from 'react';
import classes from '../css/Header.module.css';
const Header = (props) => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerHeading}></div>
            <button className={classes.controllerButtons} onClick={props.prevButtonHandler}>←</button>
            <div className={classes.currentWeek}>{props.currentDay.toDateString()} - {(new Date(props.currentDay.getTime() + 6 * 1000 * 60 * 60 * 24)).toDateString()}</div>
                <button className={classes.controllerButtons} onClick={props.nextButtonHandler}>→</button>
        </div>
    )
}

export default Header;