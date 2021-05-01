import axios from 'axios'

const api = axios.create({
  baseURL: 'https://summer-eletrohits-api.vercel.app/api/'
})

export default api
