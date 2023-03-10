import { Project } from "../projectTypes/projectTypes"

export const updateCurrentProjectViewStatus = (currentProject: Project, projects: Project[]) => {

    if (!currentProject.viewdStatus) {
        const projectsCopy: Project[] = JSON.parse(JSON.stringify(projects))

        return projectsCopy.map(project => {
            if (project.projectName === currentProject.projectName) {
                project.viewdStatus = true
            }
            return project
        })
    }
    return projects
}

export const toggleProjectViewOptions = (
    currentProject: Project,
    projects: Project[],
    toggleIFrame: boolean,
    toggleWireFrame: boolean) => {

    const projectsCopy: Project[] = JSON.parse(JSON.stringify(projects))
    return projectsCopy.map((project: Project) => {

        const { viewing_Iframe, viewing_WireFrame } = project
        if (viewing_Iframe) project.viewing_Iframe = false;
        if (viewing_WireFrame) project.viewing_WireFrame = false;

        if (currentProject.projectName === project.projectName) {
            project.viewing_Iframe = toggleIFrame;
            project.viewing_WireFrame = toggleWireFrame;
            project.viewdStatus = true
            return project
        }
        return project
    })
}


export const projectsCarouselMode = (projects: Project[], currentProject: Project, nextProjectIndex: number) => {
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
