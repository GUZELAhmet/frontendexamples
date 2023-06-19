import React from 'react'
import { Button } from 'react-bootstrap'

const Card = (props) => {
    const [craatedAt, productName, id, avatar ,price ]=props;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title> {productName}</Card.Title>
      <Card.Title> {price}</Card.Title>
      <Card.Text>
        {craatedAt}
      </Card.Text>
     
    </Card.Body>
  </Card>
  )
}

export default Card