import React, { useState } from 'react'
import {Container, Form, FormGroup, ListGroup} from "react-bootstrap";
import studentData from "../../assets/data/students.json"

const FilterList = () => {
    const [search ,setSearch]=useState("");
    const filteredstudents=search==="" ?
    studentData :
    studentData.filter((student)=> 
    student.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  return (
   <Container>
<Form>

    <FormGroup>
        <Form.Label>İsme göre listele</Form.Label>
        <Form.Control type='"text'
        placeholder='"ara..'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </FormGroup>
    <ListGroup>
        {
            filteredstudents.map((student)=>(
                <ListGroup.Item key={student.id} className='d-flex text-center'>
                    <p className='col-8 text-start m-0'>{student.name}</p>
                    <p className='col-2 m-0'>{student.age}</p>
                    <p className='col-2 m-0'>{student.grade}</p>
                </ListGroup.Item>
            ))
        }
    </ListGroup>
    

</Form>
   </Container>
  )
}

export default FilterList