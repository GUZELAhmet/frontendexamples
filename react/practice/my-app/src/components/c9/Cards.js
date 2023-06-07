import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./card.scss"

const Cards = ({student}) => {

    const {isim, yas,kurs,img}=student
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}  style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>{isim}</Card.Title>
        <Card.Title>{yas}</Card.Title>
        <Card.Text>
       {kurs}
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  )
}

export default Cards