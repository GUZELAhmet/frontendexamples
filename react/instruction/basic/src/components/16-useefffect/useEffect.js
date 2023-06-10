import { useEffect, useState } from 'react';
import { Alert, Button, ButtonGroup, Container } from "react-bootstrap";

const UseEffect = () => {
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        console.log("MOUNTING: sadece sayfam ilk render edildiginde calisir1");

        const timer = setInterval(() => {
            console.log("timer calisti");
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    useEffect(() => {
        console.log("MOUNTING: sadece sayfam ilk render edildiginde calisir2");
    }, [])

    useEffect(() => {
        console.log("UPDATING: sayfam ilk renderda ve her render edildiginde calisir")
        return () => {
            console.log("UNMOUNTING: sayfam sadece unmount edilirken calisir");
        }
    });

    useEffect(() => {
        console.log("UPDATING: sayfam ilk render edildiginde ve message state'i degistiginde calisir");
    }, [message, counter]);


    console.log("useEffect'lerden once calisir");

    return (
        <Container>
            <h2>useEffect Hook'u</h2>
            <Alert>
                {message} — { }
            </Alert>
            <ButtonGroup>
                <Button variant='success' onClick={() => setMessage("Error")}>
                    Set Message
                </Button>
                <Button variant='danger'>
                    Throw Error
                </Button>
                <Button onClick={() => setCounter((prev) => prev + 1)}>
                    {counter}
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default UseEffect