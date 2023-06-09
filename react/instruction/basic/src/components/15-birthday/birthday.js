import React, { useState } from 'react'
import { Button,  Container } from 'react-bootstrap';
import peopleData from "../../assets/data/people.json"
import Person from './Person';


const BirthDay = () => {
    const [people,setPeople]=useState(peopleData)
  return (
    <Container>
        <h2> Bu Gün Doğanlar</h2>
        <p>Bugün Doğan *** insan var</p>
        {
            people.map((person)=>(<Person/>))
        }



       < Button variant="danger">
       
       </Button  >
        
       </Container>
  )
}

export default BirthDay