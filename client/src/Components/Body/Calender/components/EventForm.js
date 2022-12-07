import React, { useCallback, useEffect, useState } from 'react'
import classes from '../css/EventForm.module.css';
const EventForm = (props) => {

    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const setFormDetail = useCallback(() => {
        let event = props.events.find(event => event.timestamp === props.timestamp)
        setTitle(event ? event.title : '')
        setDescription(event ? event.description : '')
        setTime(new Date(props.timestamp).toLocaleTimeString())
        setDate(new Date(props.timestamp).toDateString())
    }, [props.timestamp, props.events])

    useEffect(() => {
        setFormDetail()
    }, [props.timestamp, setFormDetail])

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value)
    }

    const eventFormSubmitHandler = (e) => {
        setDescriptionError(false)
        setTitleError(false)
        e.preventDefault();
        if (title.trim().length === 0) {
            setTitleError(true)
            return;
        }
        if (description.trim().length === 0) {
            setDescriptionError(true)
            return;
        }
        let isConflicting;
        props.events.forEach((event) => {
            if (event.timestamp === props.timestamp) {
                isConflicting = true;
            }
        })
        if (isConflicting) {
            let text = 'Are you sure you want to change you event?';
            if (window.confirm(text) === false) {
                return;
            }
        }
        props.eventsHandler(props.timestamp, title, description)
        setTitle('')
        setDescription('')
        props.setFormVisibility(false)
    }

    const deleteEventHandler = () => {
        props.deleteEventHandler(props.timestamp)
        props.setFormVisibility(false)
    }

    return (
        <div className={classes.container}>
            <h2 style={{"color": "rgb(105, 110, 147)"}}>Appointment Form</h2>
            <form className={classes.userForm} onSubmit={eventFormSubmitHandler}>
                <input type='text' id='title' placeholder='Title' value={title} onChange={titleChangeHandler}></input>
                {titleError && <p>Title can not be empty</p>}
                <textarea type='text' id='description' placeholder='Appointment Reason' value={description} onChange={descriptionChangeHandler}></textarea>
                {descriptionError && <p>Description can not be empty</p>}
                <input type='text' id='time' placeholder='Start Time' value={time} readOnly></input>
                <input type='text' id='time' placeholder='End Time' value={new Date(props.timestamp + 60 * 60 * 1000).toLocaleTimeString()} readOnly></input>
                <input type='text' id='title' placeholder='Date' value={date} readOnly></input>
                <div className={classes.buttonContainer}>
                    <button type='submit'>{props.isAlreadyEvented ? 'Change Event' : 'Add Event'}</button>
                    {props.isAlreadyEvented && <button className={classes.deleteButton} type='button' onClick={deleteEventHandler}>Delete Event</button>}
                </div>
            </form>
        </div>
    )
}

export default EventForm;