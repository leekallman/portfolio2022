import React, { useState, useRef, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

const Cv = ({ FadeInSection }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    function GrowLine(props) {
        const [isVisible, setVisible] = useState(false);
        const lineRef = useRef();
        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(entry.isIntersecting);
                    }
                })
            });
            observer.observe(lineRef.current);
            return () => observer.unobserve(lineRef.current)
        }, []);
        return (
            <div
                className={`line ${isVisible ? 'is-visible' : ''}`}
                ref={lineRef}
            >
            </div>
        );
    }

    return (
        <div style={{
            margin: `0 auto`,
            padding: `0 2vh`,
        }}>
            <div className="cv">
                <a href="https://drive.google.com/file/d/1y350ZmZb5QsUqUeBnnvXgsJmE2KTjwlw/view?usp=sharing" target="_blank">
                    <StaticImage
                        src="../images/cv.svg"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="cv download button"
                        className="cvImg"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                    />
                </a>
                <div className="cvText">
                    <div className="education">
                        <FadeInSection>
                            <h3>2020-2022 | Hyper Island</h3>
                        </FadeInSection>
                        <FadeInSection>
                            <h4>Diploma Frontend Developer</h4>
                        </FadeInSection>
                    </div>

                    <div className="employments">
                        <GrowLine></GrowLine>
                        <div><FadeInSection>
                            <h3>2019-2021 | Freelance</h3>
                        </FadeInSection>
                            <FadeInSection>
                                <h4>Web Developer/Designer</h4>
                            </FadeInSection>
                        </div>
                        <div><FadeInSection>
                            <h3>2019-2020 | Engineers without borders</h3>
                        </FadeInSection>
                            <FadeInSection>
                                <h3 style={{ fontStyle: `italic` }}>Volunteer work</h3>
                            </FadeInSection>
                            <FadeInSection>
                                <h4>Incubation Project Coordinator</h4>
                            </FadeInSection>
                        </div>
                        <div> <FadeInSection>
                            <h3>2017-2020 | White Arkitekter</h3>
                        </FadeInSection>
                            <FadeInSection>
                                <h4>Project Manager</h4>
                            </FadeInSection>
                        </div>
                        <div><FadeInSection>
                            <h3>2016-2017 | ÅF</h3>
                        </FadeInSection>
                            <FadeInSection>
                                <h4>Project Manager</h4>
                            </FadeInSection>
                        </div>
                        <div><FadeInSection>
                            <h3>2014-2016 | Familjebostäder</h3>
                        </FadeInSection>
                            <FadeInSection>
                                <h4>Junior Project Manager</h4>
                            </FadeInSection>
                        </div>

                    </div>
                    <div><FadeInSection>
                        <h3>2011-2013 | Chalmers University of Technology</h3>
                    </FadeInSection>
                        <FadeInSection>
                            <h4>MSc Design for Sustainable Development</h4>
                        </FadeInSection>
                    </div>
                    <div><FadeInSection>
                        <h3>2012 | Newcastle University</h3>
                    </FadeInSection>
                        <FadeInSection>
                            <h4>Exchange studies MSc Urban planning</h4>
                        </FadeInSection>
                    </div>
                    <div><FadeInSection>
                        <h3>2007-2010 | Chalmers University of Technology</h3>
                    </FadeInSection>
                        <FadeInSection>
                            <h4>BSc Civil Engineering</h4>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cv;
