import './Navigation.css'

const Navigation = () => {

    return (
        <>
            <div id='navigation-container'>
                <nav id="navigation">
                    <ul className="navigation-list">
                        <li><a href="#">about</a> </li>
                        <li><a href="#">projects</a> </li>
                        <li className='contacts'><a href="#">contacts</a></li>
                        <li><a href="#">resume</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Navigation
