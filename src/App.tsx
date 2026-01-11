import './App.css'
import InteractiveBackground from './components/InteractiveBackground'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio-container">
      <InteractiveBackground />
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
