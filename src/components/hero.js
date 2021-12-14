import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <div style={{ height: `100vh`,
        margin: `0 auto`,
        padding: `0 4vh`,
    }}>
    <StaticImage
    src="../images/hero-image.png"
    width={900}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="placeholder"
    style={{ marginBottom: `1.45rem`,
position: `absolute`}}
    />
    <h1 style={{ textTransform: `uppercase` }}>Lisa Lee</h1>
    <p style={{ 
        fontSize: `3.5vw`,
        lineHeight: `1.2`,
        marginTop:`30vw`,
    }}
    >
    I’m a Frontend Developer and creative coder with freelance experience. 
    I’m a current Hyper Island student and a former 
    Project Manager in the fields of civil engineering and architecture.</p>
    {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
    </div>
    );
}

export default Hero;
