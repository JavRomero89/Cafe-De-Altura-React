import React from 'react'
import LogoCafe from '../assets/LogoCafe.png'

const Logo = () => {

  return (
        <div>
            <header>
                <div className="flex py-[0.8em] px-[2.5em] justify-between items-center bg-[#2B2A2B]">
                    <div className="flex text-white items-center gap-[0.45em]">
                        <p className="text-[1.5em] not-italic font-normal leading-[2.1em]">cafedealtura.com</p>
                        
                    </div>
                    <div id="divMenu">
                        <section id="menu1"><a href="./tienda/tienda.html">Tienda</a></section>
                        <section id="menu2"><a href="./pages/suscripcion.html">Suscripción</a></section>
                        <section id="menu3"><a href="./pages/empresas.html">Para empresas</a></section>
                        <section id="menu4"><a href="./pages/about.html">Sobre Nosotros</a></section>
                        <section id="menu5"><a href="./pages/contacto.html">Contacto</a></section>
                    </div>
                    <div id="divFono">
                        <section id="contacto">
                                <p>+34 919 49 05 18</p>
                            
                        </section>
                        <button id="login">Iniciar sesion</button>
                    </div>
                
                </div>
            </header> 
        </div>
    )
}

export default Logo