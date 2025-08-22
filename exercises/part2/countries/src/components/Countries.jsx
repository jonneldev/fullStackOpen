const Countries = ({showCountryData, filteredCountry }) => {
  return (
    <div>
      {filteredCountry.map(country => 
      <div key={country.name.common}>
        <span>{country.name.common} </span>
        <button onClick={() => showCountryData(country)}>show</button>
      </div>
      )}
    </div>
  )
}

export default Countries