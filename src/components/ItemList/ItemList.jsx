import React, { memo } from 'react'
import { Container, Row } from 'react-bootstrap'
import Item from '../Item/Item'
import Filter from '../Filter/Filter'


const ItemList = memo(({destinos}) => {
  
  return (
    <Container fluid className='container'>
       
      <Row className='mt-5 catalogo'>
          {destinos.map(destino => <Item key={destino.id} destino = {destino}/>)}
      </Row>
    </Container>
       
    
  )
})

export default ItemList
 