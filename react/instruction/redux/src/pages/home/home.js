import React from 'react'
import Counter from '../../components/Counter'
import Theme from '../../components/Theme'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Content from '../../components/Content'
import Localization from '../../components/Localization'

const Home = () => {
    const themeState = useSelector(state => state.theme);
    const theme = themeState.theme;

    const oppositeTheme = theme === "light" ? "dark" : "light";

    return (
        <Container fluid className={`bg-${theme} text-${oppositeTheme} h-100 p-3`}>
            <Theme />
            <Counter />
            <Localization/>
            <Content />
        </Container>
    )
}

export default Home