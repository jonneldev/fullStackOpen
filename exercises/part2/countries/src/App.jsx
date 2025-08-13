import { useState, useEffect } from "react"
import axios from 'axios'

function App() {
  const url = 'https://studies.cs.helsinki.fi/restcountries/'
  const [countries, setCountries] = useState(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log(`effect run`);

    if(countries) {
      console.log(`fetching countries`)
      axios
        .get(`${url}api/all/`)
        .then(response => {
          console.log(response)
        })
    } else {
      console.log(`empty countries`)
    }
    
  }, [countries])

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