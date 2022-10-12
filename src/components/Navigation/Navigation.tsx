import './Navigation.css'

const Navigation = () => {

    return (
        <>
            <div id='navigation-container'>
                <nav id="navigation">
                    <div id='full-name'>
                        <p><span className='first-name'>Wayon</span> Taylor</p>
                    </div>
                    <ul className="navigation-list">
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Projects</a> </li>
                        <li className='contacts'><a href="#">Contacts</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                    <div id="select-slider"></div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
