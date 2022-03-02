
import Edit from "./Edit"
import Delete from "./Delete"


export default function Attendees(props) {
    //console.log(props, "👾")
    const peopleList = props.people?.map((person, index) => {
        return(
          <li key={index}>
            <p>Name: {person.name}, </p>
            <p>Team: {person.team}, </p>
            <p>Company: {person.Company}, </p>
            <p>Title: {person.title}, </p>
            <Edit info={person}/>
            <Delete info={person}/>
          </li>
        )
      })
    
    return(
        <div>
            <ul>
            {peopleList}
            </ul>
            
        </div>
    )
}
//<Search />