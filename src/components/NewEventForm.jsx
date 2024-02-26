import './NewEventForm.css'
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
// import React from "react";
export const NewEventForm = ({newEvent}) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    const resetForm = () => {
        setTitle("")
        setDate("")
    }
    const submitForm = (e) => {
        e.preventDefault()
        const event = {
            id: uuidv4(),
            title: title,
            date: date,
        }
        newEvent(event)
        resetForm()

    }
    return (
        <form className="new-event-form" onSubmit={submitForm}>
            <label>
                <span>Event title:</span>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                <span>Event date:</span>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </label>
            <label>
                <span>Event location:</span>
                <select>
                    <option value="khorezm">Xorazm</option>
                    <option value="tashkent">Toshkent</option>
                    <option value="samarkand">Samarqand</option>
                </select>
            </label>
            <button type="button" onClick={resetForm}>Reset</button>
            <button type="submit">Add Event</button>

            <hr/>
            <h4>Title: {title}</h4>
            <h4>Date: {date}</h4>
        </form>
    )
}