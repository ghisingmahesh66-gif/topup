import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Contact', path: '/contact' },
  ];
  const linkClasses = ({ isActive }) => 
    isActive 
  ? "text-white font-bold underline" 
  : "text-white hover:font-bold transition"

  const mobileLinkClasses = ({ isActive }) =>
    isActive
      ? "text-white font-bold underline block py-2"
      : "text-white hover:font-bold transition block py-2";

  return (
    <header className="bg-gradient-to-r from-purple-800 via-red-600 to-pink-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-white font-bold text-2xl">
           Online Sewa 
          </div>
          <div className="hidden md:flex items-center gap-10">
{/* navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClasses}>
                <p className="font-medium text-lg">{link.name}</p>
              </NavLink>
            ))}
          </nav>
{/* login/signup button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
              <User size={18} />
              <span>Login / Sign Up</span>
            </button>
          </div>
          </div>
{/* mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>

{/* mobile menu */}
          <div
        className={`md:hidden bg-gradient-to-r from-purple-800 via-red-600 to-pink-600 border-t border-white/20 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={mobileLinkClasses}
            >
              <p className="font-medium text-lg">{link.name}</p>
            </NavLink>
          ))}
          <div className="pt-3 border-t border-white/20">
            <button className="flex items-center justify-center w-full gap-2 bg-white text-pink-600 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              <User size={18} />
              <span>Login / Sign Up</span>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between items-center px-5 py-3">
        <div className="text-white font-bold text-2xl">
            Oniline Sewa
        </div>
        <div className="flex gap-8">
          <NavLink to="/" className={linkClasses}>
            <p className="font-medium text-lg">Home</p>
          </NavLink>
          <NavLink to="/service" className={linkClasses}>
            <p className="font-medium text-lg">Products</p>
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            <p className="font-medium text-lg">Contact</p>
          </NavLink>
        </div>
      </div> */}
    </header>
  )
}

export default NavBar
