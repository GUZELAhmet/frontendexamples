import React, { useEffect, useState } from 'react'
import data from "./data.json"
import Tour from './Tour'

const Tours = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
      const timer=  setTimeout(() => {
            setTours(data);
        }, 2000);
       return()=>{ clearTimeout(timer)}
    }, []);

    const removeById = (id) => { 
        const arr=tours.filter((tour)=>tour.id!==id);
        setTours(arr)
    
     }
  return (
    <div className='header'>
        <h2 className='text-center mt-4'>
            Our Tours
        </h2>
        <div>
            {tours.map((item) => 
            (<Tour key={item.id} {...item} removeById={removeById}/>) ) }
                       
        </div>

    </div>
  )
}

export default Tours