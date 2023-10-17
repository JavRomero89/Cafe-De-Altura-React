import {React,useContext} from 'react'
import { CartContext } from '../context/CartContext';

function ProductCard({ img, name, price, available, product,quantity}) {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className='flex flex-col p-[1.5em] justify-end items-center gap-[1.5em] rounded-[0.5em] border border-solid border-[#E3DED7] group/card hover:bg-[#f7f5f3]'>
        <img className='w-[13.6em] h-[13.6em]' src={img} alt="" />
        <h4 className='text-[0.9em] font-semibold leading-4'>{name}</h4>
        <p className='text-[0.9em] font-normal'>{price},00 €</p>
        {available 
          ? <button 
          onClick={() => addToCart(product)}
 
              className='bg-[#6a8d7d] p-[0.5em] flex gap-[0.5em] rounded-[4px] items-start font-semibold text-white leading-4 group-hover/card:bg-[#2A5B45]'>
                Añadir
            </button>
          : <div className='cursor-not-allowed '><button className='bg-[#E3DED7] pt-[0.5em] pb-[0.6em] pl-[0.5em] pr-[1em] flex gap-[0.5em] rounded-[4px] items-center justify-center font-semibold text-white leading-4 cursor-not-allowed' disabled>Agotado</button></div>
        }
      </div>
    </div>
  )
}

export default ProductCard