import { Routes, Route } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Error from './components/pages/Error'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Compare from './components/pages/Compare'
import Cart from './components/pages/Cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<Login />} />
        <Route path="compare" element={<Compare />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
