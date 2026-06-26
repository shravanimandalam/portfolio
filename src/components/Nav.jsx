import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.25rem 2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.4s, border-color 0.4s',
      background: scrolled ? 'rgba(250,247,242,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
    }}>
      <span style={{
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        fontSize: '1.1rem',
        letterSpacing: '0.02em',
        color: 'var(--ink)',
      }}>
        S.M.
      </span>

      {/* desktop links */}
      <ul style={{
        display: 'flex',
        gap: '2.5rem',
        listStyle: 'none',
        fontFamily: 'var(--sans)',
        fontSize: '0.7rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }} className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{ color: 'var(--ink-light)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--ink-light)'}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile hamburger */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(o => !o)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
        }}
        className="hamburger"
      >
        <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', marginBottom: 5, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
        <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
        <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
      </button>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
