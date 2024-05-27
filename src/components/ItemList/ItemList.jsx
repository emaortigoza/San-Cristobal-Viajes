import React from 'react'
import { Row } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({destinos}) => {
  return (
    <Row>
        {destinos.map(destino => <Item key={destino.id} destino = {destino}/>)}
    </Row>
  )
}

export default ItemList
 