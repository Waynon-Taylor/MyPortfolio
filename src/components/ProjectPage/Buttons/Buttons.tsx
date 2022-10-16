import './Buttons.css'
import { Project } from '../projectTypes/projectTypes'
interface Props {
    project: Project
    projects: Project[]
    toggleProjectViewd?: (project: Project, projects: Project[]) => void
    children?: React.ReactNode
}

const Buttons: React.FC<Props> = ({ project, projects, toggleProjectViewd }) => {

    return (
        <>
            <div>
                <button onClick={() => toggleProjectViewd!(project, projects)}>IFRAME</button>
                <button onClick={() => toggleProjectViewd!(project, projects)}>WIREFRAME</button>
                <button><a href={project.projectLinks.URL}>URL</a></button>
                <button><a href={project.projectLinks.REPO}>REPO</a></button>
            </div>
        </>
    )
}

export default Buttons
