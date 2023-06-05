import React from 'react'
import fruits from "./Fruits"

const Product = () => {
 const listFruits=   
 fruits.map((fruit)=> 
 <li key={fruit.id} style={{color:fruit.isFruit? "red":"green"}}>  {fruit.title}</li>)
  return (
    <ul>
       {listFruits} 
    </ul>
  )
}

export default Product