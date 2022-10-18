import './Buttons.css'
import { Project, Action } from '../projectTypes/projectTypes'
interface Props {
    project: Project
    dispatch: React.Dispatch<Action>
}

const Buttons: React.FC<Props> = ({ project, dispatch }) => {
    return (
        <>
            <div>
                <button onClick={() => dispatch!({
                    type: 'LOAD_IFRAME',
                    payload: {
                        ...project,
                        toggleProject: { viewing_Iframe: true, viewing_WireFrame: false }
                    }
                })}>IFRAME</button>

                <button onClick={() => dispatch!(
                    {
                        type: 'LOAD_WIRE_FRAME',
                        payload: {
                            ...project,
                            toggleProject: { viewing_Iframe: false, viewing_WireFrame: true }
                        }
                    })}>WIREFRAME</button>

                <button><a href={project.projectLinks.URL}>URL</a></button>
                <button><a href={project.projectLinks.REPO}>REPO</a></button>
            </div>
        </>
    )
}

export default Buttons
