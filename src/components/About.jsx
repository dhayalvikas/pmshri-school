import './About.css'

const highlights = [
  {
    icon: '🏆',
    title: 'PM SHRI Scheme',
    desc: 'Selected in Phase 1 of Pradhan Mantri Schools for Rising India — a prestigious national model school program.',
  },
  {
    icon: '📘',
    title: 'NEP 2020 Aligned',
    desc: 'All elements of the National Education Policy 2020 are comprehensively demonstrated and implemented.',
  },
  {
    icon: '🤝',
    title: 'Mentor School',
    desc: 'We guide and support nearby government schools in Nechhwa block to improve their educational standards.',
  },
  {
    icon: '🎓',
    title: 'BSER Affiliated',
    desc: 'Affiliated to Board of Secondary Education, Rajasthan (BSER), Ajmer. Hindi medium, Nursery to Class XII.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-tag">About Our School</p>
            <h2 className="section-title">Building Future Leaders Through Quality Education</h2>
            <p className="about-para">
              PM SHRI Shahid Shakru Khan Govt. Senior Secondary School, Mangluna is committed to
              innovation, sustainability, digital learning and holistic student development under
              the PM SHRI initiative.
            </p>
            <p className="about-para">
              Our mission is to empower students with modern education, strong values, creativity
              and practical learning experiences — preparing them to become responsible citizens
              of tomorrow.
            </p>
            <div className="about-flag-strip">
              <div className="flag-saffron" />
              <div className="flag-white" />
              <div className="flag-green" />
            </div>
          </div>

          <div className="about-cards">
            {highlights.map(h => (
              <div key={h.title} className="about-card">
                <span className="about-card-icon">{h.icon}</span>
                <div>
                  <h3 className="about-card-title">{h.title}</h3>
                  <p className="about-card-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
