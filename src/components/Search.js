import { useState } from 'react'

export default function Search(people) {
    //console.log(people, "⛱")
    const [selection, setSelection] = useState([])
    const [input, setInput] = useState([])

    
    function handleSelection(e) { setSelection(e.target.value)}
        //console.log(e.target.value, "🦋")
    function handleInput(e) {setInput(e.target.value)}
        //console.log(e.target.value, "🦑")
    function searchData() {console.log(selection, input, "✨")}
    return (
        <div>
            <p>search attendees by:</p>
            <div>
                <select defaultValue="search by" onChange={handleSelection}>
                <option value="name">Name</option>
                <option value="team">Team</option>
                <option value="company">Company</option>
                <option value="title">Title</option>
                <option value="id">id number</option>
                </select>
                <input onChange={handleInput}></input>
                <button onClick={searchData} >submit</button>
            </div>
        </div>
    )
}