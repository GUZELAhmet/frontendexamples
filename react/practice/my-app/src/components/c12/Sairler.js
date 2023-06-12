import React, { useState } from 'react'
import data from "./data"
import "./sairler.scss"
import { Button, Card } from 'react-bootstrap'

const Sairler = () => {
    
    const [index ,setIndex]=useState(0)
    const  {id,isim,tarih,metin,resim}=data[index]
    const previous = (prev) => {
        if (prev<0)
        prev=data.length-1
        setIndex(prev)
     }
     const next = (nxt) => {
        if (nxt>data.length-1)
        nxt=0
        setIndex(nxt)
     }
     const random = () => {
        let rnd = Math.floor(Math.random() * data.length);
        setIndex(rnd);
      };
  return (
  <Card className='cards' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={resim} />
  <Card.Body >
    <Card.Title>{isim}</Card.Title>
    <Card.Title>{id}</Card.Title>
    <Card.Text>
      {metin}
    </Card.Text>
    <Card.Subtitle>{tarih}</Card.Subtitle>
    <div className='butonlar'>
    <Button variant="danger" onClick={()=>previous(index-1)}>Prev</Button>
    <Button variant="warning" onClick={random}>Random</Button>
    <Button variant="success"onClick={()=>next(index+1)}>Next</Button>
  </div></Card.Body>
</Card>
  )
}

export default Sairler