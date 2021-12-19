import React, { useState, useEffect } from 'react'
import StudentModal from "./studentModal"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";


const Student = ({ node, FadeInSection }) => {
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

    const [closeStudent, setCloseStudent] = useState(true)
    const togglerStudent = () => {
        setCloseStudent(prev => !prev)
    }
    return (
        <div className="student" >
            <button style={{
                color: `var(--black)`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                border: `none`,
                background: `none`
            }} onClick={togglerStudent} id={`parent` + node.index} onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <h5 id={`child` + node.index}>
                    {node.title}
                </h5>
            </button>
            <StudentModal
                node={node}
                closeStudent={closeStudent}
                togglerStudent={togglerStudent}
                FadeInSection={FadeInSection}
            />
        </div>
    );
}

export default Student;


