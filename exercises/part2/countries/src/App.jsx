import { useState, useEffect } from "react"
import countryService from './services/countryService'

function App() {
  const [countries, setCountries] = useState(null)
  const [value, setValue] = useState('')

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

  console.log(countries)

  const handleChange = (event) => {
    setValue(event.target.value) 
  }


  
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
      <div>

      </div>
    </div>
  )
}

export default App