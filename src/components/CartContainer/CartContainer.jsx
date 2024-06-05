import { useCartContext } from "../../context/CartContext"


const CartContainer = () => {
  const{cartList, vaciarCarrito} = useCartContext()

  return (
    <div>
      {cartList.map(destino =>(
        <div className="w-50">
          <img className="w-25" src={destino.foto} alt="Imagen"/>
          <label> Precio {destino.price}---Cantidad de pasajeros: {destino.cantidad}</label>
        </div>
      ))}
      <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer
