import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl font-bold bg-red-500'>Currency Converter App</h1>
    </>
  )
}

export default App
