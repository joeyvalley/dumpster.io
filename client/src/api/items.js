import api from './apiConfig.js'

export async function getItems() {
  const res = await api.get('/new/')
  return res.data;
}

export async function getItem(_id) {
  const res = await api.get(`/new/${_id}`)
  console.log(res);
}