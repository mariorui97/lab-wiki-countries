import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function CountryDetails() {
    const {name} = useParams()
    const [countryDetails, setCountryDetails] = useState(null)

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            
            const {capital, area, borders, flags} = response.data[0]            
            
            let country = {
                name: name,
                capital : capital,
                area : area,
                borders : borders,
                flags: flags.svg
            }              
            
            setCountryDetails(country)            
        }

        getData()
    }, [name])

    if (!countryDetails) return null

    return (       
        <div> 
            <img src={countryDetails.flag} alt="" height="100px"/>       
            <p>Capital:{countryDetails.capital}</p>
            <p>Area: {countryDetails.area}</p>
            <p>Borders: {countryDetails.borders}</p>

        </div>
    )
}

export default CountryDetails
