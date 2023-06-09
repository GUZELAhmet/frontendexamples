import React, { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';

const Counter1 = () => {
    const [counter, setCounter] = useState(0);


    return (
        <Container>
            <h2>Counter 1</h2>
            <ButtonGroup>
                <Button
                    variant='danger'
                    onClick={() => setCounter((prev) => prev + 1)}
                >
                    +
                </Button>
                <Button variant='secondary' disabled>{counter}</Button>
                <Button
                    variant='success'
                    onClick={() => setCounter((prev) => prev - 1)}
                >
                    -
                </Button>
                <Button variant='info' onClick={() => setCounter(0)}>Sifirla</Button>
            </ButtonGroup>
        </Container>
    )
};

export default Counter1;