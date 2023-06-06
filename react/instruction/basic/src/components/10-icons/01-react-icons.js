import React from 'react'
import { Container } from 'react-bootstrap'
import {GiCarrot,GiSeaTurtle} from "react-icons/gi";
import {FaCat} from "react-icons/fa";

const ReactIcons = () => {
  return (
    <Container>
        <h2>ReactIcons</h2>
        <GiCarrot style={{ fontSize: '100px', color: 'orangered ' }} />
            <GiSeaTurtle style={{ fontSize: '100px', color: 'green' }} />
<FaCat style={{ fontSize: '100px', color: 'blue' }}/>
     </Container>
  )
}

export default ReactIcons