import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Footer from './Components/Footer'
import LoginPopup from './Components/LoginPopup'

function App() {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='w-4/5 mx-auto px-4'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />

        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
