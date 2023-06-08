import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = (props) => {
    const addToCard = () => { alert(`${props.title} sepete eklendi!`) };
    const productImage = require(`../../assets/img/${props.image}`)

    return (
        <Card className='h-100' style={{ width: "300px" }}>
            <Card.Img variant='top' src={productImage} />
            <Card.Body className='d-flex flex-column text-center'>
                <Card.Title className='fs-2'>{props.title}</Card.Title>
                <Card.Subtitle>
                    {props.desc}
                </Card.Subtitle>
                <Card.Text className='fs-3 text-info'>
                    ${props.price}
                </Card.Text>
                <Button variant='warning' onClick={addToCard}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard