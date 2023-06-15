import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios';
import Country from './country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCountriesData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');

            const arr = response.data.map((country) => ({
                flag: country.flags.svg,
                name: country.name.common,
                population: country.population,
                capital: country.capital?.join("-"),
                ccn3: country.ccn3,
            }))

            setCountries(arr);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCountriesData();
    }, [])

    return (
        <Container>
            <h2>Axios - Countries</h2>
            loading
                    ? <p>Loading...</p>
                    : <Table bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bayrak</th>
                                <th>Ulke Ismi</th>
                                <th>Nufus</th>
                                <th>Baskent</th>
                                <th>Para Birimi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countries.map((item, index) => <Country key={item.ccn3} {...item} index={index} />)}
                        </tbody>
                    </Table>
        </Container>
    )
}

export default Countries;