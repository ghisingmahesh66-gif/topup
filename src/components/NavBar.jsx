import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const linkClasses = ({ isActive }) => 
    isActive ? "text-white font-bold underline" : "text-white hover:font-bold transition"

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-purple-700 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-5 py-3">
        <div className="text-white font-bold text-2xl">
            Oniline Sewa
          {/* <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" className="h-10" /> */}
        </div>
        <div className="flex gap-8">
          <NavLink to="/" className={linkClasses}>
            <p className="font-medium text-lg">Home</p>
          </NavLink>
          <NavLink to="/service" className={linkClasses}>
            <p className="font-medium text-lg">Service</p>
          </NavLink>
          <NavLink to="/portfolio" className={linkClasses}>
            <p className="font-medium text-lg">Portfolio</p>
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            <p className="font-medium text-lg">Contact</p>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
