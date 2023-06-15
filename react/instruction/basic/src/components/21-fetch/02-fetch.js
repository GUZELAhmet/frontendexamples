import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import UserCard from './02-user-card';

// const myObject = {
//     avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/992.jpg",
//     country: "Hungary",
//     email: "Rossie_Jacobs74@hotmail.com",
//     firstName: "Adam",
//     id: "1",
//     lastName: "Ratke"
// }

const Fetch2 = () => {
    const [users, setUsers] = useState([]);
    const [flag, setFlag] = useState(false);

    // TODO: API'yi env'de sakla
    
    
    const updateUser = (userId, payload) => {
        fetch(`https://632c6c535568d3cad8855dec.mockapi.io/api/v1/users/${userId}`, payload, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
        })
        setFlag(prev => !prev);
    }

    const userInfo = {
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1068.jpg",
        country: "British Indian Ocean Territory (Chagos Archipelago)",
        email: "allangislason@gmail.com",
        firstName: "Double",
        id: "10",
        lastName: "Iskender"
    }

    // load user data
    const loadUserData = () => {
        fetch('https://632c6c535568d3cad8855dec.mockapi.io/api/v1/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error.message));
    }

    console.log(users)

    useEffect(() => {
        loadUserData();
    }, [flag]);
    
    return (
        <Container>
            <Row className='gap-1 mb-3'>
                {
                    users?.map((user) => (<UserCard key={user.id} {...user} />))
                }
            </Row>
            <Button onClick={() => updateUser(10, JSON.stringify(userInfo))}>
                UPDATE USER
            </Button>
        </Container>
    )
}
export default Fetch2;