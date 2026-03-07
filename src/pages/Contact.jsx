import React from 'react'

const Contact = () => {
  return (
   
      <div className=' w-full h-full flex flex-row p-5 rounded-[5px]  bg-gray-300'>
         <div className='  bg-gray-200 w-[50%] flex flex-col items-center justify-center rounded-[5px] '>
            <div className='bg-gray-100 rounded-[10px] h-140 w-100 shadow-2xl'>
                <h1 className='text-center text-[30px] p-0 pt-10'>Get in Touch</h1>
         <p className='text-center'>Send us a message and we'll reply soon</p>
         <form action="" method="POST" className='flex flex-col pt-10 p-15 gap-2'>
          <label htmlFor="">Username</label>
          <input type="text" name='name' placeholder='Enter your username' className='border-1 rounded-[8px] p-1' />
          <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='Enter your email' className='border-1 rounded-[8px] p-1'/>
          <label htmlFor="">Message</label>
          <textarea name="" id="" className='border-1 h-[100px] '></textarea>
          <input type="Submit" value="Contact Now" className=' bg-black text-white border-1 p-1 rounded-[8px] w-full mt-5'/>
          <textarea name="" id="" className='border-1 h-[100px] '></textarea>
          <input type="Submit" value="Contact Now" className=' bg-black text-white border-1 p-1 rounded-[8px] w-full mt-5'/>
        </form>
            </div>
         </div>
      </div>
    
  )
}

export default Contact
