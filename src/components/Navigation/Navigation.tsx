import './Navigation.css'
import { Link } from 'react-router-dom'
import resume from '../../assets/images/waynon-resume.pdf'

const Navigation: React.FC = () => {

    return (
        <>
            <div id='navigation-container'>
                <nav id="navigation">
                    <ul className="navigation-list">
                        <li><Link to="/">About</Link> </li>
                        <li><Link to="/projects">Projects</Link> </li>
                        <li><a href={resume} target='_blank'>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation
