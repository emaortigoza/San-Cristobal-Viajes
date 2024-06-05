import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CardWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <>
        {cantidadTotal() !== 0 && cantidadTotal()}✈
    </>
  )
}

export default CardWidget