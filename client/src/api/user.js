import api from './apiConfig.js'

const LOCALSTORAGE_KEY = 'TOKEN'

export async function signIn(username, password) {
  const res = await api.post('/auth/signin/', { username, password })
  if (res.data.isUser) {
    localStorage.setItem(LOCALSTORAGE_KEY, res.data)
    window.location.replace("/")
  } else {
    return false;
  }
}


export async function signUp(username, password) {
  const res = await api.post('/auth/signup/', { username, password })
  // If username already exists, make user choose a new username.
  if (res.data.usernameExists) {
    return "User already exists."
  }
  // If new user is created, store token in local storage and redirect user to homepage.
  localStorage.setItem(LOCALSTORAGE_KEY, res.data)
  window.location.replace("/")
}