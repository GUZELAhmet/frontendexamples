import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Tour = ({ id, name, info, image, price,removeById }) => {
    const [readMore, setReadMore] = useState(false)
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{price}</Card.Subtitle>
          <Card.Text>{readMore ? info :`${info.substring(0,150)}...` }</Card.Text>
          <div className="butonlar">
            <Button variant="primary" onClick={setReadMore((prev=>!prev))}>
                {readMore? "Show Less ": "Read More"}</Button>
            <Button variant="danger" onClick={()=>removeById(id)}>Not Interested</Button>
          </div>
        </Card.Body>
      </Card>
    );
  };

export default Tour