import './Projects.css'
import { Action, Project } from '../@types-projectTypes/projectTypes'
import { toggleProjectViewd } from '../utills/toggleProjectViewd'
import ProjectDetails from './ProjectDetails/ProjectDetails'
import ProjectView from './ProjectView/ProjectView'
import Buttons from './Buttons/Buttons'

interface Props {
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const ProjectItem: React.FC<Props> = ({ projects, dispatch }) => {

    return (
        <>
            <section id='projects-page'>
                {projects.map((project, currentProjectIndex) => {
                    return (
                        < figure >

                            <a className={`${project.viewdStatus ? 'viewd' : ''} project-img`}
                                href="#"
                                onClick={() => dispatch({
                                    type: 'LOAD_IFRAME',
                                    payload: toggleProjectViewd(project, projects, true, false)
                                })}>
                                <img src="#" alt="projectimage" />
                            </a>

                            <figcaption>

                                <Buttons
                                    project={project}
                                    projects={projects}
                                    dispatch={dispatch} />
                                <ProjectDetails
                                    project={project} />

                                {project.toggleProject.viewing_Iframe ||
                                    project.toggleProject.viewing_WireFrame ?
                                    <ProjectView
                                        project={project}
                                        projects={projects}
                                        currentProjectIndex={currentProjectIndex}
                                        dispatch={dispatch} /> : null}
                            </figcaption>
                        </figure>
                    )
                })}
            </section>
        </>
    )
}
export default ProjectItem
