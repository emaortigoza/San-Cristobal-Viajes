import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BannerServicios from '../BannerServicios/BannerServicios'
import './ItemListContainer.css'
import { mFectch } from '../../utils/mFetch'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import Filter from '../Filter/Filter'


const ItemListContainer = (props) => {
  const [destinos, setDestinos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    mFectch()
    .then(resultado =>{
      setDestinos(resultado)
    })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
  },[])
  
  const handleProductFiltered = ({filterState, handleFilterChange}) =>{
    <div>
      <h2>Buscar Destino</h2>
      {filterState}
      <input type='text' value={filterState} onChange={handleFilterChange}/>
    </div>
  }

  return (
    
    <>
    <Filter>
        {handleProductFiltered}
      </Filter>
     <h3 className="catalogo__header">Descubrí nuestras ofertas en los mejores destinos.</h3>
      
            
              {loading ? <Loading/>  : <ItemList destinos = {destinos}/>}
            
           
      <BannerServicios/>
      {props.children}
    </>
    
  
  )
}

export default ItemListContainer