import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// function FadeInSection(props) {
//         const [isVisible, setVisible] = useState(false);
//         const domRef = useRef();
//         useEffect(() => {
//             const observer = new IntersectionObserver(entries => {
//                 entries.forEach(entry => setVisible(entry.isIntersecting));
//             });
//             observer.observe(domRef.current);
//         }, []);
//         return (
//             <div
//                 className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
//                 ref={domRef}
//             >
//                 {props.children}
//             </div>
//         );
//     }
const About = ({ FadeInSection }) => {
    return (
        <div style={{
            height: `100vh`,
            margin: `0 auto`,
            padding: `0 5vh`,
            display: `flex`
        }}>
            <StaticImage
                src="../images/portrait.jpg"
                width={500}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Portrait of Lisa Lee"
                imgStyle={{}}
                style={{
                    height: `200px`,
                    marginLeft: `70vh`,
                    marginTop: `30vh`,
                    marginRight: `1.0875rem`
                }}
            />
            <div style={{
                fontSize: `3vh`,
                marginTop: `30vh`
            }}>
                <FadeInSection >
                    <span>Since I started coding 2019, I have been involved in </span>
                </FadeInSection>
                <FadeInSection >
                    <span>starting a paper print magazine, started the </span>
                </FadeInSection>
                <FadeInSection >
                    <span>Southside 19 association that arrange community markets in Stockholm </span>
                </FadeInSection>
                <FadeInSection >
                    <span>suburbs and finally(?) decided to change career.</span>
                </FadeInSection>
                <FadeInSection >
                    <span>My primarily focus now is to aquire more backend</span>
                </FadeInSection>
                <FadeInSection >
                    <span>knowledge and experience, to become a fullstack developer that can xxx</span>
                </FadeInSection>
                <FadeInSection >
                    <span>With my background within sustainability,  I intend to continue</span>
                </FadeInSection>
                <FadeInSection >
                    <span> to create products and solutions that have a positive impact </span>
                </FadeInSection>
                <FadeInSection >
                    <span>on people and the future. I believe that success is derived </span>
                </FadeInSection>
                <FadeInSection >
                    <span>from collaborative teams where inclusiveness, equality and individual</span>
                </FadeInSection>
                <FadeInSection >
                    <span>growth form the foundation.</span>
                </FadeInSection>
            </div>
        </div>
    );
}

export default About;
