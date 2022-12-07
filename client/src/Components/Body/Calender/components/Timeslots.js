import React, { useState } from 'react'
import classes from '../css/Timeslots.module.css';
import EventForm from "./EventForm";
import TimeColumn from './TimeColumn';

const Timeslots = (props) => {
    const [timestamp, setTimestamp] = useState();
    const [formVisible, setFormVisible] = useState(false);
    const [isAlreadyEvented, setIsAlreadyEvented] = useState(false);

    const formVisibilityHandler = (isVisible) => {
        setFormVisible(isVisible)
    }

    const timeslotClickHandler = (index) => {
        const xIndex = index % 7;
        const yIndex = Math.floor(index / 7);
        const clickedtimestamp = props.currentWeek[xIndex].getTime() + yIndex * 60 * 60 * 1000;
        if (clickedtimestamp === timestamp) {
            setFormVisible((visible) => !visible)
        } else {
            setFormVisible(true)
        }
        setTimestamp(clickedtimestamp);
        setIsAlreadyEvented(props.events.some((event) => {
            return event.timestamp === clickedtimestamp
        }))
    }

    const cells = new Array(168).fill(null).map((elem, index) => {
        const xIndex = index % 7;
        const yIndex = Math.floor(index / 7);
        const renderedTimestamp = props.currentWeek[xIndex].getTime() + yIndex * 60 * 60 * 1000;
        let content = '';
        if (props.events.length > 0) {
            props.events.forEach((event) => {
                if (event.timestamp === renderedTimestamp) {
                    content = <div className={classes.eventCell}>{event.title}</div>
                }
            })
        }
        let hourIndex = new Date().getHours()
        let timeCellClasses = `${classes.gridItem} ${hourIndex === yIndex && xIndex === 0 ? classes.current : ''}`;
        return <div key={index} className={timeCellClasses} onClick={() => timeslotClickHandler(index)}>{content}</div>
    })

    return (
        <div className={classes.container}>
            {formVisible && <EventForm eventsHandler={props.eventsHandler} deleteEventHandler={props.deleteEventHandler} timestamp={timestamp} events={props.events} isAlreadyEvented={isAlreadyEvented} setFormVisibility={formVisibilityHandler} />}
            <div className={classes.timeColumn}><TimeColumn /></div>
            <div className={classes.timeslotContainer}>
                <div className={classes.gridContainer}>
                    {cells}
                </div>
            </div>
        </div>
    )
}

export default Timeslots;