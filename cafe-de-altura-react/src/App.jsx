import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './page/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './page/Tienda';
import CopyRigth from './components/CopyRigth';



function App() {
  
  return (
   
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Tienda" element={<Tienda/>} />
    </Routes>



    <CopyRigth/>
    </BrowserRouter>
    
    
  )
}

export default App
