import React from 'react'
import { Button } from "react-bootstrap";
const Child = (props) => {
 // const increaseCounter = () => {
    //     props.handleCounter(1)
    // }

    const increaseCounter = () => {
        props.setCounter(prev => prev + 1)
    }

    console.log('ChildComponent rendered')

    // TODO: dogrudan setter'i ver onclick'e

    return (
        <div>
            <h2>ÇİFT YÖNLÜ VERİ AKTARIMI</h2>
            <Button
                variant='outline-success'
                onClick={increaseCounter}
            >
                Arttir
            </Button>
        </div>
    )
}

export default Child