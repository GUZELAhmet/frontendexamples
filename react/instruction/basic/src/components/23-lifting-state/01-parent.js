import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import Child from './02-child';

const Parent = () => {
    const [counter, setCounter] = useState(0);

   // const handleCounter = (val) => {
   //     setCounter(prev => prev + val);
   // }
    return (
        <Container>
            <div>
                <p>Counter: <span className='text-danger'>{counter}</span></p>
            </div>
            <Child setCounter={setCounter} />
        </Container>
    )
}
export default Parent