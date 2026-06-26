import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'Vendor Manifest Audit Logging System',
    summary:
      'Designed and deployed an audit logging solution for vendor manifest processing at UPS Mail Innovations, providing end-to-end traceability and improving regulatory compliance across operational pipelines.',
    outcome: 'Full compliance traceability',
    stack: ['SQL Server', 'PowerShell', 'Azure'],
  },
  {
    number: '02',
    title: 'CI/CD Pipeline Implementation',
    summary:
      'Built and maintained CI/CD pipelines using Jenkins and Azure DevOps to automate deployment processes for enterprise applications, reducing manual release effort and enabling continuous integration across teams.',
    outcome: 'Streamlined deployments',
    stack: ['Jenkins', 'Azure DevOps', 'Git', 'Python'],
  },
  {
    number: '03',
    title: 'Power BI Operations Dashboard',
    summary:
      'Developed an executive-facing Power BI dashboard aggregating weekly performance metrics from cloud and on-premises systems, enabling data-driven decisions by senior management at UPS.',
    outcome: 'Actionable weekly insights',
    stack: ['Power BI', 'SQL', 'Azure', 'Tableau'],
  },
  {
    number: '04',
    title: 'Azure DevOps Automation Toolkit',
    summary:
      'Designed automation tools using Azure DevOps that enabled efficient data storage and execution with minimal manual coding, significantly reducing operational overhead during the UPS co-op engagement.',
    outcome: 'Reduced operational overhead',
    stack: ['Azure DevOps', 'Python', 'PowerShell', 'SQL'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{
      borderTop: '1px solid var(--rule)',
      padding: '6rem 2.5rem',
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
              color: 'var(--ink-muted)',
            }}
          >
            04 — Projects
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
              color: 'var(--ink)',
            }}
          >
            Selected work
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '2.5rem',
                borderTop: '1px solid var(--rule)',
                borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                transition: 'background 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(196,82,42,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: '3rem',
                lineHeight: 1,
                color: 'var(--rule)',
                display: 'block',
                marginBottom: '1.25rem',
              }}>
                {p.number}
              </span>

              <h3 style={{
                fontFamily: 'var(--serif)',
                fontWeight: 500,
                fontSize: '1.15rem',
                color: 'var(--ink)',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>
                {p.title}
              </h3>

              <p style={{
                color: 'var(--ink-light)',
                fontSize: '0.93rem',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
                maxWidth: '36ch',
              }}>
                {p.summary}
              </p>

              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}>
                ↑ {p.outcome}
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-muted)',
                    border: '1px solid var(--rule)',
                    padding: '0.2rem 0.5rem',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
