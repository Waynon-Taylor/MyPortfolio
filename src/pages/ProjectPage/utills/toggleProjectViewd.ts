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
