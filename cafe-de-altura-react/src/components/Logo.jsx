import React from 'react'
import LogoCafe from '../assets/LogoCafe.png'
import { Link } from 'react-router-dom'



const Logo = () => {

    return (
   <Link to={"/"}>
        <div className="flex h-auto text-white items-center ">
            <p className="w-48 not-italic font-normal text-2xl leading-9 text-white">cafedealtura.com</p>
            <img className='w-5 h-6' src={LogoCafe}></img>
        </div>
    </Link>
    
    )
}

export default Logo