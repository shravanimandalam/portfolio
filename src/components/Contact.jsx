import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const links = [
  { label: 'Email', value: 'shravanir12@gmail.com', href: 'mailto:shravanir12@gmail.com' },
  { label: 'Phone', value: '+1 (667) 369-8227', href: 'tel:+16673698227' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shravani-mandalam', href: 'https://www.linkedin.com/in/shravani-mandalam-7a0ba31aa/' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{
      borderTop: '1px solid var(--rule)',
      padding: '6rem 2.5rem',
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
            display: 'block',
            marginBottom: '2.5rem',
          }}
        >
          07 — Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1.1,
            color: 'var(--ink)',
            marginBottom: '4rem',
            maxWidth: '16ch',
          }}
        >
          Let's work<br />
          <em>together.</em>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--rule)',
        }} className="contact-grid">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                display: 'block',
                padding: '2rem',
                borderRight: i < links.length - 1 ? '1px solid var(--rule)' : 'none',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(196,82,42,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                marginBottom: '0.75rem',
              }}>
                {link.label}
              </div>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.95rem',
                color: 'var(--ink)',
                wordBreak: 'break-all',
              }}>
                {link.value}
              </div>
              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                marginTop: '0.75rem',
              }}>
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid a { border-right: none !important; border-bottom: 1px solid var(--rule); }
        }
      `}</style>
    </section>
  )
}
