import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import Instagram from '../components/Instagram'

const HomePage = () => {
  return (
    <>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Gallery />
        <Blog />
        <Instagram />
    </>
  )
}

export default HomePage
