import React from 'react'
import CopyRigth from '../components/CopyRigth'
import SectionStore from '../components/SectionStore'
import CardInfo from '../components/cardInfo'
import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'

const Tienda = () => {
  return (
    <div className=''>
      <h2 className='text-green-800 text-2xl not-italic font-medium leading-7 flex flex-col items-center self-stretch gap-[24px] p-10'>Ultimos Origenes</h2>
      <SectionStore />
      <CardInfo />
      <Footer />


    </div>
  )
}

export default Tienda