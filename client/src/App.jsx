import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posting from './pages/Posting'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Cards from "./components/Cards/index"

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <>
      <Header>dumpster</Header>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Posting />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
      <Cards />
    </>
  )
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import Cards from "./components/Cards/card";
// import Filter from "./components/Filter/Filter";
// import Header from "./components/Header/Header";

// function App() {
//   const [selectedFilter, setSelectedFilter] = useState(0);
//   // console.log(list2);
//   return (
//     <div className="App">
//       <Header />
//       <Filter
//         selectedFilter={selectedFilter}
//         setSelectedFilter={setSelectedFilter}
//       />
//       <Cards />
//     </div>
//   );
// }

// export default App;

