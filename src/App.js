import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {

//  const [name, setName] = useState('marta');
 const [events, setEvents] = useState([{title: "marta's birthday bash", id: 1}, {title: "bowser's live stream", id: 2}, {title: "race on moo farm", id: 3}]);

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
 
  const closeModal = () => {
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
    <Modal closeModal = {closeModal}>
    <h2>Terms and conditions</h2>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt delectus culpa ullam? Veritatis optio sit neque nostrum accusantium non explicabo. Dolores dicta eveniet assumenda. Ducimus illum ab dignissimos! Nam.
    </p>
    </Modal>    
    }

    <br/>
    <button onClick= {()=>{setModal(true)}}>Show Modal</button>


    </div>
  );
}

export default App;
