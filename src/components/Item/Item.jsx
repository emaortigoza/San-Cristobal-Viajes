import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Item = ({destino}) => {
  return (
    
            <Col className='col-xl-3 col-md-6 col-sm-12 columnas'>
                <Card className='card' key={destino.id}>
                    <Card.Img className='img' variant="top" src={destino.foto} />
                    <Card.Body className='body'>
                        <Card.Title>
                            {destino.name}
                        </Card.Title>
                        <Card.Subtitle>
                            {destino.categoria}
                        </Card.Subtitle>
                        <hr />
                        <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, quo?Lorem ipsum dolor sit amet.
                        </Card.Text>
                        <hr />
                        <Card.Text>
                           $ {destino.price} por tramo
                        </Card.Text> 
                        <div>
                        <Button className='btn btn-outline-danger center'>Ver mas</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
    
  )
}

export default Item
