import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mFectch } from "../../utils/mFetch"
import Loading from "../Loading/Loading"


const ItemDetailContainer = () => {
const[destino, setDestino] = useState({})
const [isLoading, setIsLoading] = useState(true)
const { pid } = useParams()

useEffect(()=>{

  mFectch(pid)
  .then(resp => setDestino(resp))
  .catch(err => console.log(err))
  .finally(()=> setIsLoading(false))

},[])


console.log(pid)
  return (
    <div>


      {isLoading ? <Loading/> :  <ItemDetail  destino={destino}/> }



      
    </div>
  )
}

export default ItemDetailContainer
