import React from 'react'
import Welcome1 from './02-welcome'
import Welcome2 from './03-welcome'
import Welcome3 from './04-welcome'

const Greetings = () => {
  return (

    <div>
      <Welcome1 
      firstName="jhon" 
      lastName="Doe" 
      desc="ben bir developerim"
      disable/>
     <Welcome1
     
      firstName="Maria"
      lastName="Martinez"
      desc="ben bir developerim"
      disable/>
       <Welcome1 firstName="Ozgur" lastName="Aktas" desc="Ben bir Developerim" />
       <Welcome2 firstName="Maria" lastName="Rodriguez" />
      <Welcome3 firstName="Tabitha" lastName="Collins" />


       {/* 
            Maria Rodriguez 
            Ozgur Aktas 
            Tabitha Collins
            Ethan Mitchell
            Sophie Anderson
            Nathan Turner
            Olivia Parker */}
     
   </div>
  )
}

export default Greetings