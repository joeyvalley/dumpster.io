import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posting from './pages/Posting'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Posting />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </>
  )
}

export default App;
