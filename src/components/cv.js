import React from 'react';

const Cv = ({FadeInSection}) => {
    return (
        <div style={{
        margin: `0 auto`,
        padding: `0 4vh`,
    }}>
            <div style={{width:`50%`,
        marginTop:`10vh`,
        marginLeft:`20vh`,
        marginBottom:`40vh`}}>
                <div><FadeInSection>
                    <h3>2020-2022 | Hyper Island</h3>
                    </FadeInSection>
                    <FadeInSection>
                    <h4>Diploma Frontend Developer</h4>
                    </FadeInSection>
                </div>
                <div className="join"> </div>
                <div style={{marginLeft:`20vh`}}>
                    <div><FadeInSection>
                        <h3>2019-2020 | Tort Magazine</h3>
                        </FadeInSection>
                        <FadeInSection>
                        <h4>Assistant Chief Editor, Web Designer</h4>
                        </FadeInSection>
                    </div>
                    <div><FadeInSection>
                        <h3>2019-2020 | Engineers without borders</h3>
                        </FadeInSection>
                        <FadeInSection>
                        <h3 style={{fontStyle:`italic`}}>Volunteer work</h3>
                        </FadeInSection>
                        <FadeInSection>
                        <h4>Incubation Project Coordinator</h4>
                        </FadeInSection>
                    </div>
                    <div> <FadeInSection>
                        <h3>2017-2020 | White Arkitekter</h3>
                        </FadeInSection>
                        <FadeInSection>
                        <h4>Project Manager</h4>
                        </FadeInSection>
                    </div>
                    <div><FadeInSection>
                        <h3>2016-2017 | ÅF</h3>
                        </FadeInSection>
                        <FadeInSection>
                        <h4>Project Manager</h4>
                        </FadeInSection>
                    </div>
                    <div><FadeInSection>
                        <h3>2014-2016 | Familjebostäder</h3>
                        </FadeInSection>
                        <FadeInSection>
                        <h4>Junior Project Manager</h4>
                        </FadeInSection>
                    </div>
                    
                </div>
                <div><FadeInSection>
                    <h3>2011-2013 | Chalmers University of Technology</h3>
                    </FadeInSection>
                        <FadeInSection>
                    <h4>MSc Design for Sustainable Development</h4>
                    </FadeInSection>
                </div>
                <div><FadeInSection>
                    <h3>2012 | Newcastle University</h3>
                    </FadeInSection>
                        <FadeInSection>
                    <h4>Exchange studies MSc Urban planning</h4>
                    </FadeInSection>
                </div>
                <div><FadeInSection>
                    <h3>2007-2010 | Chalmers University of Technology</h3>
                    </FadeInSection>
                        <FadeInSection>
                    <h4>BSc Civil Engineering</h4>
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
}

export default Cv;
