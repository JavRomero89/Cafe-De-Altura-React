import React from 'react'
import LogoFono from '../assets/LogoFono.png'
import Mail from '../assets/Mail.png'
import LinksNavBar from './LinksNavBar'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Boton from './Boton'

const Footer = () => {
  return (
    <>
    <div className='h-[310px] bg-[#1F1815] flex flex-col items-center justify-between'>

        <div className=' my-[2%] text-white flex flex-col w-[1200px] gap-5 p-2'>
            <Logo/>
            <div className='flex flex-row  min-w-full'>
                <div className='flex flex-col gap-5 w-[48%]'>
                    <p className=' text-lg font-medium'>Te ayudamos en:</p>
                    {/* <div className='w-[182px] h-[48px] bg-[#515051]  rounded flex flex-row justify-center items-center '>
                        <img src={LogoFono} />
                        <Link className='font-semibold ml-2 text-sm' to={'tel:+34919490518'}> +34 919 49 05 18</Link>
                    </div>
                    <div className='w-[232px] h-[48px] bg-[#515051] rounded flex flex-row justify-center items-center '>
                        <img src={Mail} />
                        <Link className='font-semibold ml-2 text-sm' to={'mailto:hola@cafedealtura.com'}>hola@cafedealtura.com</Link>
                    </div> */}
                    <Boton style={'w-[182px] h-[48px] bg-[#515051]  rounded flex flex-row justify-center items-center font-semibold gap-[10px] text-sm '} img={LogoFono} text={'+34 919 49 05 18'}/>
                    <Boton style={'w-[232px] h-[48px] bg-[#515051] rounded flex flex-row justify-center items-center font-semibold gap-[10px] text-sm'} img={Mail} text={'hola@cafedealtura.com'}/>
                </div>
                <div className='w-[50%] flex flex-row gap-[120px]'>
                    <div>
                    <LinksNavBar style={'flex-col gap-4'}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                       <Link to={'/Privacidad'} ><p className=' font-medium text-sm cursor-pointer'>Política de privacidad</p></Link> 
                       <Link to={'/Cookies'}><p className=' font-medium text-sm cursor-pointer'>Política de cookies</p></Link> 
                        <Link to={'/Terminos'}><p className=' font-medium text-sm cursor-pointer'>Términos y condiciones</p></Link>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
</>
  )
}

export default Footer