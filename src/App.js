import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {

//  const [name, setName] = useState('marta');
 const [events, setEvents] = useState([]);

 const [showEvent, setShowEvent] = useState(true);

 const [showModal, setModal] = useState(false);

  // const changeName = ()=> {
  //    setName('maria');
  // }

  const handleDeleteClick = (id)=>{
     setEvents((prevState) => {
      return prevState.filter(event => {return event.id !== id})
     })  
  }

  const addEvent= (event)=>{
    setEvents((prevEvent)=>{
      return [...prevEvent, event]
    });
    setModal(false);
  }  

  return (
    <div className="App">
      
      <Title title ="Mario Kingdom Events"/>      

      {/* <h1>My name is {name} </h1> */}
      {/* <button onClick = {changeName}>Change Name</button> */}
      
      <div>
        <button onClick = {() => {setShowEvent((prevState)=>{ return !prevState}) }}>Hide/Display</button>
      </div>
      
             
       {showEvent && <EventList events = {events} handleDeleteClick = {handleDeleteClick}/>}
      
    

      {/* { events.map((event)=>{
          <div>            
            <h2>{event.title}</h2>
          </div>
        })
      } */}

    {/* <Modal>
    <h2>10% Off Coupen code!!</h2>
    <p>Use the code JKDK at the checkout</p>
    </Modal>           */}
    {showModal &&
    <Modal>
    <NewEventForm  addEvent= {addEvent}/>
    </Modal>    
    }

    <br/>
    <button onClick= {()=>{setModal(true)}}>Add New Event</button>


    </div>
  );
}

export default App;
