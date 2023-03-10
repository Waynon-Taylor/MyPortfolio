import { Project } from "../projectTypes/projectTypes"

interface Props {
    project: Project
    viewDetails?: boolean

}

const ProjectDetails: React.FC<Props> = ({ project, viewDetails }) => {
    const { viewdStatus, projectName, projectDescription, projectTools } = project
    return (
        <>
            <div className={`${viewdStatus && !viewDetails ? `project-details-viewd` : 'project-details-static-font-size-enabled'} project-details`}>

                <div className="project-description-container">
                    <h3 className="project-name">{projectName}</h3>
                    <p className="project-description">{projectDescription}</p>
                </div>
                <div className="project-tools-container">
                    <h4>Tools:</h4>
                    <p className='project-tools '>{projectTools}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails
