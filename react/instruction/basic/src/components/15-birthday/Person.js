import React from 'react'
import { Card } from 'react-bootstrap';
import { Delete } from "@mui/icons-material";

const Person = (props) => {
    return (
        <Card className='my-3' style={{ width: "200px" }}>
            <Card.Img src={require(`../../assets/img/${props.image}`)} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>Yas: {props.age}</Card.Text>
                <Delete style={{ cursor: "pointer" }}
                    onClick={() => props.deletePerson(props.id)}
                />
            </Card.Body>
        </Card>
    )
}

export default Person