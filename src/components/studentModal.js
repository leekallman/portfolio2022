import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import cancel from '../images/close.png'

const StudentModal = ({ node, closeStudent, togglerStudent, FadeInSection }) => {
    return (
        <div style={{
            height: `100vh`,
            margin: `0 auto`,
            background: `var(--black)`,
            color: `var(--grey)`,
            position: `fixed`,
            left: `0`,
            right: `0`,
            top: `0`,
            transition: `opacity 0.5s ease-in-out`,
        }} className={`modal ${closeStudent ? 'hide' : 'show'}`}>
            <FadeInSection>
                <h2 className="modalTitle" style={{ textTransform: `uppercase`, color: `var(--red)` }}>{node.type}</h2>
            </FadeInSection>
            <FadeInSection>
                <GatsbyImage className="projectImg" image={getImage(node.image)} layout={node.image.gatsbyImageData.FULL_WIDTH} keys={node.image.title} alt={node.image.title} />
            </FadeInSection>
            <FadeInSection>
                <h3 className="modalHeading">{node.title}</h3>
            </FadeInSection>
            <FadeInSection>
                <div className="modalText">
                    <p className="modalDescription" >{node.description.description}</p>
                    <p className="modalPeriod">[{node.period}]</p>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="modalLinks">
                    <a href={node.url} aria-label="link to project build">
                        website
                    </a>
                    <a href={node.github} aria-label="link to github">
                        github
                    </a>
                </div>
            </FadeInSection>
            <FadeInSection>
                <button className="closeButton" aria-label="Close" onClick={togglerStudent}>
                    <img src={cancel} alt="close-button" />
                </button>
            </FadeInSection>
        </div>
    );
}

export default StudentModal;