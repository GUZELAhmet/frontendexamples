import React from 'react'

const IsLogin = () => {
 const isLogin=true;
 const name="Ali";
 const surName="Tan";


  return (
    <div>
        {

            isLogin? <h2>Welcome {name} {surName}</h2> 
            : <h2>Lütfen giriş yapınız</h2>





        }
    </div>
  )
}

export default IsLogin