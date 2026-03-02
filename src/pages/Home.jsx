import React from 'react'
import heroImg from '../Images/hero.jpg'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
   <>
   
     <section
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
         </h1>
         <p className="text-lg md:text-2xl mb-8">
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
         </p>
         <a
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
     </section>
   </>
  )
}

export default Home
