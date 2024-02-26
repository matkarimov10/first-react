import {Fragment} from "react";
import style from './EventList.module.css'
export const EvenList = ({events, deleteItem}) => {
    return (
        <>
            <div>
                {events.length === 0 && <p>No events yet</p>}
                {events.map((event) => (
                    <div className={style['my-card']} key={event.id}>
                        <h2 style={{color: 'red'}}>ID: {event.id}</h2>
                        <h2>Title: {event.title}</h2>
                        <h2>Date: {event.date}</h2>
                        <button onClick={() => deleteItem(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}