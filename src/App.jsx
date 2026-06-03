import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Activities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
