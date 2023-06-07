import React from "react";
import { Button, Card } from "react-bootstrap";
const Product = (props) => {
  const { image, desc, title, price } = props;
  const addToCart = () => { 
    alert("This item added to cart")
   }
  return (
    <Card className="class"  style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`./img/${image}`)} />
      <Card.Body className="text-center d-flex flex-column justify-content-between
      align-items-center ">
        <Card.Title className="fs-3">{title}</Card.Title>
        <Card.Subtitle > {desc} </Card.Subtitle>
        <Card.Text  className="fs-2 mt-2"> ${price}</Card.Text>
        <Button variant="primary" onClick={addToCart}>Buy Me</Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
