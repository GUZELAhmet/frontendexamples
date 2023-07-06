import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/counter/counterSlice';

const Counter = () => {
    const counterState = useSelector(state => state.counter);
 
    const dispatch = useDispatch();
   console.log(counterState);
    return (
        <Container>
            <h2>COUNTER</h2>
            <ButtonGroup>
                <Button variant="primary" onClick={()=> dispatch(increment())}>+</Button>
                <Button variant="secondary" disabled>
                    {counterState.counter}
                </Button>
                <Button variant="success" onClick={()=> dispatch(decrement())}>-</Button>
                <Button variant="danger" onClick={()=> dispatch(reset())}>Reset</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Counter