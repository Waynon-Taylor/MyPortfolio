import { useReducer } from 'react'
import { Project, Action } from './@types-projectTypes/projectTypes'
import projectsList from './data/data'
import ProjectItem from './Projects/Projects'

const reducer = (state: Project[], action: Action) => {

    switch (action.type) {
        case "LOAD_IFRAME":
        case "LOAD_WIREFRAME":
        case "PREV":
        case "NEXT":
        case "CLOSE_FRAME":
            sessionStorage.setItem('projectsList', JSON.stringify(action.payload))
            return JSON.parse(sessionStorage.getItem('projectsList')!)
    }
    return state
}

const initializeSessionStorage = () => {
    if (!sessionStorage.getItem('projectsList')) {
        sessionStorage.setItem('projectsList', JSON.stringify(projectsList))
    }
}
initializeSessionStorage()


const ProjectPage: React.FC = () => {
    
    const projectsListSessionStorage: Project[] = JSON.parse(sessionStorage.getItem('projectsList')!)
    const [projects, dispatch] = useReducer(reducer, projectsListSessionStorage)

    return <><main id='ProjectPage'><ProjectItem projects={projects} dispatch={dispatch} /></main></>
}
export default ProjectPage

