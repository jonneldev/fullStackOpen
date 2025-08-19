const DisplayCountries = ({ filteredCountry, value }) => {
  

  return(
    <div>
      {
        filteredCountry.length > 10
        ? <p>Too many matches, specify another filter</p>
        : filteredCountry.map(country => <p key={country}>{country}</p>
      )
      }
    </div>
  )
}

export default DisplayCountries