import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerServicios from '../BannerServicios/BannerServicios'
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  return (
    
    <>
      <Container  className='hero'>
        <Row>
         <Col>
            <h3 className="catalogo__header">Descubrí nuestras ofertas en los mejores destinos.</h3>
         </Col>
        </Row>
      </Container>
      <BannerServicios/>
    </>
    
  
  )
}

export default ItemListContainer