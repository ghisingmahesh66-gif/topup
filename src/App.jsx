import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Games from './pages/Games'
import TopUp from './pages/TopUp'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Product />} />
          <Route path="/games" element={<Games />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
