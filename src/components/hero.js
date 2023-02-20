import React from 'react';
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

const Hero = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className="hero">
            <div>
                <h1 className="heroHeading">Lisa Lee</h1>
                <div className="heroDescription">
                    I’m a <div className="heroAnimation" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}><div className="static">Digital Designer</div><div className="dynamic"><p>Digital Designer</p></div></div> and Creative Developer based in Stockholm.
                    I’m a <div className="heroAnimation" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}><div className="static">Hyper Island alumni</div><div className="dynamic"><p>Hyper Island alumni</p></div></div> with freelance experience and several years of experience as<div className="heroAnimation" onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}><span className="static">Project Manager</span><span className="dynamic"><p>Project Manager</p></span></div> in the fields of Civil Engineering and Architecture.</div>
            </div>
        </div>
    );
}

export default Hero;
