import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const FonksiyonTurundeCompenentler = () => {
    const [name, setName] = useState("Techpro Education");
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        console.log("FTC: component ilk mount edildiginde calisir");

        return () => {
            console.log("FTC: component unmount edildiginde calisir");
        }
    }, []);

    useEffect(() => {
        console.log("FTC: component guncellendiginde calisir");
    })

    useEffect(() => {
        console.log("FTC: name state'i degisti");
    }, [name])

    console.log("FTC: ilk burasi calisir");

    return (
        <Container>
            <h2>FONKSIYON TURUNDE COMPONENTLER</h2>
            <p>Fonksiyon turunde componentler, React 16.8 versiyonundan sonra kullanilan ve state yonetimi icin kullanilan componentlerdir.</p>
            <p>{name}</p>
            <Button onClick={() => setName("techproeducation")}>ISMI DEGISTIR</Button>
            <p>{counter}</p>
            <Button onClick={() => setCounter(prevValue => prevValue + 1)}>
                ARTIR
            </Button>
        </Container>
    )
}

export default FonksiyonTurundeCompenentler