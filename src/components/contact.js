import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {

        const linkedin = document.getElementById('childLinkedin');
        const email = document.getElementById('childEmail');
        const links = [linkedin, email]

        links.forEach(str => {
            let text = ""
            str.innerText.split('').forEach(char => {
                if (char == " ") {
                    char = "&nbsp;"
                }
                text += `<span class="char">${char}</span>`
            })
            str.innerHTML = text
            const clone = str.cloneNode(true);
            str.parentNode.appendChild(clone);
        })

    }, [])
    return (
        <div className="contact" style={{
            background: `var(--grey)`,
            color: `var(--black)`
        }}>
            <div style={{ margin: `0 auto`}}>
                <h2 className="contactscHeading">Contact</h2>
                <ul style={{listStyle:`none`, marginLeft: `0`}}>
                    <li>
                    <a href="https://linkedin.com/in/lisaleekallman" target="_blank"
                        style={{
                            color: `var(--black)`,
                            textDecoration: `none`,
                            textTransform: `uppercase`,
                            display: `inline-block`
                        }} id="parentLinkedin">
                        <h5 id="childLinkedin">LinkedIn</h5>
                    </a>
                    </li>
                    <li>
                    <a href="mailto: lisaleekallman@gmail.com"
                        style={{
                            color: `var(--black)`,
                            textDecoration: `none`,
                            textTransform: `uppercase`,
                            display: `inline-block`
                        }} id="parentEmail">
                            <h5 id="childEmail">Email</h5>
                    </a>
                    </li>
                </ul>

                   
            </div>
        </div>
    );
}

export default Contact;
