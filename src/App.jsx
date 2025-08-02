import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './Components/accordian'
import RandomColor from './Components/random-color'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* accordian component */}
    <Accordian />
    {/* Random color generatr */}
  <RandomColor />
   </div>
  )
}

export default App
