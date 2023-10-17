import { React, useContext, useState } from 'react'
import Logo from './Logo'
import LogoFono from '../assets/LogoFono.png'
import Carrito from '../assets/Carrito.png'
import Boton from './Boton'
import LinksNavBar from './LinksNavBar'
import { CartContext } from '../context/CartContext'

const NavBar = () => {
    const { cart, incrementProduct, decrementProduct, clearCart } = useContext(CartContext);
    const [showCartModal, setShowCartModal] = useState(false);




    return (
        <div className={"flex flex-row justify-around items-center w-full h-16 bg-gray-900 text-white"}>
            <Logo />
            <LinksNavBar style={'flex flex-row items-center p-0 h-8 gap-12 w-[660px]'} />
            <div className='flex flex-row items-center p-0 gap-24'>
                <section className='flex flex-row items-center p-0 gap-4'>
                    <img src={LogoFono} />
                    <p className='w-32 h-4 font-semiblod text-sm leading-4'>+34 919 49 05 18</p>
                </section>
            </div>
            <Boton style={'font-semibold py-3 px-6 bg-[#515051] ml-6 flex flex-row items-center justify-center rounded'} text={'Iniciar sesión'}></Boton>
            <div className="flex items-center relative cursor-pointer" onClick={() => setShowCartModal(!showCartModal)}>
                <img src={Carrito} alt="Carrito de compras" />
                {cart.length > 0 && (
                    <span className="relative ml-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">{cart.length}</span>
                )}
            </div>

            {showCartModal && (
                
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={() => setShowCartModal(false)}></div>
                    <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
                        <h2 className="text-xl font-bold mb-4 text-black">Tu Carrito</h2>
                        {cart.length === 0 ? (
                            <p className="font-medium text-center my-4 text-black">CARRITO VACIO</p>
                        ) : (
                            cart.map(product => (
                                <div key={product._id} className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2 text-black">
                                        <button onClick={() => decrementProduct(product._id)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => incrementProduct(product._id)}>+</button>
                                        <img className="w-16 h-16" src={product.img} alt={product.name} />
                                        <h4 className="font-medium text-black">{product.name}</h4>
                                    </div>
                                    <p className="font-semibold text-black">{(product.price * product.quantity).toFixed(2)} €</p>
                                </div>
                            )))}

                        {cart.length > 0 && (
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded mr-4" onClick={clearCart}>CLEAR</button>
                        )}
                        <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded" onClick={() => setShowCartModal(false)}>Cerrar</button>
                    </div>
                </div>
            )}


        </div>
    )
}

export default NavBar