
import Search from './Search'
import {Outlet} from 'react-router-dom'

export default function Attendees(props) {
    //console.log(props, "👾")
    const peopleList = props.people?.map((person, index) => {
        return(
          <li key={index}>
            <p> {person.name} </p>
          </li>
        )
      })
    
    return(
        <div>
            <Search />
            <ul>
            {peopleList}
            </ul>
            <Outlet />
        </div>
    )
}