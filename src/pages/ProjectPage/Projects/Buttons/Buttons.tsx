import './Buttons.css'
import { Project, Action } from '../../@types-projectTypes/projectTypes'
import { toggleProjectViewd } from '../../utills/toggleProjectViewd'

interface Props {
    project: Project
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const Buttons: React.FC<Props> = ({ project, projects, dispatch }) => {

    const project_view_status = project.toggleProject.viewing_WireFrame || project.toggleProject.viewing_Iframe
    const toggleFontSize  = project_view_status ? 'project-view-fontsize' : 'project-fontsize'

    return (
        <>
            <div className={`buttons`}>
                <button className={toggleFontSize} onClick={() => dispatch!({
                    type: 'LOAD_IFRAME',
                    payload: toggleProjectViewd(project, projects, true, false)
                })}>IFRAME</button>

                <button className={toggleFontSize} onClick={() => dispatch!({
                    type: 'LOAD_WIREFRAME',
                    payload: toggleProjectViewd(project, projects, false, true)
                })}>WIREFRAME</button>

                <button><a  className={toggleFontSize} target='_blanck' href={project.projectLinks.URL}>URL</a></button>
                <button><a  className={toggleFontSize} target='_blanck' href={project.projectLinks.REPO}>REPO</a></button>
            </div>
        </>
    )
}

export default Buttons
