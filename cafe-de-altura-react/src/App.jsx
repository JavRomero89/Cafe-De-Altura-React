import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './page/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './page/Tienda';
import CopyRigth from './components/CopyRigth';
import Checkout from './page/Checkout';



function App() {
  
  return (
   
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Tienda" element={<Tienda/>} />
        <Route path="/Checkout" element={<Checkout/>} />
    </Routes>



    <CopyRigth/>
    </BrowserRouter>
    
    
  )
}

export default App
