import React from 'react'
const Jsx3 = () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        email: "john@example.com",
        occupation: "Godfather of the Developers"
    };
    const error = true;
    const { firstName, age } = user;
    return (
        <div>
            {
                age >= 18 && <h1>Bu icerik 18 yasindan buyuklere ozeldir</h1>
            }
            {
                age > 17 || <h1>Bu icerik 17 yasindan kucukler icindir</h1>
            }
            {
                error && <p>Burada bir hata bulunmaktadir</p>
            }
        </div>
    )
}

export default Jsx3;