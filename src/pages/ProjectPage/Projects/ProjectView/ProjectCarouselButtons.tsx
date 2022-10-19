import { Project, Props } from '../../@types-projectTypes/projectTypes'

const ProjectCarouselMode = (projects: Project[], currentProject: Project,
    nextProjectIndex: number, lastProjectIndex: number) => {

    return projects.map((project, ProjectIndex) => {

        if (currentProject.projectName === project.projectName) {
            project.toggleProject = { viewing_Iframe: false, viewing_WireFrame: false }
            return project
        }
        if (nextProjectIndex === ProjectIndex) {
            project.toggleProject = { ...project.toggleProject, viewing_Iframe: true }
            project.viewdStatus = true
        } else {
            const lastProject = projects[lastProjectIndex]
            lastProject.toggleProject = { ...project.toggleProject, viewing_Iframe: true }
            lastProject.viewdStatus = true
            return lastProject
        }
        return project
    })
}

const ProjectCarouselButtons: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    return (
        <>
            <button onClick={() => dispatch({
                type: 'PREV',
                payload: ProjectCarouselMode(projects, project, currentProjectIndex - 1, projects.length - 1)
            })}>PREV</button>

            <button onClick={() => dispatch({
                type: 'NEXT',
                payload: ProjectCarouselMode(projects, project, currentProjectIndex + 1, 0)
            })}>NEXT</button>
        </>
    )
}
export default ProjectCarouselButtons
