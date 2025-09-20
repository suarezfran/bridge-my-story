import { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Typewriters from './components/Typewriters'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const nameRef = useRef(null)
  const containerRef = useRef(null)

  // Sections data
  const sections = [
    {
      id: 0,
      title: "Francisco Suarez",
      subtitle: "Developer & Creator",
      showName: true,
      bgOpacity: 0.1
    },
    {
      id: 1, 
      title: "The Journey Begins",
      subtitle: "From Uruguay to the Golden Gate",
      bgOpacity: 0.3
    },
    {
      id: 2,
      title: "San Francisco",
      subtitle: "Where Dreams Meet Innovation",
      bgOpacity: 0.6
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress
      const progress = scrollTop / (documentHeight - windowHeight)
      setScrollProgress(Math.min(progress, 1))
      
      // Determine current section
      const sections = document.querySelectorAll('.scroll-section')
      let current = 0
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          current = index
        }
      })
      
      setCurrentSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (index) => {
    const section = document.querySelector(`[data-section="${index}"]`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }


  return (
    <div className="app-container" ref={containerRef}>
      {/* Golden Gate Bridge Background */}
      <div className="golden-gate-bg">
        <motion.div 
          className="bg-overlay"
          style={{
            opacity: sections[currentSection]?.bgOpacity || 0.1
          }}
        />
      </div>

      {/* Progress Indicator */}
      <motion.div 
        className="progress-indicator"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="progress-bar">
          <motion.div 
            className="progress-fill"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="progress-text">
          {Math.round(scrollProgress * 100)}%
        </div>
      </motion.div>

      {/* Section Navigation */}
      <motion.div 
        className="section-nav"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`section-dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={section.title}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="scroll-content">
        {/* Hero Section with Name Animation */}
        <motion.section 
          className="scroll-section hero-section"
          data-section="0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <motion.div
              ref={nameRef}
              className="hero-name"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Typewriters />
            </motion.div>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Welcome to my digital journey
            </motion.p>

            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, 10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 2 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <span className="scroll-text">Scroll to explore</span>
              <div className="scroll-arrow">↓</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section 
          className="scroll-section journey-section"
          data-section="1"
        >
          <motion.div
            className="journey-content"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">The Journey</h2>
            <p className="section-description">
              From the shores of Montevideo to the hills of San Francisco,
              this is a story of dreams, code, and endless possibilities.
            </p>
            
            <div className="journey-stats">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Miles Traveled</div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="stat-number">∞</div>
                <div className="stat-label">Dreams</div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="stat-number">1</div>
                <div className="stat-label">Golden Gate</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* San Francisco Section */}
        <motion.section 
          className="scroll-section sf-section"
          data-section="2"
        >
          <motion.div
            className="sf-content"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title gradient-text">San Francisco</h2>
            <p className="section-description">
              Where innovation meets artistry, and where every line of code
              can change the world. Welcome to the city of endless possibilities.
            </p>
            
            <motion.div
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      {/* Particles Effect */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App