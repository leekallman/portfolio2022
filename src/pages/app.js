import React from 'react';
import Hero from "../components/hero"
import About from "../components/about"
import Cv from "../components/cv"
import Projects from "../components/projects"
import Contact from "../components/contact"
import { useState, useEffect, useRef } from "react"
import DotRing from "../components/cursor/cursor";


function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      })
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current)
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function App() {
  return (
    <div className="app">
      <DotRing />
      <Hero />
      <About FadeInSection={FadeInSection} />
      <Projects FadeInSection={FadeInSection} />
      <Cv FadeInSection={FadeInSection} />
      <Contact />
    </div>
  );
}

export default App;
