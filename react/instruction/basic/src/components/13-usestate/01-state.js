import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';


const State = () => {
    const [mode, setMode] = useState("light");
   

    let classNames="bg-dark text-light p-5";

    if (mode === "light") {
        classNames="bg-light text-dark p-5"
        
    }


    
    return (
        <Container className={classNames}>
            <h1>Dark/Light Mode</h1>
            <ButtonGroup>

                <Button 
                variant='secondary' 
                onClick={()=>setMode("dark")}
                >Dark Mode</Button>

                <Button variant='info'
                onClick={()=>setMode("light")}
                >Light Mode</Button>
                
            </ButtonGroup>
        </Container>
    )
};

export default State;