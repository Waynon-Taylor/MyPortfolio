import { Project } from "../@types-projectTypes/projectTypes"

export const toggleProjectViewd = (currentProject: Project, projects: Project[],
    toggleIframe: boolean, toggleWireFrame: boolean) => {

    return projects.map((project: Project) => {
        if (project.projectName === currentProject.projectName) {
            project.toggleProject = { viewing_Iframe: toggleIframe, viewing_WireFrame: toggleWireFrame }
            project.viewdStatus = true
            return project
        }
        return project
    })
}


export const toggleCarouselMode = (projects: Project[], currentProject: Project,
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
