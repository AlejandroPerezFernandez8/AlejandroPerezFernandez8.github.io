import { memo } from 'react'
import './Home.css'

function Home() {
  return (
    <section id="inicio" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Alejandro Pérez Fernández</h1>
        <h2 className="home-subtitle">Software Developer</h2>
        <p className="home-description">
          Software Engineer en NTT DATA especializado en <strong>Java Spring Boot</strong> y <strong>TypeScript</strong>.
          Experiencia en desarrollo de sistemas empresariales y aplicaciones web.
        </p>
      </div>
    </section>
  )
}

export default memo(Home)
