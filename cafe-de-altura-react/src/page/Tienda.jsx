import React from 'react'
import CopyRigth from '../components/CopyRigth'
import SectionStore from '../components/SectionStore'
// import { Link } from 'react-router-dom'

const Tienda = () => {
  return (
    <div className='flex p-10 flex-col items-center self-stretch gap-[24px]'>
        <h2 className='text-green-800 text-2xl not-italic font-medium leading-7'>Ultimos Origenes</h2>
        <SectionStore/>

        
    </div>
  )
}

export default Tienda