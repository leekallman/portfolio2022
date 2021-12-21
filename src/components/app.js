import React from 'react';
import Hero from "../components/hero"
import About from "../components/about"
import Cv from "../components/cv"
import Projects from "../components/projects"
import Contact from "../components/contact"
import { useState, useEffect, useRef } from "react"

const App = () => {
    return (
        <div>
                <Hero />
    <About FadeInSection={FadeInSection} />
    <Projects FadeInSection={FadeInSection} />
    <Cv FadeInSection={FadeInSection} />
    <Contact />
        </div>
    );
}

export default App;
