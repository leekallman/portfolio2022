import React, { useEffect, useState } from 'react'
import PersonalModal from "./personalModal"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";


const Personal = ({ node, FadeInSection }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    useEffect(() => {
        const str = document.getElementById('child' + node.index)

        let text = ""
        str.innerText.split('').forEach(char => {
            if (char == " ") {
                char = "&nbsp;"
            }
            text += `<span class="char">${char}</span>`
        })
        str.innerHTML = text
        var clone = str.cloneNode(true);
        document.getElementById('parent' + node.index).appendChild(clone);
    }, [])


    const [closePersonal, setClosePersonal] = useState(true)
    const togglerPersonal = () => {
        setClosePersonal(prev => !prev)
    }
    return (
        <div className="personal">
            <button id={`parent` + node.index} style={{
                color: `var(--black)`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                border: `none`,
                background: `none`
            }} onClick={togglerPersonal} onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <h5 id={`child` + node.index}>{node.title}</h5>
            </button>
            <PersonalModal
                node={node}
                closePersonal={closePersonal}
                togglerPersonal={togglerPersonal}
                FadeInSection={FadeInSection}
            />
        </div>
    );
}

export default Personal;
