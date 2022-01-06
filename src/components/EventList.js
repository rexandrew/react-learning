import React from 'react';
import style from './EventList.module.css';


export default function EventList({events, handleDeleteClick}){

    return (
        <div>
        {
        events.map((event, index)=> 
        <React.Fragment key ={event.id}>
        <div className ={style.card}>
        <h3>{index + 1} {event.title}</h3> 
        <h3>{event.date}</h3>
        <h3>{event.location}</h3>
        <button onClick = {()=>handleDeleteClick(event.id)}>delete</button>
        </div>
        </React.Fragment> )       
        }  
       </div>
    
    )
}
