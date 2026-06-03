import { useState, useEffect } from 'react'
import pmshriIcon from '../assets/images/favicon.png'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" onClick={() => handleLink('#home')}>
          <img src={pmshriIcon} alt="PM SHRI" className="navbar-logo-img" />
          <div className="navbar-title">
            <span className="title-main">Shahid Shakru Khan GSSS</span>
            <span className="title-sub">Mangluna, Sikar, Rajasthan</span>
          </div>
        </a>

        <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <button key={l.href} onClick={() => handleLink(l.href)} className="nav-link">
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
