import { useState } from "react"
import signIn from '../api/user'

export default function SignIn() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await signIn(username, email, password, password2)
    console.log(response);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username or E-mail"
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
        <br />
        <input type="submit" id="submit" value="Sign In" />
      </form>
    </>
  )
}