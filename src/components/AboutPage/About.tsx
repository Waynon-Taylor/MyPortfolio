import './About.css'

const About = () => {
    return (
        <>
            <div id='about-page'>
                <section id='about-details'>
                    <div id='about'>
                        <h2>Who am i ?</h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdol. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dignissimos m
                            </p>
                            <p>
                                ore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis no
                                Lorem ipsum dolor sit amet 
                            </p>
                        </div>
                    </div>
                    <section id='contacts' >
                        <h2>Contacts</h2>
                        <div>
                            <ul>
                                <li>
                                    <p>Linkedin</p>
                                    <a target= "_blank" href="https://www.linkedin.com/in/wayon-taylor-331b1a224/">linkedin.com/wayontaylor</a>
                                </li>

                                <li>
                                    <p>Github</p>
                                    <a target= "_blank" href="https://github.com/The-taylord">github.com/The-taylord</a>
                                </li>
                                <li>
                                    <p>Behance</p>
                                    <a target= "_blank" href="https://www.behance.net/wayontaylors?tracking_source=search_users|wayon%20taylor">behance.net/wayontaylor</a>
                                </li>
                                <li>
                                    <a>Gmail</a> 
                                    <a href="mailto:waynontaylor@gmail.com">waynontaylor@gmail.com</a> 
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
                <div id='skills'>
                    <h2>Skills</h2>
                    <div id='skills-container'>
                        <ul>
                            <li>Typescript</li>
                            <li>React.js</li>
                            <li>Javascript</li>
                            <li>Redux.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <ul>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Figma</li>
                            <li>Webpack</li>
                            <li>Git & Github</li>
                            <li>Jest.js</li>
                        </ul>
                        <ul>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
