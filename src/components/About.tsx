import { memo } from 'react'
import './About.css'

function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-content">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-text">
          <p className="about-paragraph">
            ¡Hola mundo! 👋
          </p>
          <p className="about-paragraph">
            Soy Alejandro, desarrollador de software con experiencia en el sector sanitario. Me encanta la tecnología y disfruto contribuyendo a proyectos y resolviendo problemas a través del código.
          </p>
          <p className="about-paragraph">
            Trabajo principalmente con Java, TypeScript y bases de datos SQL, y siempre estoy buscando mejorar mis habilidades y asumir nuevos desafíos. Siempre me motiva aprender y mejorar.
          </p>
          <p className="about-paragraph">
            Siempre abierto a nuevos retos y oportunidades para seguir creciendo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
