import './Projects.css'
import { Action, Project } from '../types-projectTypes/projectTypes'
import ProjectDetails from './ProjectDetails/ProjectDetails'
import ProjectView from './ProjectView/ProjectView'
import Buttons from './Buttons/Buttons'
import { v4 } from 'uuid'

interface Props {
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const Projects: React.FC<Props> = ({ projects, dispatch }) => {
    return (
        <>
            <main id='projects-container'>
                <section id='project'>
                    {projects.map((project, currentProjectIndex) => {

                        const { livelLINK } = project.projectLinks
                        const {
                            viewdStatus,
                            projectImage,
                            projectName,
                            viewing_Iframe,
                            viewing_WireFrame
                        } = project

                        return (
                            < figure key={v4()}>
                                <button className={`${viewdStatus ? 'viewd' : 'not-viewd'} project-img-container`} >
                                    <a
                                        className={`${!livelLINK ? 'disable-project-img' : ''}`}
                                        href={livelLINK}
                                        target='_blank'>
                                        <img
                                            className={' project-img'}
                                            src={projectImage}
                                            alt={`project: ${projectName} thumbnail.`}
                                        />
                                    </a>
                                </button>

                                <figcaption>
                                    <Buttons
                                        project={project}
                                        projects={projects}
                                        dispatch={dispatch}
                                        currentProjectIndex={currentProjectIndex}
                                    />

                                    <ProjectDetails
                                        project={project}
                                    />

                                    {viewing_Iframe || viewing_WireFrame ?
                                        <ProjectView
                                            project={project}
                                            projects={projects}
                                            currentProjectIndex={currentProjectIndex}
                                            dispatch={dispatch}
                                        /> : null}
                                </figcaption>
                            </figure>
                        )
                    })}
                </section>
            </main>
        </>
    )
}
export default Projects
