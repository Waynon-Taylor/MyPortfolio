import './ProjectPage.css'
import { useReducer } from 'react'
import { Project, Action } from './types-projectTypes/projectTypes'
import projectsList from './data/data'
import Projects from './Projects/Projects'

const initializeSessionStorage = () => {
    if (sessionStorage.getItem('projectsList') === null) {
        sessionStorage.setItem('projectsList', JSON.stringify(projectsList))
    }
}
initializeSessionStorage()

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

const ProjectPage: React.FC = () => {

    const projectsListSessionStorage: Project[] = JSON.parse(sessionStorage.getItem('projectsList')!)
    const [projects, dispatch] = useReducer(reducer, projectsListSessionStorage)

    return (
        <>
            <main id='ProjectPage'>
                <Projects
                    projects={projects}
                    dispatch={dispatch}
                />
            </main>
        </>
    )
}
export default ProjectPage
