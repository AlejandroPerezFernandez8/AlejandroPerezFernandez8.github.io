import { memo } from 'react'
import './Projects.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "CENPOS",
    description: "Plataforma sociosanitaria para la gestión integral de centros y atención a residentes, utilizada en el ámbito público.",
    technologies: ["Java", "Spring Boot", "SQL", "TypeScript"],
  },
  {
    title: "[TFG] ComandaXpress",
    description: "Aplicación móvil para la gestión de comandas en un restaurante, optimizando la toma de pedidos y la comunicación con cocina.",
    technologies: ["Kotlin", "Java", "SQL"],
  },
  {
    title: "Videojuego Roguelike",
    description: "Juego 2D con mecánicas de supervivencia, oleadas de enemigos y progresión del jugador.",
    technologies: ["C#", "Unity Engine"],
  },
]

function Projects() {

  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Projects)
