import './Navigation.css'

const Navigation = () => {

    return (
        <>
            <div id='navigation-container'>
                <nav id="navigation">
                    <ul className="navigation-list">
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Projects</a> </li>
                        <li className='contacts'><a href="#">Contacts</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Navigation
