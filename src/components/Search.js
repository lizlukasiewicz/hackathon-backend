import { useState } from 'react'
//import {Outlet} from 'react-router-dom'

export default function Search(people) {
    console.log(people.people, "⛱")
   const peopleData = people.people
    //const [selection, setSelection] = useState('')
    const [input, setInput] = useState('')
    //const [result, setResult] = useState([])
    //function handleSelection(e) {setSelection(e.target.value)}
    //console.log(e.target.value, "🦋")
    function searchData() {
        console.log( input, "✨") 
        const result = peopleData.filter((person) => person.team === input )[0]
        console.log(result, "🐉")
    }
    return (
        <div>
            <p>search attendees by:</p>
            <div>
                <select defaultValue="team" >
                <option value="team">Team</option>
                </select>
                <input onChange={(e) => {setInput(e.target.value)}}></input>
                <button onClick={searchData}>submit</button>
            </div>
           
        </div>
    )
}
//onChange={handleSelection}
//<option value="name">Name</option>
//<option value="company">Company</option>
//<option value="title">Title</option>
//<option value="id">id number</option>

// const teams = people.find(function(person) { 
    //return person.team === input
            
        
//})
//person => person.team === input).map((person, index) => {
            // return(
            //     <li key={index}>
            //         <p>{person.name}</p>
            //         <p>{person.team}</p>
            //     </li>
            // )