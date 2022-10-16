import { useState } from 'react'
import './Projects.css'
import { Project } from '../projectTypes/projectTypes'
import ProjectView from '../ProjectView/ProjectView'
import Buttons from '../Buttons/Buttons'
import ProjectViewButtons from '../ProjectView/ProjectViewButtons'

const projectsList: Project[] = [
    {
        toggleProject: false,
        viewdStatus: false,
        projectImage: '#',
        projectLinks: {
            WIREFRAME: '#',
            URL: '#',
            REPO: '#'
        },
        projectName: 'Portfolio-1',
        projectDescription: 'This is my portfolio website',
        projectTools: '#typescript #react.js'
    },
    {
        toggleProject: false,
        viewdStatus: false,
        projectImage: '#',
        projectLinks: {
            WIREFRAME: '#',
            URL: '#',
            REPO: '#'
        },
        projectName: 'Portfolio-2',
        projectDescription: 'This is my portfolio website',
        projectTools: '#typescript #react.js'
    }
]

const ProjectItem: React.FC = () => {

    const [projects, setProjects] = useState<Project[]>(projectsList)

    const toggleProjectViewd = (project: Project, projects: Project[]) => {

        setProjects(projects.map((currentProject: Project) => {
            if (currentProject.projectName === project.projectName) {
                currentProject.toggleProject = true
                currentProject.viewdStatus = true
            }
            return currentProject
        }))
    }
    console.log('render')
    return (
        <>
            <section id='projects-page'>
                {
                    projects.map((project, currentProjectIndex) => {

                        return (
                            < figure >

                                <a
                                    className={`${project.viewdStatus ? 'viewd' : ''} project-img`}
                                    onClick={() => toggleProjectViewd(project, projects)}
                                    href="#">
                                      
                                    <img
                                        src="#"
                                        alt="projectimage"
                                    />
                                </a>

                                <figcaption>

                                    <Buttons
                                        project={project}
                                        projects={projects}
                                        toggleProjectViewd={toggleProjectViewd}
                                    />

                                    <div className='project-details'>
                                        <h3>{project.projectName}</h3>
                                        <p>{project.projectDescription}</p>
                                        <p>{project.projectTools}</p>
                                    </div>

                                    {
                                        project.toggleProject ? <ProjectView>
                                            <ProjectViewButtons
                                                project={project}
                                                projects={projects}
                                                setProjects={setProjects}
                                                currentProjectIndex={currentProjectIndex}
                                            />
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

