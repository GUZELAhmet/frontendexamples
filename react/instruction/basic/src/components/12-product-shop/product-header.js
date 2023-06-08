import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const ProductHeader = () => {
    
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Technoshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">AnaSayfa</Nav.Link>
            <Nav.Link href="#action2">Hakkımızda</Nav.Link>
            <Nav.Link href="#action3">Ürünler</Nav.Link>
            <Nav.Link href="#action4">İletişim</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default ProductHeader