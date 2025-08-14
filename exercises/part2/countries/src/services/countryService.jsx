import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_COUNTRY_BASE_URL;


const getAll = async () => {
  const { data } = await axios.get(`${baseUrl}api/all`)
  return data
}

const create = async (countryData) => {
  const { data } = await axios.post(baseUrl, countryData)
  return data
}

const update = async (id, countryData) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, countryData)
  return data
}

const remove = async (id) => {
  const { data } = await axios.delete(`${baseUrl}/${id}`)
  return data
}

export default {
  getAll,
  create,
  update,
  remove
}