import React, { useState } from 'react'
import Calendar from 'react-calendar'

export default function MyCalendar() {
    const [date, setDate]=useState(new Date());
    const onDateChange=(newDate)=>{
        setDate(newDate);
        console.log(newDate);
    }
  return (
    <Calendar onChange={onDateChange} value={date} showNeighboringMonth={false} locale={"en-US"} />
  )
}
