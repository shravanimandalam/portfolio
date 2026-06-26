import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 2.5rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '5.5rem',
        left: '2.5rem',
        right: '2.5rem',
        borderTop: '1px solid var(--rule)',
      }} />

      <motion.span
        {...fadeUp(0.1)}
        style={{
          position: 'absolute',
          top: '5rem',
          right: '2.5rem',
          fontFamily: 'var(--sans)',
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          paddingTop: '1.2rem',
        }}
      >
        Portfolio — 2026
      </motion.span>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        fontSize: 'clamp(18rem, 40vw, 36rem)',
        lineHeight: 1,
        color: 'transparent',
        WebkitTextStroke: '1px var(--rule)',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        S
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
            marginBottom: '1rem',
          }}
        >
          Technology Support Associate &amp; Cloud Infrastructure Engineer
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '2rem',
          }}
        >
          Shravani<br />
          <em>Rangaswamy</em><br />
          Mandalam
        </motion.h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <motion.a
            {...fadeUp(0.5)}
            href="#experience"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--ink)',
              padding: '0.85rem 2rem',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
          >
            View Experience
          </motion.a>

          <motion.a
            {...fadeUp(0.6)}
            href="#contact"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-light)',
              borderBottom: '1px solid var(--rule)',
              paddingBottom: '2px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-light)'; e.currentTarget.style.borderColor = 'var(--rule)' }}
          >
            Get in touch
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--sans)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'var(--rule)' }}
        />
        Scroll
      </motion.div>
    </section>
  )
}
