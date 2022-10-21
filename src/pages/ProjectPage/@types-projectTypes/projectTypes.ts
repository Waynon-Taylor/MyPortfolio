export type ProjectLinks = {
    IFRAME: string,
    WIREFRAME: string,
    URL: string,
    REPO: string
}

export type ToggleProject = {
    viewing_Iframe: boolean,
    viewing_WireFrame: boolean
}

export interface Project {
    toggleProject: ToggleProject
    viewdStatus: boolean
    projectImage: string
    projectLinks: ProjectLinks
    projectName: string
    projectDescription: string
    projectTools: string
}

export type Action = {
    type: string,
    payload: Project[]
}

export interface Props {
    project: Project
    projects: Project[]
    currentProjectIndex: number
    dispatch: React.Dispatch<Action>
}
