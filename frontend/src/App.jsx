import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7[vw] 1g:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:producId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} /> 
        <Route path="contact" element={<Contact />} />
      </Routes>
      
    </div>
  )
}

export default App
