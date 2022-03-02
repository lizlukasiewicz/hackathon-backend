
import './App.css';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Outlet
} from 'react-router-dom'
import Attendees from './components/Attendees';
import Search from './components/Search';



export default function App() {
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
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Nerd Out!</h1>
      </header>
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />}/>
        <Route path="attendees" render={() => <Attendees people={people}/>} />
        <Route path="search" element={<Search/>} />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

function Layout(){
  return(
      <div>
          <nav>
          <ul>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/attendees">Complete list of attendees</Link></li>
              <li><Link to="/search">Search attendees by</Link></li>
          </ul>
          </nav>
      <Outlet />
      </div>
  )
}
function Home() {
  return(
    <div>
      <h3>Home</h3>
    </div>
  )
}