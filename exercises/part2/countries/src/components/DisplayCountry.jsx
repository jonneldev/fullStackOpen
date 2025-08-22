import { useState } from "react"
import Country from "./Country"
import Countries from "./Countries"

const DisplayCountry = ({ filteredCountry }) => {

  const [selectedCountry, setSelectedCountry] = useState(null)

  const showCountryData = (country) => {
    setSelectedCountry(country)
  }
  
  return (
    <div>
      {
        filteredCountry.length === 1
        || selectedCountry
        ? <Country countryData={selectedCountry || filteredCountry[0]} />
        : <Countries showCountryData={showCountryData} filteredCountry={filteredCountry}/>
      }
    </div>
  )
}

export default DisplayCountry