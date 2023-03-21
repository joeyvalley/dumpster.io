import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posting from './pages/Posting'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/id" element={<Posting />} />
        <Route path="/user/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;

