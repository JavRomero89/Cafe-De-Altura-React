import React from 'react'
import Check from '../assets/Check.png'
import Gift from '../assets/Gift.png'
import Truck from '../assets/Truck.png'
import background from '../assets/background.jpg'

const CardInfo = () => {
  return (
    <div>
        <card className='flex py-[3em] p-x[9.1em] flex-col justify-center items-center p-12 bg-cover bg-no-repeat bg-center gap-[24px] h-[380px]' style={{backgroundImage:`url(${background})`}}>
        <h2 className='text-[1.5em] not-italic font-medium text-[white]'>Café en con las mejores condiciones</h2>
        <div className='flex gap-[24px]'>
            <card className='box-border flex flex-col justify-center items-center p-7 h-56 bg-white rounded-lg gap-[16px] w-[316px] border-[#F7F5F3] border-[1px] border-solid shadow-[0px 1px 4px 0px] shadow-[rgba(227, 222, 215, 0.80)]'>
                <img className='flex flex-col items-start p-2 gap-[8px]' src={Check}/>
                <h3 className='h-6 not-italic font-semibold text-lg leading-6 text-center text-gray-900 w-[280px]'>Recibe tu pedido sin preocuparte</h3>
                <p className='not-italic font-normal text-sm leading-4 text-center text-gray-900'>Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de
                    café, nunca te quedarás
                    sin tu taza de la mañana.</p>
            </card>
            <card className='box-border flex flex-col justify-center items-center p-6 h-56 bg-white rounded-lg gap-[16px] w-[316px] border-[#F7F5F3] border-[1px] border-solid shadow-[0px 1px 4px 0px] shadow-[rgba(227, 222, 215, 0.80)]'><img className='flex flex-col items-start p-3 g-[8px]' src={Truck}/>
                <h3 className='h-6 not-italic font-semibold text-lg leading-6 text-center text-gray-900 w-[280px]'>Envío en 24/48h</h3>
                <p className='not-italic font-normal text-sm leading-4 text-center text-gray-900'>Pide tu café antes de las 12h y lo recibirás al dia siguiente.</p>
            </card>
            <card className='box-border flex flex-col justify-center items-center p-6 h-56 bg-white rounded-lg gap-[16px] w-[316px] border-[#F7F5F3] border-[1px] border-solid shadow-[0px 1px 4px 0px] shadow-[rgba(227, 222, 215, 0.80)]'><img className='flex flex-col items-start p-3 g-[8px]' src={Gift}/>
                <h3 className='h-6 not-italic font-semibold text-lg leading-6 text-center text-gray-900 w-[280px]'>Descuentos y beneficios</h3>
                <p className='not-italic font-normal text-sm leading-4 text-center text-gray-900'>Cada dos meses, te regalamos una bolsa de un nuevo origen sospresa, para que lo
                    descubras junto a nosotros.</p>
            </card>
        </div>
    </card>
    </div>
  )
}

export default CardInfo