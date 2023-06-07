import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from "./products.json"
import Product from './Product'
import "./product.scss"
const ProductList = () => {
  return (
   
    <Container>
        <Row className='g-5 mt-5'>
{
data.map((product)=>(<Col key={product.id}>
    <Product {...product}  />
</Col>))
}
        </Row>
    </Container>
  ) 
}
export default ProductList