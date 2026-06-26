import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const jobs = [
  {
    role: 'Technology Support Associate',
    company: 'UPS Mail Innovations',
    location: 'Atlanta, GA',
    period: 'May 2025 — Present',
    bullets: [
      'Provide L2/L3 production support for enterprise applications including SQL Server, cloud-based platforms, and operational pipelines.',
      'Design and maintain automation scripts in PowerShell and SQL for data ingestion, event tracking, and manifest processing.',
      'Troubleshoot and resolve issues in databases, USPS event ingestion, vendor manifests, and Sort processes to ensure minimal downtime.',
      'Developed audit logging solutions for vendor manifests, improving compliance and traceability.',
      'Support CI/CD pipelines and collaborate on Azure Data Factory/Databricks workflows for data engineering initiatives.',
    ],
    tags: ['SQL Server', 'PowerShell', 'Azure', 'CI/CD', 'Databricks'],
  },
  {
    role: 'Co-op Engineer',
    company: 'United Parcel Services',
    location: 'Timonium, MD',
    period: 'Sept 2023 — April 2025',
    bullets: [
      'Developed and implemented CI/CD pipelines using Jenkins to streamline deployment processes and ensure continuous integration.',
      'Designed automation tools using Azure DevOps, enabling efficient data storage and execution with minimal coding requirements.',
      'Troubleshot and resolved issues within cloud and on-premises environments, documenting solutions for team knowledge base.',
      'Generated, analysed, and presented weekly performance reports via Power BI to senior management.',
    ],
    tags: ['Jenkins', 'Azure DevOps', 'Power BI', 'Python', 'Git'],
  },
  {
    role: 'Engineer — Cloud & Infrastructure',
    company: 'L&T Infotech',
    location: 'Bangalore, India',
    period: 'Jan 2021 — Jun 2022',
    bullets: [
      'Served as Azure Administrator, managing cloud infrastructure and services across the organisation.',
      'Gained hands-on experience with Linux, Windows, and network server environments through comprehensive training.',
      'Administered servers, networks, and Office 365 environments in a co-op capacity.',
    ],
    tags: ['Azure', 'Linux', 'Windows', 'Office 365', 'Networking'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} style={{
      borderTop: '1px solid var(--rule)',
      padding: '6rem 2.5rem',
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
        }} className="exp-outer-grid">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              display: 'block',
              marginBottom: '1rem',
            }}>
              03 — Experience
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          </motion.div>

          <div>
            {jobs.map((job, i) => (
              <motion.div
                key={job.role + job.company}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  paddingBottom: '3rem',
                  marginBottom: i < jobs.length - 1 ? '3rem' : 0,
                  borderBottom: i < jobs.length - 1 ? '1px solid var(--rule)' : 'none',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.25rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    color: 'var(--ink)',
                  }}>
                    {job.role}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                    whiteSpace: 'nowrap',
                  }}>
                    {job.period}
                  </span>
                </div>

                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                }}>
                  {job.company} &mdash; {job.location}
                </p>

                <ul style={{
                  paddingLeft: '1.1rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem',
                }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={{
                      color: 'var(--ink-light)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                    }}>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {job.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-muted)',
                      border: '1px solid var(--rule)',
                      padding: '0.25rem 0.6rem',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-outer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
