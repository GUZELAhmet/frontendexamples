 import React from 'react'

 import { Col, Row, Alert, Container , Button} from 'react-bootstrap'


 
 const BootstrapModernYontem = () => {
   return (
    <Container>
        <h2>BootstrapModernYontem  </h2>
            <Alert variant='danger'>Uyari mesajı</Alert>
            <Row className='textCenter'>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>4</Col>
                <Col>5</Col>
            </Row>
            <Button variant='outline-danger'>bootstrap botun</Button>
            
            </Container>
    
   )
 }
 
 export default BootstrapModernYontem