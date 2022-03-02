
import Search from './Search'


export default function Attendees(props) {
    //console.log(props, "👾")
    const peopleList = props.people?.map((person, index) => {
        return(
          <li key={index}>
            <p>Name: {person.name}, </p>
            <p>Team: {person.team}, </p>
            <p>Company: {person.Company}, </p>
            <p>Title: {person.title}, </p>
          </li>
        )
      })
    
    return(
        <div>
            <Search />
            <ul>
            {peopleList}
            </ul>
            
        </div>
    )
}