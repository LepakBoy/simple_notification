import React, { useState } from 'react'

export default function LoginCard({setUser}) {
    const [userInput, setUserInput] = useState("")
  return (
    <div>
        <input type="text" onChange={(e) => setUserInput(e.target.value)} />
        <button type='button' onClick={() => setUser(userInput)}>Login</button>
    </div>
    
  )
}
