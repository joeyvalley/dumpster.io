import axios from 'axios'

const LOCALSTORAGE_KEY = 'TOKEN'

const api = axios.create({ baseURL: `https://dumpster-io-two.vercel.app/api/` })

api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api