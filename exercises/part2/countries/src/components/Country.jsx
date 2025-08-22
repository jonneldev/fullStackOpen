import { useState, useEffect } from "react"
import weatherService from '../services/weatherService'

const Country = ({ countryData }) => {
  const [weatherData, setWeatherData] = useState(null)

  const {
    name: { common: name },
    capital,
    area,
    languages,
    flags,
  } = countryData

  useEffect(() => {
    weatherService
      .getWeather(capital)
      .then(data =>
        setWeatherData({
          temp: data.main.temp, 
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          wind: data.wind.speed,
        })
      )
  }, [capital])

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>

      <h3>Languages</h3>
      <ul>
        {Object.values(languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={flags.png} alt={`Flag of ${name}`} />

      {weatherData && (
        <div>
          <h3>Weather in {capital}</h3>
          <p>Temperature: {weatherData.temp} °C</p>
          <img src={weatherData.icon} alt="Weather icon" />
          <p>Wind: {weatherData.wind} m/s</p>
        </div>
      )}
    </div>
  )
}

export default Country
