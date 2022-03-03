import { useState } from 'react'
//import {Outlet} from 'react-router-dom'

export default function Search(props) {
    //console.log(props.people, "⛱")
    const [selection, setSelection] = useState('')
    const [input, setInput] = useState()
    const [searchResult, setSearchResult] = useState([])
    //function handleSelection(e) 

    const searchData= ()=> {
        console.log(typeof input, input, "✨", typeof selection, selection)
        if(selection === "team") {
            const result = props.people.filter((person) => person.team === parseInt(input))
        setSearchResult(result)
        } else if (selection === "id") {
            const result = props.people.filter((person) => person.id === parseInt(input))
        setSearchResult(result)
        } else if (selection === "name") {
            const result = props.people.filter((person) => person.name === input)
        setSearchResult(result)
        } else if (selection === "Company") {
            const result = props.people.filter((person) => person.Company === input)
        setSearchResult(result)
        } else {
            const result = props.people.filter((person) => person.title === input)
        setSearchResult(result)
        }
        
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
            <p>search attendees by id number:</p>
            <div>
                <select defaultValue=" " onChange={(e) => {setSelection(e.target.value)}} >
                <option value="team">Team</option>
                <option value="name">Full Name</option>
                <option value="Company">Company</option>
                <option value="title">Title</option>
                <option value="id">id number</option>
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