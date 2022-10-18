import './Projects.css'
import { Action, Project } from '../projectTypes/projectTypes'
import ProjectView from '../ProjectView/ProjectView'
import Buttons from '../Buttons/Buttons'
import ProjectViewButtons from '../ProjectView/ProjectViewButtons'

interface Props {
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const ProjectItem: React.FC<Props> = ({ projects, dispatch }) => {

    return (
        <>
            <section id='projects-page'>
                {
                    projects.map((project, projectIndex) => {
                        return (
                            < figure >
                                <a
                                    className={`${project.viewdStatus ? 'viewd' : ''} project-img`}
                                    onClick={() => dispatch(
                                        {
                                            type: 'LOAD_IFRAME',
                                            payload: {
                                           ...project,
                                                toggleProject: { viewing_Iframe: true, viewing_WireFrame: false }
                                            }
                                        })}
                                    href="#">
                                    <img src="#" alt="projectimage" />
                                </a>

                                <figcaption>
                                    <Buttons
                                        project={project}
                                        dispatch={dispatch}
                                    />
                                    <div className='project-details'>
                                        <h3>{project.projectName}</h3>
                                        <p>{project.projectDescription}</p>
                                        <p>{project.projectTools}</p>
                                    </div>
                                    {
                                        project.toggleProject.viewing_Iframe || project.toggleProject.viewing_WireFrame ?
                                            <ProjectView project={project} >
                                                <ProjectViewButtons
                                                    project={project}
                                                    projects={projects}
                                                    projectIndex={projectIndex}
                                                    dispatch={dispatch} />
                                            </ProjectView > : null
                                    }
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </section>
        </>
    )
}

export default ProjectItem
