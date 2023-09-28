import React from 'react'
import LogoCafe from '../assets/LogoCafe.png'
import { Link } from 'react-router-dom'


const Logo = () => {

    return (
<div className='flex flex-row items-center p-0 w-56 h-8 gap-7 cursor-pointer'>
       <Link to={"/"}><div className="flex text-white items-center gap-[0.45em]">
            <p className="w-48 h-8 not-italic font-normal text-2xl leading-9 text-white">cafedealtura.com</p>
            <img src={LogoCafe}></img>
        </div></Link>
</div>
    )
}

export default Logo