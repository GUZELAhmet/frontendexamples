import React from 'react'

const Country = (props) => {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>
                <img src={props.flag} alt={props.name} title={props.name} width={70} />
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.population}
            </td>
            <td>
                {props.capital}
            </td>
            <td>
                $
            </td>
        </tr>
    )
}
export default Country;