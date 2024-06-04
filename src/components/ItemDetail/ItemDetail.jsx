import { useState } from "react"
import ItemCount from "../Itemcount/ItemCount"
import { Form, Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import './ItemDetail.css'


const ItemDetail = ({destino}) => {
  const [isCant, setIsCant] = useState(false)
  const onAdd = (cantidad)=>{
    console.log('cantidad seleccionada: ', cantidad)
    setIsCant(true)
  }
  return (
    <div className="contenedorDetail">
      <div className="row">
        <div className="col">
          <img src={destino.foto} className="img" alt="" />
          
        </div>
        <div className="col">
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
            </>
          }
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
