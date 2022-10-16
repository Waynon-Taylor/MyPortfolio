export type ProjectLinks = {
    WIREFRAME: string,
    URL: string,
    REPO: string
}

export interface Project {
    toggleProject:boolean
    viewdStatus: boolean
    projectImage: string
    projectLinks: ProjectLinks
    projectName: string
    projectDescription: string
    projectTools: string
}
