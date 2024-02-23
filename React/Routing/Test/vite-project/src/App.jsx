import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeContext from './context/ThemeContext';
import './App.css'
import Home from './Home'
import Loadbooks from './Loadbooks'
import BookList from './BookList';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContext.Provider value="dark"> 
    <Router>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/book" Component={Loadbooks} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
      </Routes>

  </Router>
     </ThemeContext.Provider> 
   
  )
}

export default App
