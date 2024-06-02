import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Item from '../Item/Item'
import Filter from '../Filter/Filter'


const ItemList = ({destinos}) => {
  const handleDestinoFiltrado = ({filterState, handleFilterChange}) => {
    <div>
      <h2>Buscar Destino</h2>
      {filterState}
      <input type="text" value={filterState} onChange={handleFilterChange} />

    </div>
  }
  return (
    <Container fluid className='container'>
       
      <Row className='mt-5 catalogo'>
        <Filter>
        {handleDestinoFiltrado}
      </Filter>
          {destinos.map(destino => <Item key={destino.id} destino = {destino}/>)}
      </Row>
    </Container>
       
    
  )
}

export default ItemList
 