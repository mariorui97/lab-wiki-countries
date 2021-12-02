import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

function CountriesList() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get(`https://restcountries.com/v3.1/all`)
           setCountries(response.data)
        }

        getData()
    }, [])

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
         {
            countries.map((elem, i)=>{
            return(         
                <div>                    
                     <p><Link style={{padding: '3px'}} to={`/country/${elem.name.common}`}>{elem.name.common}</Link></p>          
                </div>
            )
        })
        }
        </div>
    )
}

export default CountriesList
