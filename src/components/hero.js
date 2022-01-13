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
                        onMouseLeave={() => cursorChangeHandler("")}><div className="static">Frontend Developer</div><div className="dynamic"><p>Frontend Developer</p></div></div> and creative coder based in Stockholm.
                    I’m a current <div className="heroAnimation" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}><div className="static">Hyper Island student</div><div className="dynamic"><p>Hyper Island student</p></div></div> with freelance experience and a former <div className="heroAnimation" onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}><span className="static">Project Manager</span><span className="dynamic"><p>Project Manager</p></span></div> in the fields of civil engineering and architecture.</div>
            </div>
        </div>
    );
}

export default Hero;
