import {React,useContext,useEffect,useState} from 'react'
import { CoffeeContextProvider } from '../context/Context'
import Boton from './Boton'

const SectionStore = () => {
    const { products, setProducts } = useContext(CoffeeContextProvider);

    const handleClick = () => {

    };
  return (
    <>
            <div className="flex flex-col  p-4 gap-10">
                <h2 className="flex  justify-center text-[rgb(42,91,69)] font-medium text-xl leading-7 ">Últimos orígenes</h2>
                <div className="flex flex-wrap justify-center gap-6 p-6">
                    {products?.map((coffee, i) => {
                        return (
                            <div className='flex p-6  border border-gray-light rounded-lg
                            transition-all duration-300 hover:bg-[#e3ded7]'
                                key={i}>
                                <div className='flex flex-col items-center gap-6'>
                                    <img className='' src={coffee.img_url} />
                                    <div className='flex flex-col items-center gap-3'>
                                        <p className='font-semibold text-sm leading-4 text-slate-950 '>{coffee.brand}</p>
                                        <p className='flex w-[54px] h-[24px] text-slate-950'>{coffee.price},00 €</p>
                                    </div>

                                    <Boton
                                        className={'bg-[#2a5b45b2] rounded-sm p-2 border-none text-slate-50 hover:bg-[#2a5b45] hover:text-[#fff] '}
                                        label={'Añadir'}
                                        handleClick={handleClick}
                                    />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default SectionStore