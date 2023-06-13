import { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class ClassTurundeComponentler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Techpro Education",
            message: "Hello Developers",
            counter: 0,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("CTC: component guncellendiginde calisir")

        if (prevState.name !== this.state.name) {
            alert("CTC: name state'i degisti");
        }
    }

    componentDidMount() {
        console.log("CTC: component ilk mount edildiginde calisir");
    }

    componentWillUnmount() {
        console.log("CTC: component unmount edildiginde calisir")
    }

    render() {
        console.log("CTC: ilk burasi calisir")
        // console.log(this);
        return (
            <Container>
                <h2>CLASS TURUNDE COMPONENTLER</h2>
                <p>Class turunde componentler, React 16.8 versiyonuna kadar kullanilan ve state yonetimi icin kullanilan componentlerdir.</p>
                <p>{this.state.name}</p>
                <Button onClick={() => this.setState({ name: "techproeducation" })}>ISMI DEGISTIR</Button>
                <br />
                <p>{this.state.counter}</p>
                <Button onClick={() => this.setState(prevState => ({
                    counter: prevState.counter + 1
                }))}>
                    ARTIR
                </Button>
            </Container>
        )
    }
}

export default ClassTurundeComponentler;