import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BannerServicios from '../BannerServicios/BannerServicios'
import './ItemListContainer.css'
import { mFectch } from '../../utils/mFetch'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'


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
  
  console.log(destinos)
  return (
    
    <>
      <Container  className='hero'>
            <h3 className="catalogo__header">Descubrí nuestras ofertas en los mejores destinos.</h3>
           
              
                {loading ? <Loading/>  : <ItemList destinos = {destinos}/>}
              
              

      </Container>
      <BannerServicios/>
      {props.children}
    </>
    
  
  )
}

export default ItemListContainer