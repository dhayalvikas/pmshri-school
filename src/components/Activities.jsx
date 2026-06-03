import { useState } from 'react'
import './Activities.css'

import plantation1 from '../assets/images/plantation1.jpeg'
import plantation2 from '../assets/images/plantation2.jpeg'
import plantation3 from '../assets/images/plantation3.jpeg'
import cultural1 from '../assets/images/cultural1.jpeg'
import cultural2 from '../assets/images/cultural2.jpeg'
import vocational1 from '../assets/images/vocational1.jpeg'
import vocational2 from '../assets/images/vocational2.jpeg'
import ecoclub1 from '../assets/images/ecoclub1.jpeg'
import ecoclub2 from '../assets/images/ecoclub2.jpeg'
import science1 from '../assets/images/science1.jpeg'
import science2 from '../assets/images/science2.jpeg'
import science3 from '../assets/images/science3.jpeg'
import invention1 from '../assets/images/invention1.jpeg'
import nipun1 from '../assets/images/nipun1.jpeg'
import nipun2 from '../assets/images/nipun2.jpeg'
import green1 from '../assets/images/green1.jpeg'
import green2 from '../assets/images/green2.jpeg'

const activities = [
  {
    id: 'plantation',
    tag: 'Environment',
    title: 'Paudha Ropan — Ek Ped Maa Ke Naam',
    desc: 'A community tree plantation drive where students and staff plant trees in memory of their mothers. This initiative promotes environmental awareness and green living on campus.',
    images: [plantation1, plantation2, plantation3],
    color: '#e8f5ee',
    accent: '#0B6E4F',
  },
  {
    id: 'cultural',
    tag: 'Culture',
    title: 'Sanskritic Karyakram (Cultural Programs)',
    desc: "Annual cultural events showcasing students' talent in dance, drama, music and other performing arts. These programs celebrate Indian culture and build student confidence.",
    images: [cultural1, cultural2],
    color: '#fff3e8',
    accent: '#e87722',
  },
  {
    id: 'science',
    tag: 'Innovation',
    title: 'Vigyan Mela & Science-Math Kit',
    desc: 'Science fair and Math Circle activities promoting inquiry-based learning, innovation and creative thinking among students through experiments and competitions.',
    images: [science1, science2, science3],
    color: '#e8f0ff',
    accent: '#3b5bdb',
  },
  {
    id: 'invention',
    tag: 'Discovery',
    title: 'Rashtriya Avishkar Abhiyan',
    desc: 'National Innovation Campaign engages students in science explorations, field visits to science centres and hands-on STEM activities to spark curiosity and invention.',
    images: [invention1],
    color: '#f0e8ff',
    accent: '#7048e8',
  },
  {
    id: 'vocational',
    tag: 'Skills',
    title: 'Vyavsayik Shiksha (Vocational Education)',
    desc: 'Hands-on vocational training in Agriculture and IT/ITeS with industrial exposure visits. Students gain practical skills and real-world readiness for future careers.',
    images: [vocational1, vocational2],
    color: '#fff8e8',
    accent: '#cc7a00',
  },
  {
    id: 'ecoclub',
    tag: 'Eco Club',
    title: 'Youth & Eco Club Activities',
    desc: 'Student-led environmental club maintains campus greenery, organises cleanliness drives and promotes sustainable practices, building responsible environmental citizens.',
    images: [ecoclub1, ecoclub2],
    color: '#e8f5ee',
    accent: '#2f9e44',
  },
  {
    id: 'green',
    tag: 'Green School',
    title: 'Harit Vidyalaya Karyakram',
    desc: 'Green School Program with Kitchen Garden, Swachhata Pakhwada, field visits and special environmental discussions. The school leads by example in sustainability.',
    images: [green1, green2],
    color: '#e8faf0',
    accent: '#0B6E4F',
  },
  {
    id: 'nipun',
    tag: 'Learning',
    title: 'Nipun Mela — Learning Festival',
    desc: 'Foundational literacy and numeracy fair where students showcase reading and math skills. A joyful celebration of learning achievements under the NIPUN Bharat Mission.',
    images: [nipun1, nipun2],
    color: '#fce8f0',
    accent: '#c2255c',
  },
]

export default function Activities() {
  const [active, setActive] = useState(0)

  return (
    <section id="activities" className="activities">
      <div className="container">
        <div className="section-header-center">
          <p className="section-tag">School Life</p>
          <h2 className="section-title">Activities & Programs</h2>
          <p className="section-desc">
            From science fairs to plantation drives — a vibrant calendar of activities
            shapes our students into well-rounded individuals.
          </p>
        </div>

        <div className="activities-tabs">
          {activities.map((a, i) => (
            <button
              key={a.id}
              className={`act-tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
              style={active === i ? { background: a.color, color: a.accent, borderColor: a.accent } : {}}
            >
              <span className="act-tab-tag">{a.tag}</span>
            </button>
          ))}
        </div>

        {activities.map((a, i) => (
          <div key={a.id} className={`act-panel${active === i ? ' visible' : ''}`}>
            <div className="act-panel-inner">
              <div className="act-images">
                {a.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${a.title} ${idx + 1}`} className="act-img" loading="lazy" />
                ))}
              </div>
              <div className="act-info">
                <span className="act-tag" style={{ background: a.color, color: a.accent }}>{a.tag}</span>
                <h3 className="act-title">{a.title}</h3>
                <p className="act-desc">{a.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
