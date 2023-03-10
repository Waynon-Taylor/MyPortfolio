import './AboutPage.css'

const skillsData = [
    {
        category: 'Languages',
        skills: ['typescript', 'javascript', 'sql', 'python', 'html', 'css']
    }, {
        category: 'Libraries',
        skills: ['react.js', 'redux.js', 'jest.js']
    }, {
        category: 'UED Tools',
        skills: ['photoshop', 'illustrator', 'figma']
    }, {
        category: 'Others',
        skills: ['webPack', 'git', 'github', 'vs code']
    },
]

const contactData = [
    {
        option: 'Gmail',
        link: 'mailto:waynontaylor@gmail.com',
        linkText: 'waynontaylor@gmail.com'
    }, {
        option: 'Linkedin',
        link: 'https://www.linkedin.com/in/wayon-taylor-331b1a224/',
        linkText: 'linkedin.com/wayontaylor'
    }, {
        option: 'Github',
        link: 'https://github.com/Waynon-Taylor',
        linkText: 'github.com/Waynon-Taylor'
    }, {
        option: 'Behance',
        link: 'https://www.behance.net/wayontaylors?tracking_source=search_users|wayon%20taylor',
        linkText: 'linkedin.com/wayontaylor'
    },
]

const AboutPage: React.FC = () => {
    return (
        <>
            <div id='about-page'>
                <section id='about'>
                    <h2>Hello!</h2>
                    <p id='about-description'>
                        I'm Waynon Taylor, a frontend engineer with a passion for creating beautiful, intuitive, and accessible experiences. Find some of my work over on the Projects Page.
                    </p>
                    <a id='contact-button' href="#contacts">Get In Touch</a>
                </section>

                <section id='skill-section'>
                    <h2>Technologies</h2>
                    <div id='skills-container'>
                        {skillsData.map(skillData => {
                            return <div className="skill-category-container">
                                {/* <p className="skill-category-name">{`${skillData.category}`}</p> */}
                                <ul className="skill-category-list">
                                    {skillData.skills.map(skill => {
                                        return <li className="skill-category-skill">{skill}</li>
                                    })}
                                </ul>
                            </div >
                        })}
                    </div>
                </section>

                <section id='contacts' >
                    <h2>Get In Touch </h2>
                    <div><ul>
                        {contactData.map(contact => {
                            return (
                                <li>
                                    <p>{contact.option}</p>
                                    <a target="_blank" href={contact.link}>{contact.linkText}</a>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutPage


