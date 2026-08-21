import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Process from './sections/Process'
import Portfolio from './sections/Portfolio'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo">NOVA<span>.</span></div>
            <p>Premium Automotive Studio</p>
          </div>

          <p>© 2026 NOVA DETAIL. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App