import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import data from "./data.json";
import Country from "./Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const timer=  setTimeout(() => {
      setCountries(data);
      setLoading(false);
    }, 2000);
    return () => {
clearTimeout(timer)
    };
  }, []);
  const removeByCcn3 = (ccn3) => {
    const isDelete=window.confirm("Silmek istediginize emin misiniz?");
    //console.log(isDelete)
    if(isDelete){
        const newArr=countries.filter((item)=>item.ccn3!==ccn3)
        setCountries(newArr);
    }
    }
  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Bayrak</th>
            <th>Ulke</th>
            <th>Nufus</th>
            <th>Baskent</th>
            <th>Islem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td className={loading ? 'd-block' : 'd-none'}>
            <Spinner animation="grow" variant="danger" />
            </td>
          </tr>
          {
countries.map((country,index)=> <Country key={index} index={index} {...country} removeByCcn3={removeByCcn3}  /> )
          }
        </tbody>
      </Table>
    </Container>
  );
};
export default Countries;