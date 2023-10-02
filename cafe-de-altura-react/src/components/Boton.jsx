import React from 'react'

const Boton = ({style,text,img}) => {
  return (
    <div  className={style} ><img src={img}/>{text}</div>
  )
}

export default Boton