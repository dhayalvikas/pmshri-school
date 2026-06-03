import schoolBuilding from '../assets/images/school_building.jpeg'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${schoolBuilding})` }} />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          PM SHRI — Pradhan Mantri Schools for Rising India
        </div>
        <h1 className="hero-title">
          Shahid Shakru Khan<br />
          <span className="hero-title-accent">Govt. Sr. Sec. School</span>
        </h1>
        <p className="hero-subtitle">
          Mangluna · Nechhwa · Sikar · Rajasthan
        </p>
        <p className="hero-desc">
          Empowering students through innovation, sustainability and holistic education under NEP 2020.
        </p>
        <div className="hero-actions">
          <button className="btn-hero-primary" onClick={() => scrollTo('#about')}>
            Explore School
          </button>
          <button className="btn-hero-outline" onClick={() => scrollTo('#contact')}>
            Contact Us
          </button>
        </div>

        <div className="hero-stats">
          {[
            { num: 'NUR–XII', label: 'Classes' },
            { num: '10+', label: 'Facilities' },
            { num: 'NEP 2020', label: 'Aligned' },
            { num: 'BSER', label: 'Affiliated' },
          ].map(s => (
            <div key={s.label} className="hero-stat">
              <span className="stat-n">{s.num}</span>
              <span className="stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
