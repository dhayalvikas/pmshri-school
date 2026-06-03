import './Contact.css'
import qrCode from '../assets/images/qr_code.jpeg'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header-center">
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">Contact Our School</h2>
          <p className="section-desc">
            We welcome parents, students and visitors. Reach out to us for admissions,
            information or any queries.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <h3 className="contact-card-title">School Address</h3>
                <p className="contact-card-text">
                  PM SHRI Shahid Shakru Khan Govt. Senior Secondary School<br />
                  Mangluna, Nechhwa Block<br />
                  Sikar District, Rajasthan — 213196
                </p>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">🏛️</span>
              <div>
                <h3 className="contact-card-title">Board Affiliation</h3>
                <p className="contact-card-text">
                  Board of Secondary Education Rajasthan (BSER), Ajmer<br />
                  Medium: Hindi<br />
                  Classes: Nursery to XII
                </p>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">🕐</span>
              <div>
                <h3 className="contact-card-title">School Hours</h3>
                <p className="contact-card-text">
                  Monday to Saturday<br />
                  Summer: 7:30 AM – 1:00 PM<br />
                  Winter: 10:00 AM – 4:00 PM<br />
                  <span className="contact-sub">Closed on Sundays & Public Holidays</span>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">🌐</span>
              <div>
                <h3 className="contact-card-title">PM SHRI Scheme</h3>
                <p className="contact-card-text">
                  Selected in Phase 1 of PM SHRI<br />
                  Under Ministry of Education, Govt. of India<br />
                  NEP 2020 Implementing School
                </p>
              </div>
            </div>
          </div>

          <div className="contact-map-side">
            <div className="qr-card">
              <img src={qrCode} alt="School QR Code" className="qr-img" />
              <p className="qr-label">Scan to visit our school profile</p>
            </div>

            <div className="contact-map-placeholder">
              <span className="map-icon">🗺️</span>
              <p>Mangluna, Nechhwa, Sikar</p>
              <a
                href="https://maps.google.com/?q=Mangluna+Nechhwa+Sikar+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
