import React from 'react'
import data from "../../assets/data/students.json"

const Tablo = () => {

    const style={
        color:"red",
        fontSize:"20px",
        fontWeight:"bold",
        textAlign:"center",
        backgroundColor:"blue"
    }
  return (
    <div   style={{textAlign:"center"}}>
      <table style={{width:"500px", margin:"1rem auto"}}>
        <thead>
            <tr>
                <th>Isim</th>
                <th>Yas</th>
                <th>Kurs</th>
            </tr>
        </thead>
    <tbody>
      { data.map((student,index)=> (
        <tr 
        key={index} 
        style={index%2==0? style:{...style,backgroundColor:"green"}}>
            <td>{student.isim}</td>
            <td>{student.yas}</td>
            <td>{student.kurs}</td>

        </tr>
       ))}

    </tbody>
        </table>  




    </div>
  )
}

export default Tablo