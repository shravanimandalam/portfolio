import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
  {
    degree: "Master's in Data Science",
    school: 'University of Maryland, Baltimore County',
    location: 'Maryland, USA',
    period: 'Aug 2022 — Jun 2024',
    note: 'Big data processing, machine learning algorithms, SQL programming, Power BI',
  },
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    school: 'Indian University',
    location: 'India',
    period: 'Aug 2016 — Sep 2020',
    note: null,
  },
]

const certs = [
  { title: 'AZ-400', sub: 'Designing & Implementing Microsoft DevOps Solutions', issuer: 'Microsoft' },
  { title: 'AZ-104', sub: 'Azure Administrator Associate', issuer: 'Microsoft' },
  { title: 'AZ-900', sub: 'Azure Fundamentals', issuer: 'Microsoft' },
  { title: 'LTI Certified', sub: 'Cloud & Infrastructure Service Professional', issuer: 'L&T Infotech' },
  { title: 'Python for Data Science', sub: 'IBM Certification', issuer: 'IBM' },
  { title: 'SE Virtual Experience', sub: 'Software Engineering @ JP Morgan', issuer: 'Forage' },
  { title: 'Business English', sub: 'Certificate of Proficiency', issuer: 'University of Cambridge' },
  { title: 'AWS Training', sub: 'Professional & Machine Learning', issuer: 'Amazon Web Services' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} style={{
      borderTop: '1px solid var(--rule)',
      padding: '6rem 2.5rem',
      background: 'rgba(26,24,20,0.03)',
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        {/* Education */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          marginBottom: '5rem',
        }} className="edu-grid">
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
              05 — Education
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          </motion.div>

          <div>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{
                  marginBottom: i < education.length - 1 ? '2.5rem' : 0,
                  paddingBottom: i < education.length - 1 ? '2.5rem' : 0,
                  borderBottom: i < education.length - 1 ? '1px solid var(--rule)' : 'none',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.25rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 500,
                    fontSize: '1.15rem',
                    color: 'var(--ink)',
                  }}>
                    {edu.degree}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                  }}>
                    {edu.period}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: edu.note ? '0.75rem' : 0,
                }}>
                  {edu.school} &mdash; {edu.location}
                </p>
                {edu.note && (
                  <p style={{ color: 'var(--ink-light)', fontSize: '0.9rem' }}>
                    {edu.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
        }} className="edu-grid">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
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
              06 — Certifications
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'var(--rule)',
            border: '1px solid var(--rule)',
          }} className="certs-grid">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.06 }}
                style={{
                  background: 'rgba(250,247,242,0.97)',
                  padding: '1.4rem 1.5rem',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(250,247,242,0.97)'}
              >
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: 'var(--ink)',
                  marginBottom: '0.2rem',
                }}>
                  {cert.title}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.68rem',
                  color: 'var(--ink-muted)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.4,
                }}>
                  {cert.sub}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>
                  {cert.issuer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
