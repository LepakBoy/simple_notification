import React, { useState } from 'react'

export default function LoginCard({setUser}) {
  const [userInput, setUserInput] = useState("")


  return (
    <section className='flex flex-col items-center h-screen justify-center'>
      <div className='w-[220px] flex flex-col gap-6'>
        <div>
          <label className='text-lg font-semibold' for="username">Username</label>
          <input className='p-3 mt-3 w-full' id='username' type="text" onChange={(e) => setUserInput(e.target.value)} />
        </div>
        <button className='bg-teal-700 p-2 text-yellow-50 font-semibold' type='button' onClick={() => setUser(userInput)}>Login</button>
      </div>
    </section>
    
  )
}
