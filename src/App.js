import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Freelancing from './components/Freelancing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div>
      <Navbar   />
      <Home />
      <About />
      <Services />
      <Freelancing />
      <Contact />
      <Footer />

        
      </div>
    </>
  )
}

export default App
