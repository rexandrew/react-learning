import "./NewEventForm.css";
import React, {useState, useRef} from 'react';

export default function NewEventForm({addEvent}){

//    const [title, setTitle] = useState('');
//    const [date, setDate] = useState('');

   const [location, setLocation] = useState('manchester');
   const title = useRef();
   const date = useRef();

   const handleSubmit = (e) => {
    // Prevent browser referesh
       e.preventDefault();

       const event = {
           title: title.current.value,
           date: date.current.value,
           location: location,
           id: Math.floor(Math.random()* 10000)           
       }    
       
       title.current.value = "";
       date.current.value = "";

       addEvent(event);
   }

    return (
        <form className ="new-event-form" onSubmit={handleSubmit}>

        {/* <label htmlFor="title"></label>
        <input type = "text" id ="title" /> */}
     
        <label>
            <span>New Item:</span>
            {/* <input onChange = {(e)=>{setTitle(e.target.value)}} value ={title} type = "text" /> */}

            <input ref={title} type = "text" />
        </label>
        
        <label>
            <span>Event Date:</span>
            <input ref={date} type = "date" />
        </label>
        
        <label>
        <span>Event location: </span>
        <select onChange = {(e) =>setLocation(e.target.value)}>
        <option value = "manchester">Manchester</option>
        <option value = "london">London</option>
        <option value="india">India</option>
        </select>
        </label>
        <button>Submit</button>
        
        </form>
    )
}