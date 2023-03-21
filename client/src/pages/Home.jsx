import { useEffect, useRef, useState } from "react";

// Import components.
// import SignIn from "../components/SignIn/SignIn";
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer/Footer"


export default function Home() {

  const [auth, setAuth] = useState()
  // const [fixed, setFixed] = useState(false)

  // function controlDirection() {
  //   if (isFixed && window.pageYOffset < 24) {
  //     isFixed = false
  //     console.log("unstick it");
  //     console.log(filterDiv);
  //   }
  //   else if (window.pageYOffset === 24) {
  //     isFixed = true
  //     console.log('stickit')
  //     console.log(isFixed)
  //   }
  // }

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
    // window.addEventListener('scroll', controlDirection);
    // return () => {
    //   window.removeEventListener('scroll', controlDirection);
    // };
  }, [])

  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Header auth={auth} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Cards />
      <Footer />
    </>
  )
}