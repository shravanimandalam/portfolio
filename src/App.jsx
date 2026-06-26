import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer style={{
        borderTop: '1px solid var(--rule)',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'var(--sans)',
        fontSize: '0.72rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--ink-muted)',
      }}>
        © 2026 Shravani Rangaswamy Mandalam &nbsp;·&nbsp; Atlanta, GA
      </footer>
    </>
  )
}

export default App
