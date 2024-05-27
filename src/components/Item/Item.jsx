import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const Item = ({destino}) => {
  return (
    <Col className='col-xl-3 col-md-6 col-sm-12 columnas'>
        <Card key={destino.id}>
            <Card.Img  src={destino.foto} className='img' />
                <Card.Body>
                    <Card.Title>{destino.name}</Card.Title>
                    <Card.Text>
                        {destino.categoria}
                        <hr />
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Text>${destino.price}</Card.Text>
                    <Card.Text>Asientos disponibles: {destino.stock}</Card.Text>
                        <hr />
                    <Button variant="primary">Ver mas...</Button>
                </Card.Body>
        </Card>
    </Col>
  )
}

export default Item
