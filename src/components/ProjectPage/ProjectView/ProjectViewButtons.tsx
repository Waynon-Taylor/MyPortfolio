import { Project } from '../projectTypes/projectTypes'
import Buttons from "../Buttons/Buttons"

interface Props {
    project: Project
    projects: Project[]
    currentProjectIndex: number
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

const ProjectViewButtons: React.FC<Props> = ({ project: currentProject, currentProjectIndex, projects, setProjects }) => {

    const toggleNextProject = () => {

        setProjects(projects.map((project, projectIndex) => {
            if (currentProjectIndex === projectIndex) {
                project.toggleProject = false
                project.viewdStatus = true
            }

            if (currentProjectIndex + 1 === projectIndex) {
                project.toggleProject = true
                project.viewdStatus = true
            }

            if (currentProjectIndex === projects.length - 1 && currentProjectIndex === projectIndex) {
                project.toggleProject = false
                projects[0].toggleProject = true
            }
            return project
        }))
    }
    
    const closeCurrentProjectView = () => {
        setProjects(projects.map((project) => {
            if (currentProject.projectName === project.projectName) {
                project.toggleProject = false
            }
            return project
        }))
    }
    return (
        <>
            <div>
                <button>INFO</button>
                <Buttons
                    project={currentProject}
                    projects={projects}
                />
                <button onClick={toggleNextProject}>NEXT</button>
                <button onClick={closeCurrentProjectView}>CLOUSE</button>
            </div>
        </>
    )
}

export default ProjectViewButtons
