import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'

const CartContainer = () => {
  const{cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()



  return (
    <div className="container-fluid contenedorCart">
      {
        cartList.length !== 0 ? 
        <>
        
          {cartList.map(destino =>(
                <div className="w-50 contenedorDestinos">
                  <img className="w-25" src={destino.foto} alt="Imagen"/>
                  <label> Precio ${destino.price}      Cantidad de pasajeros: {destino.cantidad}</label>
                  <button onClick={() =>eliminarProducto(destino.id)} className="btn btn-danger">x</button>
                </div>

              ))}  
          
            <h3>Precio total de los pasajes: $ {precioTotal()}</h3>

             <div>
                <div className="botonera">
                  <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
                  <Link to= {'/pagos'} className='btn btn-outline-danger'>Pagar</Link>
                </div>
              </div>
          </>
          :
           <div className="cartVacio">
              <h2>No hay paquetes en el carrito</h2>
              <Link className="center" to= '/'>Primero busca tu destino</Link>
           </div>
          }
    </div>
  )
}

export default CartContainer
