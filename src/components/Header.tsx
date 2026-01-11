import { memo, useCallback } from 'react'
import './Header.css'

function Header() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerHeight = 80
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000 // 1 segundo
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)

      // Función de easing para suavizar la animación
      const ease = (t: number) => t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

      window.scrollTo(0, startPosition + distance * ease(progress))

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  const scrollToTop = useCallback(() => {
    const startPosition = window.pageYOffset
    const distance = -startPosition
    const duration = 1000 // 1 segundo
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)

      // Función de easing para suavizar la animación
      const ease = (t: number) => t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

      window.scrollTo(0, startPosition + distance * ease(progress))

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <button onClick={scrollToTop} className="logo">APF</button>
        <nav className="nav">
          <button onClick={() => scrollToSection('inicio')} className="nav-link">
            Inicio
          </button>
          <button onClick={() => scrollToSection('sobre-mi')} className="nav-link">
            Sobre mí
          </button>
          <button onClick={() => scrollToSection('tecnologias')} className="nav-link">
            Tecnologías
          </button>
          <button onClick={() => scrollToSection('proyectos')} className="nav-link">
            Proyectos
          </button>
          <button onClick={() => scrollToSection('experiencia')} className="nav-link">
            Experiencia
          </button>
          <button onClick={() => scrollToSection('contacto')} className="nav-link">
            Contacto
          </button>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
