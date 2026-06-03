import './Facilities.css'

const facilities = [
  { icon: '🌿', title: 'Green Campus', desc: 'Eco-friendly school campus with gardens, plantation drives and clean surroundings.' },
  { icon: '🥗', title: 'Kitchen Garden', desc: 'Students learn organic farming and nutrition through hands-on kitchen gardening.' },
  { icon: '💻', title: 'Computer Lab', desc: 'Advanced computer education and digital literacy programs for all students.' },
  { icon: '⚽', title: 'Sports Facilities', desc: 'Encouraging physical fitness, teamwork and competitive spirit among students.' },
  { icon: '🏥', title: 'Medical Room', desc: 'Dedicated medical room for student health checks and first aid support.' },
  { icon: '📺', title: 'Smart Classrooms', desc: 'Technology-enabled modern classrooms with interactive projectors and digital tools.' },
  { icon: '📚', title: 'Digital Library', desc: 'Access to educational books, digital resources and reading materials.' },
  { icon: '🔬', title: 'Science Lab', desc: 'Well-equipped science laboratory for hands-on experiments and practical learning.' },
  { icon: '🌾', title: 'Agriculture Lab', desc: 'Vocational education in agriculture with practical field training for students.' },
  { icon: '🖥️', title: 'IT / ITeS Lab', desc: 'Vocational IT and information technology services training for career readiness.' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header-center">
          <p className="section-tag">What We Have</p>
          <h2 className="section-title">Modern Infrastructure<br />For Better Learning</h2>
          <p className="section-desc">
            Our school is equipped with world-class facilities to support holistic student development.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map(f => (
            <div key={f.title} className="facility-card">
              <span className="facility-icon">{f.icon}</span>
              <h3 className="facility-title">{f.title}</h3>
              <p className="facility-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
