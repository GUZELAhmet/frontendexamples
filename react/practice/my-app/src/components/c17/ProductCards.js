import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCards = (props) => {
    const {avatar, createdAt,id,price,productName}=props
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Subtitle>{id}</Card.Subtitle>
      <Card.Title>{productName}</Card.Title>
      <Card.Title>{createdAt}</Card.Title>
      <Card.Text>
        {price}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCards