import { useState, useEffect } from "react"
import countryService from './services/countryService'
import DisplayCountries from "./components/DisplayCountries"

function App() {
  const [countries, setCountries] = useState([])
  const [countryData, setCountryData] = useState('')
  const [value, setValue] = useState('')
  const [searchedCountry, setSearchedCountry] = useState([])

  useEffect(() => {
    console.log(`effect run`);

    countryService
      .getAll()
      .then(data => {
        const countryName = data
        .map(countryData => countryData.name.common)
        setCountries(countryName)
      })
    
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value) 
  }

  const filteredCountry = countries.filter(country => {
    if(!value || null) {
      return  
    } else {
      return country.toLowerCase().includes(value.toLowerCase())
    }
  })
  
  return (
    <div>
      <div>
        find countries
        <input 
          style={{
            display: "inline-block",
            marginLeft: "5px",
          }}
          value={value}
          onChange={handleChange}
        />
      </div>
      {
        countries
        ? <DisplayCountries filteredCountry={filteredCountry} value={value} />
        : null
      }
    </div>
  )
}

export default App