import React, { useState } from 'react'
import {  Button, Container, Form } from "react-bootstrap";
import axios from "axios"

const Form3 = () => {

    const [form, setForm] = useState({
        firstName:"jhon",
        lastName:"",
        email:"",
        phoneNumber:"",
    })

    const handleSubmit = async(e) => { 
        e.preventDefault();
        console.log(form);
        const dto={ ...form };  //esski refrans yapısından çıkarmak için
        await axios.post("https://ornek.com", dto);
     }
  return (
    <Container>

        <h2>form pratik 1</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text"
                     placeholder="enter your first name"
                     value={form.firstName} 
                     onChange={(e)=> setForm(prev=>({...prev,firstName:e.target.value}))}
                     />
                
            </Form.Group>

            <Form.Group >
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text"
                     placeholder="enter your last name"
                     value={form.lastName} 
                     onChange={(e)=> setForm(prev=>({...prev,lastName:e.target.value}))}
                     />
                
            </Form.Group>

            <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email"
                     placeholder="enter your email"
                     value={form.email} 
                     onChange={(e)=> setForm(prev=>({...prev,email:e.target.value}))}
                     />
                
            </Form.Group>

            <Form.Group >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    type="text"
                     placeholder="enter your PhoneNumber"
                     value={form.phoneNumber} 
                     onChange={(e)=> setForm(prev=>({...prev,phoneNumber:e.target.value}))}
                     />
                
            </Form.Group>

            <Button type='submit'>Send</Button>

        </Form>

    </Container>
  )
}

export default Form3