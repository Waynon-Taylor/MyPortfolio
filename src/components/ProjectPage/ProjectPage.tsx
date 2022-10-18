import { useReducer } from 'react'
import { Project, Action } from './projectTypes/projectTypes'
import projectsList from '../../projects_data/data'
import ProjectItem from './Projects/Projects'

const ProjectPage: React.FC = () => {

    const reducer = (state: Project[], action: Action) => {
        switch (action.type) {
            case "LOAD_IFRAME":
                return toggleProjectViewd(action.payload, state)
            case "LOAD_WIRE_FRAME":
                return toggleProjectViewd(action.payload, state)
            case "PREV":
                return action.payload
            case "NEXT":
                return action.payload
            case "CLOSE_FRAME":
                return toggleProjectViewd(action.payload, state)
        }
        return state
    }

    const toggleProjectViewd = (currentProject: Project | Project[], projects: Project[]) => {

        if ('projectName' in currentProject) {
            return projects.map((project: Project) => {
                if (project.projectName === currentProject.projectName) {
                    project.viewdStatus = true
                    return currentProject
                }
                return project
            })
        }
    }

    const [projects, dispatch] = useReducer(reducer, projectsList)

    return (
        <>
            <ProjectItem
                projects={projects}
                dispatch={dispatch}
            />
        </>
    )
}

export default ProjectPage

