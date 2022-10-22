import './ProjectDetails.css'
import { Project } from "../../@types-projectTypes/projectTypes"

interface Props {
    project: Project
    viewDetails?: boolean
}

const ProjectDetails: React.FC<Props> = ({ project, viewDetails }) => {
    return (
        <>
            <div className={`${project.viewdStatus && !viewDetails ? 'project-details-viewd-color' : 'project-details-color'} project-details`}>
                <h3>{project.projectName}</h3>
                <p>{project.projectDescription}</p>
                <p>{project.projectTools}</p>
            </div>
        </>
    )
}

export default ProjectDetails
