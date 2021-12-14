import React, { useEffect } from 'react';

const Contact = () => {
    return (
        <div style={{
            background: `var(--grey)`,
            color: `var(--black)`,
            padding: `4vh`,
        }}>
            <div
                style={{
                    margin: `0 auto`,
                }}
            >
                <h2 style={{
                    textTransform: `uppercase`,
                    fontSize: `3vh`,
                }}>Contact</h2>
                <h5 style={{
                    margin: 0,
                    fontSize: `10vh`
                }}>
                    <ul style={{ listStyle: `none`, marginLeft: `0` }}>
                        <li id="parentLinkedin"><a
                            to="https://linkedin.com/in/lisaleekallman"
                            style={{
                                color: `var(--black)`,
                                textDecoration: `none`,
                                textTransform: `uppercase`,
                            }}
                            id="childLinkedin"
                        >
                            LinkedIn
                        </a>
                        </li>
                        <li id="parentEmail">
                            <a
                                href="mailto: lisaleekallman@gmail.com"
                                style={{
                                    color: `var(--black)`,
                                    textDecoration: `none`,
                                    textTransform: `uppercase`,
                                }}
                                id="childEmail"
                            >
                                Email
                            </a>
                        </li>
                    </ul>

                </h5>
            </div>
        </div>
    );
}

export default Contact;
