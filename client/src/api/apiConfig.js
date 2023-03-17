import axios from 'axios'

const LOCALSTORAGE_KEY = "token";

const api = axios.create({ baseURL: `http://localhost:${process.env.local.PORT}/api` })

api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api