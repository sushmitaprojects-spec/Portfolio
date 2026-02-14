import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import WelcomeScreen from './components/WelcomeScreen'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollToHash from './components/ScrollToHash'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <Router>
      <ScrollToHash />
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  )
}

export default App
