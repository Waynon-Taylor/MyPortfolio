import { Project, Action } from '../projectTypes/projectTypes'
import Buttons from "../Buttons/Buttons"
import ProjectCarousel from './ProjectCarousel'
interface Props {
    project: Project
    projects: Project[]
    projectIndex: number
    dispatch: React.Dispatch<Action>
}

const ProjectViewButtons: React.FC<Props> = ({ project, projects, dispatch, projectIndex }) => {

    return (
        <>
            <div>
                <button>INFO</button>
                <Buttons
                    project={project}
                    dispatch={dispatch}
                />
                <ProjectCarousel
                    project={project}
                    projects={projects}
                    projectIndex={projectIndex}
                    dispatch={dispatch}
                />
                <button onClick={() => dispatch(
                    {
                        type: 'CLOSE_FRAME',
                        payload: {
                            ...project,
                            toggleProject: { viewing_Iframe: false, viewing_WireFrame: false }
                        }
                    })}>CLOUSE</button>
            </div>
        </>
    )
}

export default ProjectViewButtons
