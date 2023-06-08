import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from './product-card'
import products from "../../assets/data/products.json"


const ProductList = () => {
  return (
    <Container>
        <Row>

            {products.map((product)=>(
            
            <Col key={product.id} md={6} lg={5} xl={4}>
                <ProductCard {...product}/>
            </Col>))}
            
        </Row>
    </Container>
  )
}

export default ProductList