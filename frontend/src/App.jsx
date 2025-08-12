import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-4/5 m-auto'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />

    </Routes>
   </div>
  )
}

export default App
