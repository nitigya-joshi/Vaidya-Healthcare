import { useState } from 'react'
import { getWeek } from "../util";
import Header from "../components/Header";
import Week from '../components/Week';
import Timeslots from "../components/Timeslots";
import classes from '../css/Calender.module.css';
const Calender = () => {
    const [week, setWeek] = useState(() => { return getWeek() })
  const [events, setEvents] = useState([]);

  const setEventsHandler = (timestamp, title, description) => {
    setEvents((events) => {
      let eventsArray = events.filter((event) => {
        return event.timestamp !== timestamp
      })
      eventsArray.push({ timestamp, title, description })
      return eventsArray
    })
  }

  const deleteEventHandler = (tmstmp) => {
    setEvents((events) => {
      let eventsArray = events.filter((event) => {
        return event.timestamp !== tmstmp
      })
      return eventsArray;
    })
  }

  const prevButtonHandler = () => {
    setWeek((week) => {
      return getWeek(new Date(week[0].getTime() - 7 * 1000 * 60 * 60 * 24));
    })
  }
  const nextButtonHandler = () => {
    setWeek((week) => {
      return getWeek(new Date(week[6].getTime() + 1000 * 60 * 60 * 24));
    })
  }
  return (
    <>
      <div>
        <Header prevButtonHandler={prevButtonHandler} nextButtonHandler={nextButtonHandler} currentDay={week[0]} />
      </div>

      <div className={classes.calenderContainer}>
        <Week currentWeek={week} />
        <Timeslots currentWeek={week} eventsHandler={setEventsHandler} deleteEventHandler={deleteEventHandler} events={events} />
      </div>
    </>
  )
}

export default Calender