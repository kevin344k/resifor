import { useState } from 'react'
import logo from "/logo.jpeg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav className="flex w-full px-12 items-center justify-between 
  bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
       
  <img className="rounded-full size-12" src={logo} alt="logo" />
  <p className="text-white font-medium">Pedir</p>
</nav>

    </>
  )
}

export default App
