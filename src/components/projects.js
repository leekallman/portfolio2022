import React, {useState} from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Personal from "../components/personal";
import Student from "../components/student"


const Projects = ( {FadeInSection}) => {
    const { allContentfulPersonalProjects, allContentfulStudentProjects } = useStaticQuery(
        graphql`
        query {
            allContentfulStudentProjects {
                edges{
                    node{
                        index
                        title
                        description{
                            description
                        }
                        url
                        image{
                            title
                            gatsbyImageData(
                                quality: 100
                                placeholder: BLURRED)
                            id
                        }
                        period
                        github
                        type
                    }
                }
            }
            allContentfulPersonalProjects {
                edges{
                    node{
                        index
                        title
                        description{
                            description
                        }
                        url
                        image{
                            title
                            gatsbyImageData(
                                quality: 100
                                placeholder: BLURRED)
                            id
                        }
                        period
                        github
                        type
                    }
                }
            }
        }
        `
        )
        return (
            <div style={{width:`100vw`}}>
                <div style={{
                    background: `var(--white)`,
                    color: `var(--black)`,
                    padding: `2vw`,
                }}>
                    <div style={{ margin: `0 auto`}}>
                        <h2 style={{
                            textTransform: `uppercase`,
                            fontSize: `3vw`,
                            }}>
                        Personal Projects</h2>
                        <ul style={{ listStyle: `none`, marginLeft: `0` }}>
                            <li>
                                {allContentfulPersonalProjects.edges.map(({ node }) => (
                                    <Personal
                                    key={node.index}
                                    node={node}
                                    FadeInSection={FadeInSection}
                                    />
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{
                    background: `var(--red)`,
                    color: `var(--black)`,
                    padding: `2vw`,
                }}>
                    <div style={{ margin: `0 auto`}}>
                        <h2 style={{
                            textTransform: `uppercase`,
                            fontSize: `3vw`,
                            }}>
                        Student Projects</h2>
                        <ul style={{ listStyle: `none`, marginLeft: `0` }}>
                            <li>
                                {allContentfulStudentProjects.edges.map(({ node }) => (
                                    <Student
                                    key={node.index}
                                    node={node}
                                    FadeInSection={FadeInSection}
                                    />
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            );
            }
            
            export default Projects;
