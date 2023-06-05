import React from 'react'

const Statistics = (props) => {
    return (
        <div>
            <h2>{props.stat}</h2>
            <span>{props.title}</span>
        </div>
    )
}

export default Statistics