import { useEffect, useState } from "react";

// Import components.
// import SignIn from "../components/SignIn/SignIn";
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Cards from "../components/Cards/Cards"

export default function Home() {

  const [auth, setAuth] = useState()

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
  }, [])

  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Header auth={auth} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Cards />
    </>
  )
}