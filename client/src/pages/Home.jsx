import { useEffect, useState } from "react";

// Import components.
// import SignIn from "../components/SignIn/SignIn";
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Cards from "../components/Cards/index"

export default function Home() {

  const [auth, setAuth] = useState()

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
  }, [])

  // const [login, setLogin] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(0);

  // function handleLogin() {
  //   setLogin(true);
  // }

  // function receiveData(visibility) {
  //   setLogin(false)
  // }
  return (
    <>
      {/* <button type="button" onClick={handleLogin}>
        Open Modal
      </button>
      {login && <SignIn visibility={true} sendDataToParent={receiveData}></SignIn>} */}

      <Header auth={auth} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Cards />
    </>
  )
}