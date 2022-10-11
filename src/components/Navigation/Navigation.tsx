import './Navigation.css'

const Navigation = () => {

    return (
        <>
            <div id='navigation-container'>
                <nav id="navigation">
                    <div id='full-name'><p><span className='first-name'>Wayon</span> Taylor</p></div>
                    <ul className="navigation-list">
                        <li>About</li>
                        <li>Projects</li>
                        <li className='contacts'>Contacts</li>
                        <li>Resume</li>
                    </ul>
                    <div id="select-slider"></div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
