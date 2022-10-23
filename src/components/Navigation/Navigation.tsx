import './Navigation.css'
import { Link } from 'react-router-dom'
const Navigation: React.FC = () => {

    return (
        <>
            <div id='navigation-container'>
                <nav id="navigation">
                    <ul className="navigation-list">
                        <li><Link to="/">about</Link> </li>
                        <li><Link to="/projects">projects</Link> </li>
                        <li className='contacts'><Link to="/">contacts</Link> </li>
                        <li><a href="#">resume</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation
