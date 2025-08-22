import axios from 'axios'
const weatherURL = "https://api.openweathermap.org"
const apiKey = import.meta.env.VITE_WEATHER_API

const getWeather = async (capitalCity) => {
  const { data } = await axios.get(`${weatherURL}/data/2.5/weather?q=${capitalCity}&appid=${apiKey}&units=metric`)
  return data
}

export default {
  getWeather
}