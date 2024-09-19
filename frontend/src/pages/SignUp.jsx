import React from 'react'
import signupImg from '../assets/photos/signup-img.png'
const SignUp = () => {
  return (
    <div className='flex flex-col items-center md:flex-row mx-20'>
      <div className='w-full md:w-1/2'>
        <img src={signupImg} className='h-full' alt="" />
      </div>
      <div className="mx-20 my-12 md:w-1/2">
      <h1 className="font-bold text-4xl my-4">Home/Sign Up</h1>
        <form action="">
        <input type="text" className='border rounded border-gray-300 w-full p-2 m-2'/>
        <label>Username</label>
        <input type="email" className='border rounded border-gray-300 w-full p-2 m-2'/>
        <label>Email Address</label>
        <input type="password" className='border rounded border-gray-300 w-full p-2 m-2'/>
        <label>Password</label>
        <input type="password" className='border rounded border-gray-300 w-full p-2 m-2'/>
        <label>Confirm Password</label>
        <div className="flex">
        <input type="checkbox" />
        <p className='m-4'>I have accept <span className='text-blue-500 font-bold'>Terms & Condition</span></p>
        </div>
        <button type='submit' className='text-center w-full py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600'>Sign Up</button>
        </form>
        
      </div>
    </div>
  )
}

export default SignUp
