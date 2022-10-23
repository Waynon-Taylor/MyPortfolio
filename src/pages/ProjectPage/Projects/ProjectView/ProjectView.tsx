import './ProjectView.css'
import infoIcon from '../../../../assets/icons/infoIcon.svg'
import { useState, useEffect } from 'react'
import { Props } from '../../@types-projectTypes/projectTypes'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Buttons from "../Buttons/Buttons"


const ProjectView: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    const [viewDetails, setViewDetails] = useState(false)

    useEffect(() => {
        document.body.classList.add('disable-scrollbar')
        console.log('added class')
        return () => {
            document.body.classList.remove('disable-scrollbar')
            console.log('cleanUp')
        }
    }, [])
    console.log("render-Project-View")
    const toggleViewDetails = () => {
        if (viewDetails) setViewDetails(false)
        if (!viewDetails) setViewDetails(true)
    }

    return (
        <>
            <main id='project-view'> {project.toggleProject.viewing_Iframe ? <div>
                <iframe
                    className='resize-project-view'
                    scrolling="yes"
                    title={`Iframe of ${project.projectName} project `}
                    src={project.projectLinks.IFRAME}>
                </iframe>
            </div> : null}

                {project.toggleProject.viewing_WireFrame ? <div>
                    <iframe
                        className='resize-project-view'
                        scrolling="yes"
                        title={`Wireframe of ${project.projectName} project `}
                        src={project.projectLinks.WIREFRAME}
                        allowFullScreen>
                    </iframe>
                </div> : null
                }

                {
                    viewDetails ?
                        <div id='project-details'>
                            <ProjectDetails project={project} viewDetails={viewDetails} />
                            <button id='close-project-Details-button' onClick={toggleViewDetails}>X</button>
                        </div> : null
                }
            </main>

            <div id='project-view-buttons-container'>
                <img
                    id='info-icon'
                    onClick={toggleViewDetails}
                    src={infoIcon}
                    alt="info Icon" />
                <Buttons
                    project={project}
                    projects={projects}
                    dispatch={dispatch}
                    currentProjectIndex={currentProjectIndex} />
            </div>
        </>
    )
}

export default ProjectView
