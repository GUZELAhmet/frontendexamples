import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Col, Container, Row} from "react-bootstrap"
import Card from './Card'
 
const Home = () => {
const [data, setData] = useState([])
const [loading , setLoading ] = useState(true)

const getData = async() => { 
  try {
    const response= await axios.get("https://632c6c535568d3cad8855dec.mockapi.io/api/v1/product")
    const data=response.data;
    setData(data);
    setLoading(false);
    
  } catch (error) {
    console.log(error)
  }

 
}
useEffect(() => {
  getData();
  

  return () => {
  }
}, [])



  return (
    <Container>
      <Row>
        {
          data.map((item, index) => (
            <Col key={index} lg={4} md={4} sm={4} xs={2}>
              <Card { ...item} /> {" "}
            </Col>
          ))
        }
      </Row>

    </Container>
  )
}

export default Home