import React from 'react';
import { useForm } from 'react-hook-form';

function DeliveryAddress() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => (data);


  return (
    <div className="flex flex-col gap-[1.5em]">
      <h1 className="text-[1.1em] not-italic font-semibold">
        Dirección de envío
      </h1>
      <form className="w-[33em] flex flex-col gap-[0.5em]" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-[0.75em] not-italic font-normal" htmlFor="nombre">Nombre<input type="text" placeholder="Nombres" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] " {...register("Nombres", { required: true, maxLength: 80 })} />
        </label>

        <label className="text-[0.75em] not-italic font-normal" htmlFor="apellidos">
          Apellidos
          <input
            type="text"
            placeholder="Apellidos"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Apellidos", { required: true, maxLength: 100 })}
          />
        </label>
        <label className="text-[0.75em] not-italic font-normal" htmlFor="email">
          Email
          <input
            type="email"
            placeholder="Email"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </label>

        <label className="text-[0.75em] not-italic font-normal" htmlFor="Pais">
          País
          <select
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Pais", { required: true })}
          >
            <option value="España">España</option>
            <option value="Perú">Perú</option>
            <option value="Colombia">Colombia</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Afganistán">Afganistán</option>
            <option value="Andorra">Andorra</option>
            <option value="Otro">Otro</option>
          </select>
        </label>


        <label className="text-[0.75em] not-italic font-normal" htmlFor="telefono">
          Telefono
          <input
            type="tel"
            placeholder="Telefono"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Telefono", {})}
          />
        </label>
        <div className="flex items-start gap-[1.5em]">
          <label className="text-[0.75em] not-italic font-normal" htmlFor="poblacion">
            Poblacion
            <input
              type="text"
              placeholder="Poblacion"
              className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
              {...register("Poblacion", { required: true })}
            />
          </label>

          <label className="text-[0.75em] not-italic font-normal" htmlFor="cp">
            CP
            <input
              type="number"
              placeholder="CP"
              className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
              {...register("CP", {})}
            />
          </label>
        </div>
        <div className="flex items-start gap-[1.5em]">
        <label className="text-[0.75em] not-italic font-normal" htmlFor="calle">
          Calle
          <input
            type="text"
            placeholder="Calle"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Calle", {})}
          />
        </label>

        <label className="text-[0.75em] not-italic font-normal" htmlFor="numero">
          Numero
          <input
            type="text"
            placeholder="Numero"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Numero", {})}
          />
        </label>

        <label className="text-[0.75em] not-italic font-normal" htmlFor="piso">
          Piso
          <input
            type="text"
            placeholder="Piso"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Piso", {})}
          />
        </label>

        <label className="text-[0.75em] not-italic font-normal" htmlFor="puerta">
          Puerta
          <input
            type="text"
            placeholder="Puerta"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
            {...register("Puerta", {})}
          />
        </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default DeliveryAddress