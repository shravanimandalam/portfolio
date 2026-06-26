import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  {
    title: 'Cloud & DevOps',
    skills: ['Microsoft Azure', 'Azure DevOps', 'Azure Data Factory', 'Databricks', 'Jenkins', 'CI/CD Pipelines', 'Git'],
  },
  {
    title: 'Programming & Scripting',
    skills: ['Python', 'SQL', 'PowerShell', 'Java', 'C / C++', 'Bash', 'HTML / CSS', 'Flask / Jinja'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Power BI', 'Tableau', 'Machine Learning', 'NLP', 'Big Data', 'Data Visualization', 'Pandas'],
  },
  {
    title: 'Systems & Support',
    skills: ['Windows Administration', 'Linux', 'SQL Server', 'Network Troubleshooting', 'USPS Event Ingestion', 'Office 365'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} style={{
      borderTop: '1px solid var(--rule)',
      padding: '6rem 2.5rem',
      background: 'var(--ink)',
      color: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,242,0.4)',
            }}
          >
            02 — Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: 'var(--cream)',
            }}
          >
            Tools of the trade
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }} className="skills-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '2.5rem',
                borderTop: '1px solid rgba(250,247,242,0.1)',
                borderRight: ci % 2 === 0 ? '1px solid rgba(250,247,242,0.1)' : 'none',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
                fontWeight: 500,
              }}>
                {cat.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map(skill => (
                  <li
                    key={skill}
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.95rem',
                      color: 'rgba(250,247,242,0.75)',
                      border: '1px solid rgba(250,247,242,0.15)',
                      padding: '0.3rem 0.8rem',
                      transition: 'color 0.2s, border-color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--cream)'
                      e.currentTarget.style.borderColor = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(250,247,242,0.75)'
                      e.currentTarget.style.borderColor = 'rgba(250,247,242,0.15)'
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
