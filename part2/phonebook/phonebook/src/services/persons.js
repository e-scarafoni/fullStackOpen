import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const update = (personId, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${personId}`, updatedPerson)
  return request.then(response => response.data)
}

const del = (personId) => {
    const deleteUrl = `${baseUrl}/${personId}`
    const request = axios.delete(deleteUrl)
    return request.then(response => response.data)
}

export default { getAll, create, update, del }