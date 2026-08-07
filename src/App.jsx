import React from 'react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'
import Customers from './components/Customers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css';
const App = () => {
  Aos.init({
    duration: 1000,
    easing: 'ease-in-out',
  });
  return (
    <div>
      <Hero />
      <About/>
      <Projects/>
      <Customers/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
