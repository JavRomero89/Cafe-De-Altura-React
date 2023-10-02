import React from 'react'
import Logo from './Logo'
import LogoFono from '../assets/LogoFono.png'
import Carrito from '../assets/Carrito.png'
import Boton from './Boton'
import LinksNavBar from './LinksNavBar'






const NavBar = () => {
    return (
        <div className={"flex flex-row justify-around items-center w-full h-16 bg-gray-900 text-white"}>
            <Logo />
            <LinksNavBar style={'flex flex-row items-center p-0 h-8 gap-12 w-[660px]'}/>
            <div className='flex flex-row items-center p-0 gap-24'>
                <section className='flex flex-row items-center p-0 gap-4'>
                    <img src={LogoFono} />
                    <p className='w-32 h-4 font-semiblod text-sm leading-4'>+34 919 49 05 18</p>
                </section>
            </div>
           <Boton style={'font-semibold py-3 px-6 bg-[#515051] ml-6 flex flex-row items-center justify-center rounded'} text={'Iniciar sesión'}></Boton>
           <div>
            <img src={Carrito} />
           </div>
        </div>
    )
}

export default NavBar