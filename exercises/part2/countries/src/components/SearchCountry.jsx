const SearchCountry = ({ query, onQueryChange }) => {
  return (
    <>
      <label htmlFor="country-search">Find countries: </label>
      <input
        id="country-search"
        type="text" 
        value={query} 
        onChange={onQueryChange}
      />
    </>
  )
}

export default SearchCountry