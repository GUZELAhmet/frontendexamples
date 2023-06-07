import React from 'react'
import data from "./Students.json"
import {Container ,Row,Col} from 'react-bootstrap';
import Cards from './Cards';


const StudentCard = () => {
  return (
    <Container>

        <Row className='mb-3'>
            {data.map((student,index)=>(
                <Col key={index} md={6} lg={3} xl={2}><Cards student={student}/>               </Col>
            ))}




        </Row>


    </Container>
  )
}

export default StudentCard