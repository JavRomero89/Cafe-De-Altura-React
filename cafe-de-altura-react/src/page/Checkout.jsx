import React from 'react'

import DeliveryAddress from '../components/DeliveryAddress'


const Checkout = () => {
  return (
    <div>

      <h2 className='text-green-800 text-2xl not-italic font-medium leading-7 flex flex-col items-center self-stretch gap-[24px] p-10'>Checkout</h2>

      <DeliveryAddress />

    </div>
  )
}

export default Checkout