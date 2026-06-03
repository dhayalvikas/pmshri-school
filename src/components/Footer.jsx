import pmshriLogo from '../assets/images/pmshri_logo.png'
import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={pmshriLogo} alt="PM SHRI" className="footer-logo-img" />
            <div>
              <p className="footer-name">Shahid Shakru Khan GSSS</p>
              <p className="footer-addr">Mangluna, Nechhwa, Sikar, Rajasthan — 213196</p>
              <p className="footer-tagline">Empowering students through innovation, sustainability and digital education.</p>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Facilities', '#facilities'],
              ['Activities', '#activities'],
              ['Gallery', '#gallery'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <button key={href} className="footer-link" onClick={() => scrollTo(href)}>
                {label}
              </button>
            ))}
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Activities</h4>
            {[
              'Paudha Ropan',
              'Vigyan Mela',
              'Nipun Mela',
              'Eco Club',
              'Cultural Programs',
              'Vocational Education',
            ].map(a => (
              <span key={a} className="footer-item">{a}</span>
            ))}
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Scheme Info</h4>
            <p className="footer-scheme-text">
              This school is selected under PM SHRI (Pradhan Mantri Schools for Rising India) Scheme, Phase 1.
            </p>
            <p className="footer-scheme-text" style={{ marginTop: 10 }}>
              Implementing NEP 2020 and mentoring nearby government schools.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PM SHRI Shahid Shakru Khan GSSS, Mangluna. All Rights Reserved.</p>
          <p>Affiliated to BSER, Ajmer · Govt. of Rajasthan</p>
        </div>
      </div>
    </footer>
  )
}
