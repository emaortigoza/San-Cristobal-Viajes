import {  useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../Itemcount/ItemCount"
import { Form, Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import './ItemDetail.css'


const ItemDetail = ({destino}) => {

  const [isCant, setIsCant] = useState(false)

  const {addToCart, cartList} = useCartContext()

  const onAdd = (cantidad)=>{

    addToCart({...destino, cantidad})

    setIsCant(true)

  }
 console.log(destino)
  return (
    <div className="contenedorDetail">
      <div className="row">
        <div className="col col-md-6 col-sm-12">
          <img src={destino.foto} className="img" alt="" />
        </div>

        <div className="columnaInfo col-md-6 col-sm-12">
          <div className="infoDetail">
            <h3>{destino.name} </h3>
            <h4>{destino.categoria}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia repellendus perferendis sint voluptatibus velit?</p>
            <h4>A tan solo ${destino.price} por persona</h4>
          </div>
          

          <div className="countDetail">
            <p>Selecciona la cantidad de pasajeros
              
            </p>
            {
            !isCant ? <ItemCount onAdd={onAdd}/> : 
            <>
              <Link to= {'/cart'} className='btn btn-outline-danger'>Terminar compra</Link>
              <Link to={'/'} className='btn btn-outline-danger'>Seguir comprando</Link>
            </>
          }
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
