import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Carousel from "./components/InfiniteCarousel";
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Carousel />
        <Projects />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;