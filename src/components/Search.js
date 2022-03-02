import { useState } from 'react'
//import {Outlet} from 'react-router-dom'

export default function Search(props) {
    console.log(props.people, "⛱")
    //const [selection, setSelection] = useState('')
    const [input, setInput] = useState()
    const [searchResult, setSearchResult] = useState([])
    //function handleSelection(e) {setSelection(e.target.value)}
    //console.log(e.target.value, "🦋")
    const searchData= ()=> {
        console.log(typeof input, "✨") 
        const result = props.people.filter((person) => person.team === parseInt(input))
        setSearchResult(result)
    }
    const filteredList = searchResult?.map((person, index) => {
        return(
            <li key ={index}>
                <p>Name : {person.name} </p>
                <p>Team : {person.team}</p>
                <p>Company: {person.Company}</p>
                <p>Title : {person.title}</p>
            </li>
        )
    })
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
        <ul>

           {filteredList}
        </ul>
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