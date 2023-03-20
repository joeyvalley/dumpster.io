import { useState } from "react"
import { signUp } from '../api/user'

export default function SignUp() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await signUp(username, password)
    console.log(res);
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
          required
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" id="submit" value="Sign In" />
      </form>
    </>
  )
}