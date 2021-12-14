import React, { useEffect, useRef, useState } from 'react'
import PersonalModal from "./personalModal"


const Personal = ({ node, FadeInSection }) => {
    const [closePersonal, setClosePersonal] = useState(true)
    const togglerPersonal = () => {
        setClosePersonal(prev => !prev)
    }
    // let projectRef = useRef(null);
    // const [projectId, setProjectId] = useState("")

    // const selectProject = (event) => {

    //     let id = event.currentTarget.id;
    //     console.log(id);
    //     if (id === projectRef.current.id) {
    //         toggler.call(projectRef.current)
    //     }
    //     console.log(node.title)
    // }
    // useEffect(() => {
    //     setProjectId(projectRef.current);
    // // }, []);
    // const selectProject = (event) => {
    //     let id = event.target.id,
    //         project = document.getElementById(`project` + id);
    //     toggler.call(project);
    // }
    return (
        <div>
            <button id={node.index} style={{
                color: `var(--black)`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                border: `none`,
                background: `none`
            }} onClick={togglerPersonal}>
                <h5 style={{
                    margin: 0,
                    fontSize: `7vw`
                }} >
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
