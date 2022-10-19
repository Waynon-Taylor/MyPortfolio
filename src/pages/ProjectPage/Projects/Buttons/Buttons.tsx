import './Buttons.css'
import { Project, Action } from '../../@types-projectTypes/projectTypes'
import { toggleProjectViewd } from '../../utills/toggleProjectViewd'

interface Props {
    project: Project
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const Buttons: React.FC<Props> = ({ project, projects, dispatch }) => {
    return (
        <>
            <div>
                <button onClick={() => dispatch!({
                    type: 'LOAD_IFRAME',
                    payload: toggleProjectViewd(project, projects, true, false)
                })}>IFRAME</button>

                <button onClick={() => dispatch!({
                    type: 'LOAD_IFRAME',
                    payload: toggleProjectViewd(project, projects, false, true)
                })}>WIREFRAME</button>

                <button><a href={project.projectLinks.URL}>URL</a></button>
                <button><a href={project.projectLinks.REPO}>REPO</a></button>
            </div>
        </>
    )
}

export default Buttons
