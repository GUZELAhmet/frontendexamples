import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap';

const Fetch1 = () => {
    const [users, setUsers] = useState({});


    let myArray = [];
    let myObject = {
        name: 'John',
        age: 30,
    };
    
    // console.log(myArray.length)
    // console.log(Object.keys(myObject).length > 0);
    
    const getMyUserData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                // console.log(data);
            })
            .catch(error => console.log(error));
    }, [])
    
    
    return (
        <Container>
            <h2>Fetch</h2>
            <ListGroup>
                {
                    Object.keys(users).length > 0 && users.map((user, index) => {
                        return (
                            <ListGroup.Item key={index}>
                                {user.name}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            <h2>HELLO</h2>
        </Container>
    )
}

export default Fetch1;