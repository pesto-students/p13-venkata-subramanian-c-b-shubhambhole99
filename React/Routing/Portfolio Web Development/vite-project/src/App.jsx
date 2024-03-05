import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home';
import Projects from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Blog from './components/Blog';
import BlogPost from './components/BlogPostPage';
import './App.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
        <Route path="/skills" Component={Skills} />
        <Route exact path="/blog" Component={Blog} />
        <Route path="/blog/:id" Component={BlogPost} />
      </Routes>
  </Router>
    </>
  )
}

export default App
