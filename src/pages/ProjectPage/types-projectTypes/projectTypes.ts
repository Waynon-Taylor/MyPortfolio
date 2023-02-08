export type ProjectLinks = {
    iframeLINK: string,
    wireFrameLINK: string,
    livelLINK: string,
    codeLINK: string
}

export interface Project {
    viewing_Iframe: boolean,
    viewing_WireFrame: boolean
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
