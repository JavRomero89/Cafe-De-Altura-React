import React from 'react'
import Mail_Black from '../assets/Mail_Black.png'
import Phone_Black from '../assets/Phone_Black.png'
import Boton from './Boton'
import { Link } from 'react-router-dom'


const SectionForm = () => {
  return (
    <>
            <div className='bg-[#E3DED7]  flex flex-row justify-center items-center'>
                <div className='w-[1200px] flex flex-row gap-6'>

                    <div className='w-[50%] flex flex-col justify-center gap-3'>
                        <h3 className=' font-semibold text-lg text-[#111827]'>Entra en contacto con nosotros</h3>
                        <div className='flex flex-col gap-6 font-normal text-sm text-[#6B7280]'>
                            <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                            <p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de la tienda.</p>
                            <div>
                                <p>742 Evergreen Terrace</p>
                                <p>Springfield, OR 12345</p>
                            </div>
                            <div className='flex flex-row  items-center gap-3'><img src={Mail_Black} /><p>+1 (555) 123-4567</p></div>
                            <div className='flex flex-row  items-center gap-3'><img src={Phone_Black} /><p>support@example.com</p></div>
                            <p>¿Buscas un trabajo? <Link to={'https://www.m25.space/contact'} target='_blank'><span className=' font-medium text-sm underline text-black cursor-pointer'>Ver nuestras ofertas.</span></Link> </p>
                        </div>
                    </div>

                    <div className='w-[50%] bg-white text-[#374151] p-[32px]'>
                        <form action="">
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-1'>
                                    <label>Nombre completo</label>
                                    <input className='border-2 border-solid outline-green-900 rounded-md'></input>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Email</label>
                                    <input className='border-2 border-solid outline-green-900 rounded-md'></input>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Teléfono</label>
                                    <input className='border-2 border-solid outline-green-900 rounded-md' placeholder='+1 (555) 987-6543'></input>
                                </div>
                                <textarea className='border-2 border-solid outline-green-900 rounded-md ' cols='30' rows='6' placeholder='¿En qué podemos ayudarte?'></textarea>
                                <div className='flex gap-3'>
                                    <input className='accent-[#2A5B45] w-auto' type='checkbox'></input>
                                    <label>Acepto la <Link className='underline cursor-pointer font-semibold' to={'/Privacidad'}>Política de Privacidad</Link> y los <Link className='underline cursor-pointer font-semibold' to={'/Terminos'}>Términos y condiciones</Link>.</label>
                                </div>
                                <Boton style={'bg-[#2A5B45] rounded text-white flex flex-row items-center justify-center w-[90px] h-[40px]'} text={'Enviar'}/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            </>
  )
}

export default SectionForm