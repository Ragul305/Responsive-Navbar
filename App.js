import React from 'react'
import './App.css'
import {BrowserRouter  , Route, Routes} from 'react-router-dom'
import Navbar from './Components/navbar'
import Home from './Responsive Navbar/home'
import About from './Responsive Navbar/about'
import Contactus from './Responsive Navbar/contactus'
import Notfound from './Responsive Navbar/notfound'
import Project from './Responsive Navbar/project'
import Service from './Responsive Navbar/service'
import Signup from './Responsive Navbar/signup'

export function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <switch>
   {/* <nav>
      <ul>
        <li><Link to="./">Home</Link></li>
        <li><Link to="./about">About</Link></li>
        <li><Link to="./contactus">Contactus</Link></li>
        <li><Link to="./notfound">Notfound</Link></li>
        <li><Link to="./project">Project</Link></li>
        <li><Link to="./service">Service</Link></li>
        <li><Link to="./signup">Signup</Link></li>
        
      </ul>
  </nav> */}
      <Routes>
      <Route path='/' exact element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contactus'element={<Contactus></Contactus>}></Route>
      <Route path='/project' element={<Project></Project>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      </switch>
      
    </BrowserRouter>
  )
};
export default App;
