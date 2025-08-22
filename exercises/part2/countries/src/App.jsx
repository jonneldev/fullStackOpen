import { useState, useEffect, useMemo } from "react"
import countryService from './services/countryService'
import SearchCountry from './components/SearchCountry'
import DisplayCountry from "./components/DisplayCountry"

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    console.log(`fetching country`);

    countryService
      .getAll()
      .then(data => setCountries(data))
      .catch(err => {
        console.error("Error fetching countries:", err)
        setError("Failed to fetch countries")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onQueryChange = (event) => setQuery(event.target.value)
  const filteredCountry = useMemo(() => {
    if(!query) return []
    return countries.filter(country =>
      country.name.common.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
  }, [countries, query])
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      <SearchCountry query={query} onQueryChange={onQueryChange} />
      {filteredCountry.length <= 10  
      ? <DisplayCountry filteredCountry={filteredCountry} />
      : <p>Too many matches, specify another filter</p>
      }
    </div>
  )
}

export default App