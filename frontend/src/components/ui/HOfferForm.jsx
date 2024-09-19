import React from 'react'

const HOfferForm = () => {
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("Form Submitted!")
    }
  return (
    <form onSubmit={handleSubmit} className='mr-24 ml-12'>
        <div><label htmlFor="username">Username</label><br />
        <input className='w-full border border-gray-300 rounded py-2' type="text" required /></div>
        <div><label htmlFor="email">Email Adress</label><br />
        <input className='w-full border border-gray-300 rounded py-2' type="email" required /></div>
        <div><label htmlFor="message">Message</label><br />
        <textarea className='w-full border border-gray-300 rounded py-2' name="" id=""></textarea></div>
        <p></p>
        <button className='bg-blue-950 text-white rounded px-3 py-2 hover:bg-blue-900' type="submit">Submit</button>
    </form>
  )
}

export default HOfferForm
