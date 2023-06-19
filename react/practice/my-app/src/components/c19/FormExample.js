import React, { useState } from 'react'
import {Button, Container, Form, Spinner} from "react-bootstrap"

const FormExample = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        web:""
    })

    const [loading, setLoading] = useState(false)
    const handleFormData = (e) => { 
     
      const {name,value}=e.target
     
      setFormData({
      ...formData,
        [name]:value
      })


     }
     const handleSubmit = (e) => { 
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          alert("data gönderildi")
         
        }, 3000)
       
      }

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter First Name" 
        name='firstName' 
        value={formData.firstName}
        onChange={handleFormData}
        minLength={3}
        maxLength={15}
        required
        />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="lastname" 
        name='lastName'
        value={formData.lastName}
        onChange={handleFormData}
        required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type="text"
         placeholder="Enter your phone"
         name='phone' 
         value={formData.phone}
         onChange={handleFormData}
         required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
         type="email" 
         placeholder="Email" 
         name='email'
         value={formData.email}
         onChange={handleFormData}
         required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Web Adress</Form.Label>
        <Form.Control 
        type="web" 
        placeholder="your web Adress" 
        name='web'
        value={formData.web}
        onChange={handleFormData}
        required/>
      </Form.Group>
      
      <Button variant="success" type="submit"
      disable={loading}>
       {loading &&  <Spinner animation='grow' />} Submit
      </Button>
      <Button type='reset'>reset</Button>
    </Form>

    </Container>
  )
}

export default FormExample