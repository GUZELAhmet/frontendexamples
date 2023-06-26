import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MenuComp from "./MenuComp";
import axios from "axios";
const Home = () => {
  const [api, setApi] = useState([]);
  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://6488f4b70e2469c038fe89f8.mockapi.io/prodouct"
      );
      const data = response.data;
      setApi(data);
      console.log(api);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <MenuComp />
      <Row>
        {api.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} xl={3}>
            <Card style={{ width: "18rem", height:"400px",textAlign:"center",marginBottom:"3rem" }}>
              <Card.Img variant="top" src={ `${item.avatar}?${item.id}`} style={{height:"200px"}} />
              <Card.Body>
              <Card.Title>{item.id}</Card.Title>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Subtitle>{item.createdAt}</Card.Subtitle>
                <Card.Text>
                  {item.price}
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;