import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const RandomImage = () => {
  const [random,setRandom]=useState(1)
  let image="";
  if (random<=4) {
    image="arka1.jpg"
      } else if(random<=7){
        image="arka2.jpg"
      }else {
        image="arka3.jpg"
      }

  const handleChange=()=>{
    let rnd=Math.floor(Math.random()*10)
    setRandom(rnd)
  }
  

  return (
    <Card style={{ width: '18rem', textAlign:"center", margin:"5rem auto" }}>
      <Card.Img variant="top" src={require(`../../assets/img/${image}`)} />
      <Card.Body>
        <Card.Title>Random Number:{random}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleChange}>Go somewhere</Button>
      </Card.Body>
    </Card>
    






  )
}

export default RandomImage