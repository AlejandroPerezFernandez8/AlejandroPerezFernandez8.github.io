import { memo } from 'react'
import './Experience.css'

interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "NTT DATA",
    position: "Software Engineer",
    period: "Jul 2024 - Actualidad",
    description: [
      "Desarrollo de aplicaciones empresariales con Java Spring Boot",
      "Implementación de interfaces web con TypeScript",
      "Integración de APIs REST y serivicos",
      "Trabajo en equipo usando metodologías ágiles (Scrum)"
    ]
  },
  {
    company: "NTT DATA",
    position: "Prácticas - Software Developer",
    period: "Abr 2024 - Jun 2024",
    description: [
      "Desarrollo de funcionalidades en aplicaciones empresariales",
      "Aprendizaje de tecnologías Java Spring Boot y TypeScript",
      "Participación en proyectos reales con equipos de desarrollo",
      "Integración en metodologías ágiles y flujos de trabajo profesionales"
    ]
  }
]

function Experience() {

  return (
    <section id="experiencia" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experiencia</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3 className="experience-position">{exp.position}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Experience)
