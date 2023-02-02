import { Project } from "../types-projectTypes/projectTypes"

export const toggleProjectViewd = (
    currentProject: Project,
    projects: Project[],
    toggleIframe: boolean,
    toggleWireFrame: boolean) => {

    const projectsCopy: Project[] = JSON.parse(JSON.stringify(projects))
    return projectsCopy.map((project: Project) => {
        if (project.projectName === currentProject.projectName) {
            project = { ...project, viewing_Iframe: toggleIframe, viewing_WireFrame: toggleWireFrame }
            project.viewdStatus = true
            return project
        }
        return project
    })
}

export const toggleCarouselMode = (
    projects: Project[],
    currentProject: Project,
    nextProjectIndex: number) => {

    const projectsCopy: Project[] = JSON.parse(JSON.stringify(projects))
    return projectsCopy.map((project, ProjectIndex) => {

        if (currentProject.projectName === project.projectName) {
            project = { ...project, viewing_Iframe: false, viewing_WireFrame: false }
            return project
        }

        if (nextProjectIndex === ProjectIndex) {
            project = { ...project, viewing_Iframe: true }
            project.viewdStatus = true
            return project
        }

        if (nextProjectIndex === projectsCopy.length) {
            let fisrtProject = projectsCopy[0]
            fisrtProject = { ...fisrtProject, viewing_Iframe: true }
            fisrtProject.viewdStatus = true
            nextProjectIndex = 0
            return fisrtProject
        }

        return project
    })
}
