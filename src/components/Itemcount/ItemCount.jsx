import { useCounter } from '../../hook/useCounter'
import './ItemCount.css'

const ItemCount = ({initial =1, stock = 5, onAdd}) => {

    const {counter, handleSumar, handleRestar} = useCounter(initial, 1 , stock)

  return (
    <center>
      <button className='btn-Count' onClick={handleRestar}> - </button> 
        <label className='texto-Counter'>{counter}</label>
      <button className='btn-Count' onClick={handleSumar}> +  </button> 
      <button className='btn-Count-AgregarCarrito' onClick={()=>{onAdd(counter)}}>Agregar paquete</button>
    </center>
  )
}

export default ItemCount
