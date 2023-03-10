import './Projects.css'
import { updateCurrentProjectViewStatus } from '../utills/utills'
import { Project, Action } from '../projectTypes/projectTypes'
import ProjectDetails from './ProjectDetails'
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
                    {projects.map((project) => {

                        const { livelLINK } = project.projectLinks
                        const {
                            viewdStatus,
                            projectImage,
                            projectName,
                        } = project

                        return (
                            < figure key={v4()}>
                                <button disabled={!livelLINK}
                                    className={`${viewdStatus ? 'viewd-marker-enable' : ''} project-img-container`}
                                    onClick={
                                        () => dispatch({
                                            type: 'UPDATE_PROJECT_VIEW_STATUS',
                                            payload: updateCurrentProjectViewStatus(project, projects)
                                        })
                                    }>
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
                                    />
                                    <ProjectDetails
                                        project={project}
                                    />
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
