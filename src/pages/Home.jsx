import React from 'react'
// import heroImg from '../Images/hero.jpg'
import { Link } from 'react-router-dom'
import { Zap, Gamepad2, Shield, Clock, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-red-900/80 to-pink-900/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="inline-flex items-center gap-3">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow-400" />
              Fast & Secure Game Top-Ups
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Recharge your favorite games instantly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Primary Button */}
            <Link to="/games">
            <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Zap className="w-5 h-5" />
              Top Up Now
            </button>
            </Link>

            {/* Secondary Button */}
            <Link to="/games">
            <button className="flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
              <Gamepad2 className="w-5 h-5" />
              View Games
            </button>
            </Link>
          </div>
{/* Trust Indicators - Below Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-sm sm:text-base font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm sm:text-base font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Globe className="w-5 h-5 text-yellow-400" />
              <span className="text-sm sm:text-base font-medium">Global Support</span>
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-16 bg-gray-100">
       <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold mb-4">Game Top‑ups</h3>
             <p className="text-gray-600">Purchase in‑game currency for PUBG, Freefire, MLBB and more instantly.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold mb-4">Bill Payments</h3>
             <p className="text-gray-600">Pay your utility bills quickly – electricity, water, internet and others.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold mb-4">Mobile Recharge</h3>
             <p className="text-gray-600">Top up prepaid mobile plans across all major carriers.</p>
           </div>
         </div>
       </div>
     </section>
    </div>
  );
};
     {/* <section
       className="hero text-white w-full h-150 py-10 px-4 text-center"
       style={{
         backgroundImage: `url(${heroImg})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
       }}
     >
       <div className="max-w-[1200px] h-[500px] mx-auto bg-black/60 justify-center items-center flex flex-col rounded-4xl shadow-lg">
         <h1 className=" text-white opacity-100 text-4xl md:text-6xl font-bold mb-4">
           Welcome to Online Sewa
         </h1> */}
         {/* <p className="text-lg md:text-2xl mb-8">
           <Typewriter
             words={[
               'Fast. Secure. Reliable.',
               'Recharge your way.',
               'All networks supported.'
             ]}
             loop={0}
             cursor
             cursorStyle="|"
             typeSpeed={70}
             deleteSpeed={50}
             delaySpeed={1500}
           />
         </p> */}
         {/* <a
           href="#"
           className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
         >
           Get Started
         </a>
       </div>
     </section>

     
     <section className="py-16 bg-gray-100">
       <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold mb-4">Game Top‑ups</h3>
             <p className="text-gray-600">Purchase in‑game currency for PUBG, Freefire, MLBB and more instantly.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold mb-4">Bill Payments</h3>
             <p className="text-gray-600">Pay your utility bills quickly – electricity, water, internet and others.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold mb-4">Mobile Recharge</h3>
             <p className="text-gray-600">Top up prepaid mobile plans across all major carriers.</p>
           </div>
         </div>
       </div>
     </section> */}
   

export default Home
