import api from './apiConfig.js'

export default async function signIn(username, password) {
  const res = await api.post('/auth/signin/', { username, password })
  return res
}

export async function signUp(username, email, password, password2) {
  if (password !== password2) {
    return "Passwords do not match."
  }
  const res = await api.post('/auth/signup/', { username, email, password })
  return res
}