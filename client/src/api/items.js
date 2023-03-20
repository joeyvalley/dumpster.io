import api from './apiConfig.js'

export async function getItems() {
  const res = await api.get('/new/')
  return res.data;
}