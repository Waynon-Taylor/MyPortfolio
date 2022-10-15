import { useState } from 'react'
import './Projects.css'
import { ProjectLinks } from '../projectTypes/projectTypes'
import ProjectView from '../ProjectView/ProjectView'
import Buttons from '../Buttons/Buttons'


interface Project {
    projectImage: string
    projectLinks: ProjectLinks
    projectName: string
    projectDescription: string
    projectTools: string
}

const Project: React.FC = () => {

    const [viewStatus, setViewStatus] = useState(false)

    const projects: Project[] = [
        {
            projectImage: '#',
            projectLinks: {
                WIREFRAME: '#',
                URL: '#',
                REPO: '#'
            },
            projectName: 'Portfolio',
            projectDescription: 'This is my portfolio website',
            projectTools: '#typescript #react.js'
        }
    ]

    return (
        <>
            <section id='projects-page'>
                {
                    projects.map((project) => {
                        return (
                            < figure >
                                <a onClick={() => setViewStatus(true)} href="#">
                                    <img src="#" alt="projectimage" />
                                </a>
                                <figcaption>
                                    <Buttons
                                        projectLinks={project.projectLinks}
                                        setViewStatus={setViewStatus}
                                    />
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescription}</p>
                                    <p>{project.projectTools}</p>

                                    {viewStatus ? <ProjectView>
                                        <Buttons
                                            projectLinks={project.projectLinks}
                                            setViewStatus={setViewStatus}
                                        />
                                    </ProjectView> : null}

                                </figcaption>
                            </figure>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Project
