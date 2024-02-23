import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeContext from './context/ThemeContext';
import './App.css'
import BookList from './BookList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContext.Provider value="dark">
      <BookList />
    </ThemeContext.Provider>
  )
}

export default App
