import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

const About = ({ FadeInSection }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className="about">
            <StaticImage
                src="../images/portrait.jpg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Portrait of Lisa Lee"
                className="profileImg"
                onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            />
            <div className="aboutText">
                <FadeInSection >
                    <span>I’m a multi-disciplinary </span>
                </FadeInSection>
                <FadeInSection >
                    <span>designer and developer with a great </span>
                </FadeInSection>
                <FadeInSection >
                    <span>interest in innovation, sustainability and </span>
                </FadeInSection>
                <FadeInSection >
                    <span>digital development. I have a background </span>
                </FadeInSection>
                <FadeInSection >
                    <span>in civil engineering and sustainability along </span>
                </FadeInSection>
                <FadeInSection >
                    <span>with several years of experience </span>
                </FadeInSection>
                <FadeInSection >
                    <span>as a project manager in architecture </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and property development. I was </span>
                </FadeInSection>
                <FadeInSection >
                    <span>drawn to tech and digital design </span>
                </FadeInSection>
                <FadeInSection >
                    <span>because of my curiosity for design </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and code and the urge to </span>
                </FadeInSection>
                <FadeInSection >
                    <span>use my creativity to leave a </span>
                </FadeInSection>
                <FadeInSection >
                    <span>positive impact, and after </span>
                </FadeInSection>
                <FadeInSection >
                    <span>several years in the construction </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and design sector I jumped on </span>
                </FadeInSection>
                <FadeInSection >
                    <span>the opportunity to deepen my </span>
                </FadeInSection>
                <FadeInSection >
                    <span>new code and design skills at Hyper Island. </span>
                </FadeInSection>
                <br />
                <br />
                <FadeInSection >
                    <span>At Hyper I gained, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>except for design and frontend fundamentals, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>useful tools to craft my own path, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and strengthened my entrepreneurial spirit </span>
                </FadeInSection>
                <FadeInSection >
                    <span>of self leadership and belief </span>
                </FadeInSection>
                <FadeInSection >
                    <span>in team development as a success factor </span>
                </FadeInSection>
                <FadeInSection >
                    <span>for thriving teams and sustainable growth. </span>
                </FadeInSection>
                <br />
                <br />
                <FadeInSection >
                    <span>Since 2019, I have been freelancing </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and actively been striving to </span>
                </FadeInSection>
                <FadeInSection >
                    <span>develop as a designer within an ever evolving </span>
                </FadeInSection>
                <FadeInSection >
                    <span>creative field. I have worked on side </span>
                </FadeInSection>
                <FadeInSection >
                    <span>projects such as being involved </span>
                </FadeInSection>
                <FadeInSection >
                    <span>in starting a paper print magazine, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>supporting startups with design services, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and been working for the local community </span>
                </FadeInSection>
                <FadeInSection >
                    <span>by being part of creating a infectiously </span>
                </FadeInSection>
                <FadeInSection >
                    <span>growing community market tradition </span>
                </FadeInSection>
                <FadeInSection >
                    <span>in four of Stockholm's southern suburbs. </span>
                </FadeInSection>
                <br />
                <br />
                <FadeInSection >
                    <span>Knowing that what I do will leave </span>
                </FadeInSection>
                <FadeInSection >
                    <span>a positive impact on people and </span>
                </FadeInSection>
                <FadeInSection >
                    <span>the future is a strong motivating factor </span>
                </FadeInSection>
                <FadeInSection >
                    <span>for me and is something I intend to continue doing.</span>
                </FadeInSection>
            </div>
        </div >
    );
}

export default About;


