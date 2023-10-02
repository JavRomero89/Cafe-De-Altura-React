import React from 'react'
import { Link } from 'react-router-dom'

const LinksNavBar = ({style}) => {
  return (
    <div className={style}>
                <Link to={'/Tienda'}>Tienda</Link>
                <Link to={'/Suscripcion'}>Suscripción</Link>
                <Link to={'/Empresas'}>Para Empresas</Link>
                <Link to={'/AboutUs'}>Sobre Nosotros</Link>
                <Link to={'/Contacto'}>Contacto</Link>
                {/* <section id="menu2"><a href="./pages/suscripcion.html">Suscripción</a></section>
                <section id="menu3"><a href="./pages/empresas.html">Para empresas</a></section>
                <section id="menu4"><a href="./pages/about.html">Sobre Nosotros</a></section>
                <section id="menu5"><a href="./pages/contacto.html">Contacto</a></section>
       */}
    </div>
  )
}

export default LinksNavBar