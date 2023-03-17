export default function SignIn() {
  return (
    <>
      <div>Sign In</div>
      <form>
        <label for="username">Username: </label>
        <input type="text" id="username" />
        <br />
        <label for="email">E-mail: </label>
        <input type="email" id="email-address" />
        <br />
        <label for="password">Password: </label>
        <input type="password" id="password" />
        <br />
        <label for="password-confirm">Confirm Password: </label>
        <input type="password" id="password-confirm" />
        <br />
        <input type="button" id="submit" value="Sign In" />
      </form>
    </>
  )
}