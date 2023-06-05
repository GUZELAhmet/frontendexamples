import React from 'react'
import students from "../../assets/data/students.json"
import Kisi from './Kisi'
import "./kisi.scss"
const Kisiler = () => {
  return (
    <div className='tbl-std'>
{
students.map((student,index)=>(<Kisi key={index} student={student}  />))
}
    </div>
  )
}
export default Kisiler