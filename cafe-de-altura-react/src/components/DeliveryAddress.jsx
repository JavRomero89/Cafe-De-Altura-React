import React from 'react';
import { useForm } from 'react-hook-form';

function DeliveryAddress() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>(data);
  
  
  return (
    <form className='flex flex-col 'onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombres" {...register("Nombres", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Apellidos" {...register("Apellidos", {required: true, maxLength: 100})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <select {...register("Pais", { required: true })}>
        <option value="España">España</option>
        <option value="Peru">Peru</option>
        <option value="Colombia">Colombia</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Afganistan">Afganistan</option>
        <option value="Andorra">Andorra</option>
        <option value="Otro">Otro</option>
      </select>
      <input type="tel" placeholder="Telefono" {...register("Telefono", {})} />
      <input type="text" placeholder="Poblacion" {...register("Poblacion", {required: true})} />
      <input type="number" placeholder="CP" {...register("CP", {})} />
      <input type="text" placeholder="Calle" {...register("Calle", {})} />
      <input type="text" placeholder="Numero" {...register("Numero", {})} />
      <input type="text" placeholder="Piso" {...register("Piso", {})} />
      <input type="text" placeholder="Puerta" {...register("Puerta", {})} />

      <input type="submit" />
    </form>
  );
}

export default DeliveryAddress