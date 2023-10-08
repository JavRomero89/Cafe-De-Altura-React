import React from "react";
import Cafe_mano from "../assets/Cafe_mano.png"
import Boton from "../components/Boton"
import { Link } from "react-router-dom";


const Wrapper = () => {
  return (
    <div className="h-[486px] flex flex-row justify-center py-10 px-10 gap-6">
      <section className="flex flex-col items-start gap-[1em] w-[36.75em]">
        <h3 className="text-[1.1em] not-italic font-semibold  text-[#2A5B45]">
          De la planta a tu taza
        </h3>
        <h1 className="text-[2.5em] not-italic font-semibold  text-[#000000]">
          El mejor café del mundo, ahora en tu casa.
        </h1>
        <p className="text-[#111827] text-[0.87em] not-italic font-normal ">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comodidad de tu
          hogar.
        </p>
        <div className="flex items-start gap-[1em]">

       <Boton style={"flex justify-center items-center  rounded bg-[#1F1815] text-[0.9em] not-italic font-semibold  text-white w-[10.5em] h-[2.5em] cursor-pointer"} text={'Descubrir Origenes'}></Boton>     
       <Link to={'/Tienda'}><button className="flex justify-center items-center w-[8.5em] h-[2.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold  text-white">Comprar café</button></Link>
        </div>
      </section>
      <section>
        <img src={Cafe_mano} alt="" className="h-[24.4em] rounded-[1.25em]"/>
      </section>
    </div>
  );
};

export default Wrapper;