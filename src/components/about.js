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
                    <span>At Hyper Island, I have had </span>
                </FadeInSection>
                <FadeInSection >
                    <span>the opportunity to learn from </span>
                </FadeInSection>
                <FadeInSection >
                    <span>industry professionals, gain </span>
                </FadeInSection>
                <FadeInSection >
                    <span>relevant knowledge and experience </span>
                </FadeInSection>
                <FadeInSection >
                    <span>of the latest technologies and </span>
                </FadeInSection>
                <FadeInSection >
                    <span>work in agile development teams </span>
                </FadeInSection>
                <FadeInSection >
                    <span>for real clients. I have acquired </span>
                </FadeInSection>
                <FadeInSection >
                    <span>basic knowledge in HTML, CSS, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>JavaScript, React and Node.js, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>been introduced to UX/UI-design, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>accessibility, working with </span>
                </FadeInSection>
                <FadeInSection >
                    <span>databases, APIs and TDD etc. </span>
                </FadeInSection>
                <FadeInSection >
                    <span>In addition, I have taken every </span>
                </FadeInSection>
                <FadeInSection >
                    <span>chance to challenge myself </span>
                </FadeInSection>
                <FadeInSection >
                    <span>and my creative ability by </span>
                </FadeInSection>
                <FadeInSection >
                    <span>trying new frameworks and </span>
                </FadeInSection>
                <FadeInSection >
                    <span>libraries to add exciting </span>
                </FadeInSection>
                <FadeInSection >
                    <span>elements in my design. </span>
                </FadeInSection>
                <br />
                <br />
                <FadeInSection >
                    <span>Parallel with my studies, </span>
                </FadeInSection>
                <FadeInSection >
                    <span>I have worked on side projects </span>
                </FadeInSection>
                <FadeInSection >
                    <span>such as being involved in starting </span>
                </FadeInSection>
                <FadeInSection >
                    <span>a magazine and arranging community </span>
                </FadeInSection>
                <FadeInSection >
                    <span>markets in three of Stockholm's </span>
                </FadeInSection>
                <FadeInSection >
                    <span>southern suburbs. </span>
                </FadeInSection>
                <FadeInSection >
                    <span>Knowing that what I do will leave </span>
                </FadeInSection>
                <FadeInSection >
                    <span>a positive impact on people and </span>
                </FadeInSection>
                <FadeInSection >
                    <span>the future is a strong motivating </span>
                </FadeInSection>
                <FadeInSection >
                    <span>factor for me and is something I </span>
                </FadeInSection>
                <FadeInSection >
                    <span>intend to continue doing. </span>
                </FadeInSection>
                <FadeInSection >
                    <span>From Hyper I bring with me valuable </span>
                </FadeInSection>
                <FadeInSection >
                    <span>insights and tools to foster team </span>
                </FadeInSection>
                <FadeInSection >
                    <span>development and self-leadership.</span>
                </FadeInSection>
            </div>
        </div >
    );
}

export default About;


