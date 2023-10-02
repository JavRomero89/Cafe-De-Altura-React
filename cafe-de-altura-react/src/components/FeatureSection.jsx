import React from 'react'
import feature_section from '../assets/feature_section.png'
import { Link } from 'react-router-dom'
import Flechita_Negra from '../assets/Flechita_Negra.png'

const FeatureSection = () => {
  return (
    <>
    <section className='bg-[#F7F5F3] h-[480px] flex flex-row justify-center items-center'>
<div className='w-[1200px] flex flex-row justify-between items-center '>
    <div className='flex flex-col items-start gap-4 w-[457px]'>
        <h2 className=' font-medium text-2xl text-[#2A5B45]'>Pruébalo en nuestro coffee shop</h2>
        <p className=' font-normal text-sm text-[#111827]'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
        <div className="flex gap-3  items-baseline font-semibold text-sm leading-4 underline cursor-pointer">
                <Link className="text-[#000000] underline">Cómo llegar</Link>
                <img src={Flechita_Negra} />
            </div>   
    </div>
    <div>
        <img className='shadowElement ' src={feature_section}/>
    </div>

</div>
        
    </section>
    
    </>
  )
}

export default FeatureSection