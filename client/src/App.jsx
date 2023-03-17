import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header>dumpster</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signout" element={<SignOut />} />
      </Routes>
    </>
  )
}

export default App;
