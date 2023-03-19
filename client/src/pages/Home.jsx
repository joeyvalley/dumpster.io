import { useState } from "react";
import SignIn from "./SignIn/SignIn";

export default function Home() {
  const [login, setLogin] = useState(false)

  function handleLogin() {
    setLogin(true);
  }

  function receiveData(visibility) {
    setLogin(false)
  }
  return (
    <>
      <button type="button" onClick={handleLogin}>
        Open Modal
      </button>
      {login && <SignIn visibility={true} sendDataToParent={receiveData}></SignIn>}
    </>
  )
}