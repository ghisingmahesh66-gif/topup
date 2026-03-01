import React from 'react'
import heroImg from '../Images/hero.jpg'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
   <>
     {/* Hero Section */}
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
   </>
  )
}

export default Home
