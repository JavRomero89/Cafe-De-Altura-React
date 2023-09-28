import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    
    <BrowserRouter>
    <NavBar/>
            <Routes>
                <Route path="/" element={<App/>} />
            </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
