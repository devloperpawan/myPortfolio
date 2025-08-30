import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Contact from './components/Contact'
import Project from './components/Project'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
