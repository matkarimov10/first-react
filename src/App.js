import './App.css';
import { useState} from "react";
import {Title} from "./components/Title";
import {Main} from "./components/Main";
import {Modal} from "./components/Modal";
import {EvenList} from "./components/EvenList";
import {NewEventForm} from "./components/NewEventForm";

function App() {
    const [showModal, setShowModal] = useState(false)
    // const [name, setName] = useState("Matkarim")
    const [showContent, setShowContent] = useState(true)
    const [events, setEvents] = useState([]);
    // const handleClick = () => {
    //     setName("Shaxzod")
    // }

    const newEvent = (event) => {
        setEvents((value) => {
            return [...value, event]
        })
        setShowModal(false)
    }

    const deleteItem = (id) => {
        // const filteredEvents = events.filter((event) => event.id !== id)
        //  setEvents(filteredEvents)
        // setEvents(events.filter((event) => event.id !== id))

        setEvents((value) => {
            return value.filter((event) => event.id !== id)
        })

    }

    return (
        <div className="App">
            <Title title="This is props title" subtitle="This is props subtitle"/>
            <Main/>
            {/*<h1>My name is {name}</h1>*/}
            {/*<button onClick={handleClick}>Change name</button>*/}
            <button onClick={() => setShowContent(!showContent)}>{showContent ? "Hide" : "Show"} Content</button>
            {showContent && <EvenList events={events} deleteItem={deleteItem}/>}

            {showModal && <Modal>
                <NewEventForm newEvent={newEvent}/>
            </Modal>}
            <br/>
            <button onClick={()=>setShowModal(true)}>New Event</button>
        </div>
    );
}

export default App;
