import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from "../Loading/Loading"


const ItemDetailContainer = () => {
  const[destino, setDestino] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { pid } = useParams()


useEffect(()=>{
  const dbFirestore = getFirestore()
  const queryDoc = doc(dbFirestore, 'destinos', pid)

getDoc(queryDoc)
  .then(respuesta => setDestino({id: respuesta.id, ...respuesta.data() }))
  .catch(err => console.log(err))
  .finally(()=> setIsLoading(false))
},[])

console.log(destino)
  return (
    <div>


      {isLoading ? <Loading/> :  <ItemDetail  destino={destino}/> }



      
    </div>
  )
}

export default ItemDetailContainer
