import React, { useEffect, useState } from 'react'
import { mFectch } from '../../utils/mFetch'
import BannerServicios from '../BannerServicios/BannerServicios'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import BannerPrincipal from '../BannerPrincipal/BannerPrincipal'
import Contacto from '../Contacto/Contacto'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'





const ItemListContainer = (props) => {

  const [destinos, setDestinos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoria} = useParams()

  useEffect(()=>{
      if (!categoria) {
        mFectch()
      .then(resultado =>{
        setDestinos(resultado)
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    }else{
      mFectch()
      .then(resultado =>{
        setDestinos(resultado.filter(destino => destino.categoria === categoria ))
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    }
    
  },[categoria])

  
  console.log(categoria)
  
  return (
    
    <>
    
     <BannerPrincipal/>
   
    
     <h3 className="catalogo__header">Descubrí nuestras ofertas en los mejores destinos.</h3>
      
            
              {loading ? <Loading/>  : <ItemList destinos = {destinos}/>}
            
           
      <BannerServicios/>
      <Contacto/>
      
    </>
    
  
  )
}

export default ItemListContainer