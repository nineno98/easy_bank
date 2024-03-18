import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Whyas from './components/Whyas'
import Latest from './components/Latest'
import Footer from './components/Footer'





const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whyas />
      <Latest />
      <Footer />
    </div>
  )
}

export default App