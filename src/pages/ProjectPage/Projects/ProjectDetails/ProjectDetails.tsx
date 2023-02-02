import './ProjectDetails.css'
import { Project } from "../../types-projectTypes/projectTypes"

interface Props {
    project: Project
    viewDetails?: boolean
}
const projectDetails = 'project-details'
const ProjectDetails: React.FC<Props> = ({ project, viewDetails }) => {
    return (
        <>
            <div
                className={`${project.viewdStatus && !viewDetails ?
                    `${projectDetails}-viewd` :
                    `${projectDetails}`} project-details`}>

                <h3>{project.projectName}</h3>
                <p>{project.projectDescription}</p>
                <p>{project.projectTools}</p>
            </div>
        </>
    )
}

export default ProjectDetails
