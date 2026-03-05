import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
         
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Online Sewa</h3>
            <p className="text-sm">
              Fast, secure, and reliable top-up services for your favorite games.
            </p>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover:text-white transition">
                  Products
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/contact" className="hover:text-white transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

  
        <hr className="border-gray-700 mb-8" />

    
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Online Sewa. All rights reserved.
          </p>
          <p className="text-sm">
            Made with <span className="text-red-500">❤</span> by Mahesh Ghising.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
