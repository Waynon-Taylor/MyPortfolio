
import { Project } from "../../../@types-projectTypes/projectTypes"

interface Props {
    project: Project
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
    return (
        <>
            <div className='project-details'>
                <h3>{project.projectName}</h3>
                <p>{project.projectDescription}</p>
                <p>{project.projectTools}</p>
            </div>
        </>
    )
}

export default ProjectDetails
