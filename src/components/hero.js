import React from 'react';

import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <div className="hero">
            <StaticImage
                src="../images/hero-image.png"
                width={900}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="placeholder"
                style={{
                    marginBottom: `1.45rem`,
                    position: `absolute`
                }}
            />
            <h1 className="heroHeading">Lisa Lee</h1>
            <p class="heroDescription">
                I’m a Frontend Developer and creative coder based in Stockholm.
                I’m a current Hyper Island student with some freelance experience and a former
                Project Manager in the fields of civil engineering and architecture.</p>
            {/* <p>
    </p> */}
        </div>
    );
}

export default Hero;
