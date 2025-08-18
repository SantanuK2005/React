import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setBgColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen duration-300" style={{ backgroundColor: Color }}>
        
      </div>
    </>
  )
}

export default App
