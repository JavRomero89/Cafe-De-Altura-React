import React from 'react'
import Logo from './Logo'



const NavBar = () => {
    return (
        <div className="flex flex-row justify-around items-center w-full h-16 bg-gray-900 text-white">
          <Logo/>

          <div className='flex flex-row items-center p-0 h-8 gap-16 w-[660px]'>
                        <section id="menu1"><a href="./tienda/tienda.html">Tienda</a></section>
                        <section id="menu2"><a href="./pages/suscripcion.html">Suscripción</a></section>
                        <section id="menu3"><a href="./pages/empresas.html">Para empresas</a></section>
                        <section id="menu4"><a href="./pages/about.html">Sobre Nosotros</a></section>
                        <section id="menu5"><a href="./pages/contacto.html">Contacto</a></section>
                    </div>
                    <div className='flex flex-row items-center p-0 gap-24'>
                        <section className='flex flex-row items-center p-0 gap-8'>
                                <p className='w-32 h-4 font-semibold text-sm leading-4'>+34 919 49 05 18</p>
                            
                        </section>
                        <button className='flex flex-row text-white w-32 h-10 bg-gray-700 rounded cursor-pointer border-none gap-8'>Iniciar sesion</button>
                    </div>
        </div>
    )
}

export default NavBar