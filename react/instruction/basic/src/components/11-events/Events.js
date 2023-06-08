import React from 'react'
import {  Button, Container } from 'react-bootstrap'

const Events = () => {
    const parametresizFonksiyon=()=>{
 alert ("Parametresiz fonksiyon tetiklendi")
    };

    const parametreliFonksiyon=(parametre)=>{
 alert(`parametreli fonksiyon tetiklendi Parametre:  ${parametre}`)
    };
  return (

    <Container className='d-flex gap-3'>
       
        <h2>Events</h2>
        <Button variant='danger' onClick={parametresizFonksiyon}>Parametresiz</Button>
        <Button variant='warning' onClick={()=>parametreliFonksiyon("Merhaba")}>Parametreli</Button>
                
        
        </Container>
  )
}

export default Events