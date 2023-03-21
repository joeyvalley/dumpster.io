import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Showpage from './components/Showpage/Showpage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Showpage />} />
        <Route path="/user/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;

