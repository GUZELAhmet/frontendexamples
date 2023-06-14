import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap';

const Fetch = () => {
    const [users, setUsers] = useState([]);

    const getMyUserData = async () => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => {
        //         users = data
        //         console.log(data);
        //     })
        //     .catch(error => console.log(error));

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };
    
    const myObject = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, [])

    console.log(Object.keys(users));

    return (
        <Container>
            <h2>Fetch</h2>
            <ListGroup>
                {
                    users.length > 0 && users.map((user, index) => {
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

export default Fetch;