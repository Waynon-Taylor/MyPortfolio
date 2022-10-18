import { Project } from '../projectTypes/projectTypes'
import './ProjectView.css'

interface Props {
    project: Project
    children: React.ReactNode
}

const ProjectView: React.FC<Props> = ({ children, project }) => {

    return (
        <>
            {project.toggleProject.viewing_Iframe ? <div>iframe</div> : null}
            {project.toggleProject.viewing_WireFrame ? <div>wireFrame</div> : null}
            {children}
        </>
    )
}

export default ProjectView
