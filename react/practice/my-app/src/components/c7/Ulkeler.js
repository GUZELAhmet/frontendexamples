import React from "react";
import data from "../../assets/data/countries.json";
const Ulkeler = () => {
  //! verilen datadan ulkelri secip selcte yerlestir
  //! a harfi ile baslayan ulkeleri sirala
  const style={
    textAlign:"center",
    backgroundColor:"cyan"
  }
  return (
    <div>
      <select defaultValue="ulke">
        <option disabled value="ulke">
          Bir ulke seciniz
        </option>
        {data.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}{" "}
          </option>
        ))}
      </select>
      <table >
        <thead>
          <tr>
            <th>Sira No</th>
            <th>Ulke Adi</th>
            <th>Ulke Kodu</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((country, index) => country.name.startsWith("A"))
            .map((item, index) => (
              <tr key={index} style={index%2==1 ? style: {...style, backgroundColor:"yellow"}} >
                <td>{index+1}</td>
                <td>{item.name} </td>
                <td>{item.code} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Ulkeler;