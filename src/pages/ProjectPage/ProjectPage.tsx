import { useReducer } from 'react'
import { Project, Action } from './@types-projectTypes/projectTypes'
import projectsList from './data/data'
import ProjectItem from './Projects/Projects'


const reducer = (state: Project[], action: Action) => {

    switch (action.type) {
        case "LOAD_IFRAME":
        case "LOAD_WIRE_FRAME":
        case "PREV":
        case "NEXT":
        case "CLOSE_FRAME":
            return action.payload
    }
    return state
}

const ProjectPage: React.FC = () => {
    const [projects, dispatch] = useReducer(reducer, projectsList)
    return <><ProjectItem projects={projects} dispatch={dispatch} /></>
}
export default ProjectPage

