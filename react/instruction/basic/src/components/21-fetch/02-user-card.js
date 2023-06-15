import React from 'react'
import { Card } from 'react-bootstrap'


const UserCard = (props) => {
  return (
    <Card style={{width:"300px"}}>
        <Card.Img variant='top' src={props.avatar}/>
        <Card.Body>
            <Card.Title>{props.firstName} {props.lastName}</Card.Title>
            <Card.Subtitle> {props.email}  </Card.Subtitle>
        </Card.Body>

    </Card>
  )
}

export default UserCard;