import React from 'react'

const Welcome1 = (props) => {
  console.log(props)
  return (
    <div className='welcome'>
      <h1>
        welcome { props.firstName } {props.lastName}
      </h1>
     
        {/* diabled  props tan gönderilmesse aşağıdaki p elementini göster*/}
        {  props.disabled
        ||
       <p>  
        {props.desc}
      </p>
      }
      
     </div>
  )
}

export default Welcome1