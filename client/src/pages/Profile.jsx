import { useState } from "react"
import { getUserProfile, signUp } from '../api/user'


export default function Profile() {
  let userHash = localStorage.getItem("TOKEN")
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [avatar, setAvatar] = useState()
  const [favorites, setFavorites] =useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    let userData = {username,password,name,email,avatar,favorites}
    const res = await getUserProfile(userHash, userData)
  
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username: </label> */}
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="avatar"
          placeholder="avatar"
          onChange={(e) => setAvatar(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="favorites"
          placeholder="favorites"
          onChange={(e) => setFavorites(e.target.value)}
        />
        <input type="submit" id="submit" value="Update" />
      </form>
    </>
  )
}