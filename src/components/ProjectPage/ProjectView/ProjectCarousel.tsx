import { Project, Action } from '../projectTypes/projectTypes'

interface Props {
    project: Project
    projects: Project[]
    projectIndex: number
    dispatch: React.Dispatch<Action>
}

const ProjectCarouselMode = (projects: Project[], currentProject: Project, projectIndex: number, lastProjectIndex: number) => {

    let currentProjectIndex = projectIndex

    return projects.map((project, ProjectIndex) => {

        if (currentProject.projectName === project.projectName) {
            project.toggleProject = { viewing_Iframe: false, viewing_WireFrame: false }
            project.viewdStatus = true
            return project
        }
        if (currentProjectIndex === ProjectIndex) {
            project.toggleProject = { viewing_Iframe: true, viewing_WireFrame: false }
            project.viewdStatus = true
        } else {
            const lastProject = projects[lastProjectIndex]
            lastProject.toggleProject = { viewing_Iframe: true, viewing_WireFrame: false }
            return lastProject
        }

        return project
    })
}

const ProjectCarousel: React.FC<Props> = ({ project, projects, dispatch, projectIndex }) => {

    return (
        <>
            <button onClick={() => dispatch({ type: 'PREV', payload: ProjectCarouselMode(projects, project, projectIndex - 1, projects.length - 1) })}>PREV</button>
            <button onClick={() => dispatch({ type: 'NEXT', payload: ProjectCarouselMode(projects, project, projectIndex + 1, 0) })}>NEXT</button>
        </>
    )
}
export default ProjectCarousel
