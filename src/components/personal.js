import React, { useEffect, useRef, useState } from 'react'
import PersonalModal from "./personalModal"


const Personal = ({ node, FadeInSection }) => {
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
        <div>
            <button id={`parent` + node.index} style={{
                color: `var(--black)`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                border: `none`,
                background: `none`
            }} onClick={togglerPersonal}>
                <h5 style={{
                    margin: 0,
                    fontSize: `7vw`
                }} id={`child` + node.index}>
                    {node.title}
                </h5>
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
