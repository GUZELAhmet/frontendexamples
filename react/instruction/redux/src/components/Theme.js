import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/theme/themeSlice';

const Theme = () => {
    const themeState = useSelector(state => state.theme);
    const theme = themeState.theme;
    const dispatch = useDispatch();

    const oppositeTheme = theme === "light" ? "dark" : "light"

    return (
        <>
            <Button className='text-uppercase'
                variant={`${oppositeTheme}`}
                onClick={() => dispatch(toggleTheme())}
            >
                {oppositeTheme}
            </Button>
        </>


    )
}

export default Theme