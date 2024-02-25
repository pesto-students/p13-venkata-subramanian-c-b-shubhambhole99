import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import ParityInfo from './Parityinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/>
     <ParityInfo/>
    </>
  )
}

export default App
