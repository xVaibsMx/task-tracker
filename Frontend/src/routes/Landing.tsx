import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default Landing
