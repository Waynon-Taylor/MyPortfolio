import './Buttons.css'
import { ProjectLinks } from '../projectTypes/projectTypes'

interface Props {
    projectLinks: ProjectLinks
    setViewStatus: React.Dispatch<React.SetStateAction<boolean>>
    children?: React.ReactNode
}

const Buttons: React.FC<Props> = ({ projectLinks, setViewStatus }) => {

    const toggleProjectView = () => setViewStatus(true)

    return (
        <>
            <div>
                <button onClick={toggleProjectView}>IFRAME</button>
                <button onClick={toggleProjectView}>WIREFRAME</button>
                <button><a href={projectLinks.URL}>URL</a></button>
                <button><a href={projectLinks.REPO}>REPO</a></button>
            </div>
        </>
    )
}

export default Buttons
