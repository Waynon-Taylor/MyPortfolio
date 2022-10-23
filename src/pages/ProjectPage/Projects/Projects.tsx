import './Projects.css'
import { Action, Project } from '../@types-projectTypes/projectTypes'
import { toggleProjectViewd } from '../utills/utills'
import ProjectDetails from './ProjectDetails/ProjectDetails'
import ProjectView from './ProjectView/ProjectView'
import Buttons from './Buttons/Buttons'

interface Props {
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const ProjectItem: React.FC<Props> = ({ projects, dispatch }) => {
    console.log("render-Projectx")
    return (
        <>
            <main id='projects-container'>
                <section id='project'>

                    {projects.map((project, currentProjectIndex) => {
                        return (
                            < figure key={project.projectName}>

                                <button
                                    className={`${project.viewdStatus ? 'viewd' : 'not-viewd'} project-img-container`}
                                    onClick={() => dispatch({
                                        type: 'LOAD_IFRAME',
                                        payload: toggleProjectViewd(project, projects, true, false)
                                    })}>

                                    <img
                                        className={' project-img'}
                                        src={project.projectImage}
                                        alt={`project: ${project.projectName} thumbnail.`} />
                                </button>

                                <figcaption>
                                    <Buttons
                                        project={project}
                                        projects={projects}
                                        dispatch={dispatch}
                                        currentProjectIndex={currentProjectIndex} />
                                    <ProjectDetails project={project} />

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
            </main>
        </>
    )
}
export default ProjectItem
