import { Project, Props } from '../../@types-projectTypes/projectTypes'

const toggleCarouselMode = (projects: Project[], currentProject: Project,
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

const CarouselButtons: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    return (
        <>
            <button onClick={() => dispatch({
                type: 'PREV',
                payload: toggleCarouselMode(projects, project, currentProjectIndex - 1, projects.length - 1)
            })}>{'<'}</button>

            <button onClick={() => dispatch({
                type: 'NEXT',
                payload: toggleCarouselMode(projects, project, currentProjectIndex + 1, 0)
            })}>{'>'}</button>
        </>
    )
}
export default CarouselButtons
