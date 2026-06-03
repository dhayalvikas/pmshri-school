import { useState } from 'react'
import './Gallery.css'

import plantation1 from '../assets/images/plantation1.jpeg'
import plantation2 from '../assets/images/plantation2.jpeg'
import plantation3 from '../assets/images/plantation3.jpeg'
import plantation4 from '../assets/images/plantation4.jpeg'
import cultural1 from '../assets/images/cultural1.jpeg'
import cultural2 from '../assets/images/cultural2.jpeg'
import cultural3 from '../assets/images/cultural3.jpeg'
import cultural4 from '../assets/images/cultural4.jpeg'
import community1 from '../assets/images/community1.jpeg'
import community2 from '../assets/images/community2.jpeg'
import nipun1 from '../assets/images/nipun1.jpeg'
import nipun2 from '../assets/images/nipun2.jpeg'
import nipun3 from '../assets/images/nipun3.jpeg'
import tlm1 from '../assets/images/tlm1.jpeg'
import tlm2 from '../assets/images/tlm2.jpeg'
import vocational1 from '../assets/images/vocational1.jpeg'
import vocational2 from '../assets/images/vocational2.jpeg'
import vocational3 from '../assets/images/vocational3.jpeg'
import ecoclub1 from '../assets/images/ecoclub1.jpeg'
import ecoclub2 from '../assets/images/ecoclub2.jpeg'
import ecoclub3 from '../assets/images/ecoclub3.jpeg'
import green1 from '../assets/images/green1.jpeg'
import green2 from '../assets/images/green2.jpeg'
import green3 from '../assets/images/green3.jpeg'
import invention1 from '../assets/images/invention1.jpeg'
import invention2 from '../assets/images/invention2.jpeg'
import science1 from '../assets/images/science1.jpeg'
import science2 from '../assets/images/science2.jpeg'
import science3 from '../assets/images/science3.jpeg'
import science4 from '../assets/images/science4.jpeg'

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'plantation', label: 'Plantation' },
  { id: 'cultural', label: 'Cultural' },
  { id: 'science', label: 'Science' },
  { id: 'vocational', label: 'Vocational' },
  { id: 'eco', label: 'Eco Club' },
  { id: 'green', label: 'Green School' },
  { id: 'learning', label: 'Learning' },
]

const allImages = [
  { src: plantation1, cat: 'plantation', label: 'Tree Plantation Drive' },
  { src: plantation2, cat: 'plantation', label: 'Ek Ped Maa Ke Naam' },
  { src: plantation3, cat: 'plantation', label: 'Campus Greening' },
  { src: plantation4, cat: 'plantation', label: 'Student Plantation' },
  { src: cultural1, cat: 'cultural', label: 'Cultural Assembly' },
  { src: cultural2, cat: 'cultural', label: 'Folk Dance Performance' },
  { src: cultural3, cat: 'cultural', label: 'Award Ceremony' },
  { src: cultural4, cat: 'cultural', label: 'Cultural Event' },
  { src: community1, cat: 'learning', label: 'SMC Training' },
  { src: community2, cat: 'learning', label: 'Community Session' },
  { src: nipun1, cat: 'learning', label: 'Nipun Mela' },
  { src: nipun2, cat: 'learning', label: 'Reading Activity' },
  { src: nipun3, cat: 'learning', label: 'Nipun Learning Fair' },
  { src: tlm1, cat: 'learning', label: 'TLM Distribution' },
  { src: tlm2, cat: 'learning', label: 'Teaching Materials' },
  { src: vocational1, cat: 'vocational', label: 'Vocational Field Visit' },
  { src: vocational2, cat: 'vocational', label: 'ITI Visit' },
  { src: vocational3, cat: 'vocational', label: 'Practical Training' },
  { src: ecoclub1, cat: 'eco', label: 'Eco Club Cleaning' },
  { src: ecoclub2, cat: 'eco', label: 'Campus Maintenance' },
  { src: ecoclub3, cat: 'eco', label: 'Youth Eco Activity' },
  { src: green1, cat: 'green', label: 'Green School Bus' },
  { src: green2, cat: 'green', label: 'Field Visit' },
  { src: green3, cat: 'green', label: 'Outdoor Learning' },
  { src: invention1, cat: 'science', label: 'Rashtriya Avishkar Abhiyan' },
  { src: invention2, cat: 'science', label: 'Science Exploration' },
  { src: science1, cat: 'science', label: 'Science Fair' },
  { src: science2, cat: 'science', label: 'Science & Math Circle' },
  { src: science3, cat: 'science', label: 'Group Experiment' },
  { src: science4, cat: 'science', label: 'Science Exhibition' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? allImages : allImages.filter(img => img.cat === active)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header-center">
          <p className="section-tag">Photo Gallery</p>
          <h2 className="section-title">Life at Our School</h2>
          <p className="section-desc">Browse through our activities, events and campus life captured over the years.</p>
        </div>

        <div className="gallery-filters">
          {categories.map(c => (
            <button
              key={c.id}
              className={`gallery-filter${active === c.id ? ' active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((img, i) => (
            <div key={i} className="gallery-item" onClick={() => setLightbox(img)}>
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} />
            <p>{lightbox.label}</p>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  )
}
