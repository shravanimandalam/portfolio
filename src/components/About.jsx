import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  })

  return (
    <section id="about" ref={ref} style={{
      borderTop: '1px solid var(--rule)',
      padding: '6rem 2.5rem',
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '4rem',
        alignItems: 'start',
      }} className="about-grid">

        <motion.div {...anim(0)}>
          <span style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
            display: 'block',
            marginBottom: '1rem',
          }}>
            01 — About
          </span>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
        </motion.div>

        <div>
          <motion.h2
            {...anim(0.1)}
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
              color: 'var(--ink)',
            }}
          >
            Detail-oriented engineer bridging{' '}
            <em>cloud infrastructure</em>{' '}
            and production operations.
          </motion.h2>

          <motion.p {...anim(0.2)} style={{ color: 'var(--ink-light)', marginBottom: '1.25rem', maxWidth: '48ch' }}>
            I am a Technology Support Associate and Cloud Infrastructure Engineer with hands-on
            experience in IT support, system troubleshooting, automation, and cloud operations.
            Currently at UPS Mail Innovations, I own L2/L3 incident response for enterprise
            applications across SQL Server, cloud platforms, and operational pipelines.
          </motion.p>

          <motion.p {...anim(0.3)} style={{ color: 'var(--ink-light)', maxWidth: '48ch' }}>
            I hold three Microsoft Azure certifications (AZ-900, AZ-104, AZ-400) and bring
            a Master's in Data Science from UMBC, combining engineering discipline with
            analytical depth to deliver reliable, scalable technical solutions.
          </motion.p>

          <motion.div
            {...anim(0.4)}
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              ['5+', 'Years of experience'],
              ['3', 'Azure certifications'],
              ['3', 'Countries of operation'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: '2.5rem',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  marginBottom: '0.25rem',
                }}>
                  {num}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
