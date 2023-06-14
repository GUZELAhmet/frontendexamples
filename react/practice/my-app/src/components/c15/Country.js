import React from 'react'
import { Button } from 'react-bootstrap'
const Country = ({flags,name,capital,population,ccn3,index,removeByCcn3}) => {
  return (
   <tr>
    <td>{index+1}  </td>
    <td> <img src={flags.png} alt="name" className='img-fluid' width="90" /> </td>
    <td>{name.official} </td>
    <td> {population}</td>
    <td>{capital} </td>
    <td><Button  variant="danger"onClick={()=>removeByCcn3(ccn3)} >Delete</Button> </td>
   </tr>
  )
}
export default Country