import React from 'react'
import { Carousel } from 'react-bootstrap'
import p1 from "../../assets/img/arka1.jpg"
import p2 from "../../assets/img/arka2.jpg"
import p3 from "../../assets/img/arka3.jpg"

const Akis = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>birinci resim</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ikinci resim</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>üçüncü resim</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Akis