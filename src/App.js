
import './App.css';
import { useState, useEffect } from 'react'
//import Attendees from './components/Attendees';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom'


function App() {
  const [people, setPeople]= useState([])
  const getData=() => {
    fetch('attendees.json', {
      headers : {
        'Content-Type': 'application/json', 
        'Accept' : 'application/json'
      }
    }
    )
    .then((response) => response.json())
    .then((json) => setPeople(json))
    .catch((err) =>{
      console.log(err)
    })
  }
  useEffect(()=> {
    getData()
  }, [])
  const peopleList = people?.map((person, index) => {
    return(
      <li key={index}>
        <p> {person.name} </p>
      </li>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Nerd Out!</h1>
      </header>
      <ul className="attendeeList">
        {peopleList}
      </ul>
    </div>
  );
}

export default App;
//<Attendees people={people}/>
// .then((myJson) => {
//   console.log(myJson)
//   setPeople(myJson)
// })