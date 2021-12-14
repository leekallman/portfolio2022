import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import cancel from '../images/close.png'

const PersonalModal = ({ node, closePersonal, togglerPersonal, FadeInSection }) => {
    // const [animate, setAnimate] = useState(false);

    // useEffect(() => {
    //     if (window.sessionStorage.getItem("firstLoadDone") === null) {
    //         setAnimate(true)

    //         window.sessionStorage.setItem("firstLoadDone", 1)
    //     }
    //     else {
    //         setAnimate(false)
    //     }
    // })

    return (
        <div style={{
            height: `100vh`,
            margin: `0 auto`,
            padding: `0 4vh`,
            background: `var(--black)`,
            color: `var(--grey)`,
            position: `fixed`,
            left: `0`,
            right: `0`,
            top: `0`,
            transition: `opacity 0.5s ease-in-out`,
        }} className={closePersonal ? 'hide' : 'show'}>
            <FadeInSection>
                <h2 style={{ fontSize: `8vw`, textTransform: `uppercase`, color: `var(--red)` }}>{node.type}</h2>
            </FadeInSection>
            <FadeInSection>
                <div style={{ display: `flex` }} >
                    <GatsbyImage image={getImage(node.image)} layout={node.image.gatsbyImageData.FULL_WIDTH} keys={node.image.title} alt={node.image.title} />
                    <div style={{width: `30vw`, marginLeft: `2vw`}}>
                    <p style={{textTransform: `uppercase`, fontSize:`1vw`, margin:`0`}}>{node.period}</p>
                    <p style={{fontSize:`1.5vw`, lineHeight:`2vw`}}>{node.description.description}</p>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <h3 style={{marginTop:`1vw`}}>{node.title}</h3>
            </FadeInSection>
            <FadeInSection>
            <div style={{display: 'flex', position: `absolute`, bottom: `2vw`, right: `21vw`}}>
            <a href={node.url} aria-label="link to project build" style={{border:`1px solid var(--red)`, borderRadius:`30px`, padding:`2px 20px`, fontSize:`1vw`, marginRight:`1vw`}}>
                web
            </a>
            <a href={node.github} aria-label="link to github" style={{border:`1px solid var(--red)`, borderRadius:`30px`, padding:`2px 20px`, fontSize:`1vw`}}>
                github
            </a>
            </div>
            </FadeInSection>
            <FadeInSection>
                <button aria-label="Close" onClick={togglerPersonal} style={{ position: `absolute`, bottom: `2vw`, right: `2vw` }}>
                    <img style={{ width: `7vw` }} src={cancel} alt="close-button" />
                </button>
            </FadeInSection>
        </div>
    );
}

export default PersonalModal;