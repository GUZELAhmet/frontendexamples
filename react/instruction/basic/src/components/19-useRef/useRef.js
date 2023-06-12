import { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const UseRef = () => {
    const emailRef = useRef(null);
    const buttonRef = useRef(null);

    const handleFocus = () => {
        console.log(emailRef);
        emailRef.current.focus();
        buttonRef.current.style.backgroundColor = "red";
        console.log(buttonRef.current)
    }

    console.log("render");

    return (
        <Container>
            <Form>
                <Form.Control
                    type='email'
                    placeholder='Mailinizi Girin...'
                    ref={emailRef}
                    className='mb-3'
                />
                <Button ref={buttonRef} type='button' onClick={handleFocus}>
                    SET FOCUS
                </Button>
            </Form>
        </Container>
    )
}
export default UseRef