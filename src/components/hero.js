import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <div className="hero">
            {/* <StaticImage
                src="../images/hero-image.png"
                width={900}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="placeholder"
                style={{
                    marginBottom: `1.45rem`,
                    position: `absolute`
                }}
            /> */}
            <h1 className="heroHeading">Lisa Lee</h1>
            <p class="heroDescription">
                I’m a <div className="heroAnimation"><div className="static">Frontend Developer</div><div className="dynamic"><p>Frontend Developer</p></div></div> and creative coder based in Stockholm.
                I’m a current <div className="heroAnimation"><div className="static">Hyper Island student</div><div className="dynamic"><p>Hyper Island student</p></div></div> with some freelance experience and a former <div className="heroAnimation"><span className="static">Project Manager</span><span className="dynamic"><p>Project Manager</p></span></div> in the fields of civil engineering and architecture.</p>
            {/* <p>
    </p> */}
        </div>
    );
}

export default Hero;
