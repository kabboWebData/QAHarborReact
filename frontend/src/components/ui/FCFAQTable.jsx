import React, { useState } from 'react'

const FCFAQTable = () => {
    const [isShowing1, setIsShowing1 ]=useState(true)
    const [isShowing2, setIsShowing2 ]=useState(false)
    const [isShowing3, setIsShowing3 ]=useState(false)
  return (
    <div className='border border-black m-4'>
      <h1 onClick={()=>setIsShowing1(!isShowing1)} className="font-bold border border-black p-4">
        Ques: What information should i prefer for the consultation?
      </h1>
      {isShowing1 && <p className='font-bold text-gray-600 border border-black px-6 pb-6 py-2'>
        Ans: Prepare a brief overview of your project, including goals, challenges, and specific questions.
      </p>}
      <h1 onClick={()=>setIsShowing2(!isShowing2)} className="font-bold border border-black p-4">
        Ques: Is the consultation virtual or in-person?
      </h1>
      {isShowing2 && <p className='font-bold text-gray-600 border border-black px-6 pb-6 py-2'>
        Ans: Prepare a brief overview of your project, including goals, challenges, and specific questions.
      </p>}
      <h1 onClick={()=>setIsShowing3(!isShowing3)} className="font-bold border border-black p-4">
        Ques: Are there any obligations after the free consultation?
        </h1>
        {isShowing3 && <p className='font-bold text-gray-600 border border-black px-6 pb-6 py-2'>
        Ans: Prepare a brief overview of your project, including goals, challenges, and specific questions.
      </p>}
    </div>
  )
}

export default FCFAQTable
