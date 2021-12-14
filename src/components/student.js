import React, {useState} from 'react'
import StudentModal from "./studentModal"


const Student = ({node, FadeInSection}) => {
    const [closeStudent, setCloseStudent] = useState(true)
    const togglerStudent = () => {
        setCloseStudent(prev => !prev)
    }
    return (
        <div>
            <button style={{
                color: `var(--black)`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                border: `none`,
                background: `none`
            }} onClick={togglerStudent} id={node.index}>
                <h5 style={{
                    margin: 0,
                    fontSize: `7vw`
                }}>
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


