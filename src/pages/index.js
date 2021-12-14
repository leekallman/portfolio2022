import * as React from "react"
import { useState, useEffect, useRef } from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Cv from "../components/cv"
import Projects from "../components/projects"
import Contact from "../components/contact"

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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About FadeInSection={FadeInSection} />
    <Projects FadeInSection={FadeInSection} />
    <Cv FadeInSection={FadeInSection} />
    <Contact />
  </Layout>
)

export default IndexPage
