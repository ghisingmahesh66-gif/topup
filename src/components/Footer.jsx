import React from 'react'
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           {/* Copyright */}
//           <p className="text-gray-400 text-sm">
//             © 2026 TopUpHub. All Rights Reserved.
//           </p>

//           {/* Links */}
//           <div className="flex items-center gap-4 text-sm">
//             <a href="#" className="text-gray-400 hover:text-white transition">
//               Privacy Policy
//             </a>
//             <span className="text-gray-600">|</span>
//             <a href="#" className="text-gray-400 hover:text-white transition">
//               Terms of Service
//             </a>
//             <span className="text-gray-600">|</span>
//             <a href="#" className="text-gray-400 hover:text-white transition">
//               Support
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-50 bg-gradient-to-r from-purple-900 via-red-700 to-pink-700 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* grid on mobile, tab, desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
         {/* brand info */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold italic">Online Sewa</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Fast, secure, and reliable top-up services for your favorite games. 
              Join thousands of gamers who trust us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-b-2 border-white/20 pb-1 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:translate-x-1 hover:text-white transition-all inline-block">Home</NavLink></li>
              <li><NavLink to="/games" className="hover:translate-x-1 hover:text-white transition-all inline-block">Games</NavLink></li>
              <li><NavLink to="/contact" className="hover:translate-x-1 hover:text-white transition-all inline-block">Contact</NavLink></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-b-2 border-white/20 pb-1 inline-block">
              Support
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:translate-x-1 hover:text-white transition-all inline-block">FAQ</a></li>
              <li><a href="#" className="hover:translate-x-1 hover:text-white transition-all inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:translate-x-1 hover:text-white transition-all inline-block">Terms of Service</a></li>
            </ul>
          </div>

       
         {/* Social Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-b-2 border-white/20 pb-1 inline-block">
              Follow Us
            </h4>
            <div className="flex gap-5">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

  
        <hr className="border-gray-700 mb-8" />

    
        {/* Bottom Bar: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm opacity-80">
            &copy; {currentYear} <span className="font-bold">Online Sewa</span>. All rights reserved.
          </p>
          <p className="text-sm bg-white/10 px-4 py-1 rounded-full border border-white/10">
            Made with <span className="text-red-400">❤</span> by <span className="font-semibold text-white">Mahesh Ghising</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
