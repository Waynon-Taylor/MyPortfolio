import './ProjectView.css'
import infoIcon from '../../../../assets/icons/infoIcon.svg'
import { useState } from 'react'
import { Props } from '../../@types-projectTypes/projectTypes'
import { toggleProjectViewd } from '../../utills/toggleProjectViewd'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Buttons from "../Buttons/Buttons"
import CarouselButtons from './CarouselButtons'


const ProjectView: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    const [viewDetails, setViewDetails] = useState(false)

    const toggleViewDetails = () => {
        if (viewDetails) setViewDetails(false)
        if (!viewDetails) setViewDetails(true)
    }

    return (
        <>
            <main id='project-view'> {project.toggleProject.viewing_Iframe ? <div>
                <iframe
                    scrolling="yes"
                    title={`Iframe of ${project.projectName} project `}
                    src={project.projectLinks.IFRAME}
                    allowFullScreen = {true}>
                </iframe>
            </div> : null}

                {project.toggleProject.viewing_WireFrame ? <div>
                    <iframe
                        scrolling="yes"
                        title={`Wireframe of ${project.projectName} project `}
                        src={project.projectLinks.WIREFRAME}
                        allowFullScreen>
                    </iframe>
                </div> : null
                }

                {viewDetails ? <div id='project-details'>
                    <button onClick={toggleViewDetails}>X</button>
                    <ProjectDetails project={project} /></div> : null}

            </main>

            <div id='project-view-buttons'>
               <img onClick={toggleViewDetails} src={infoIcon} alt="info Icon" />
                <Buttons project={project} projects={projects} dispatch={dispatch} />
                <CarouselButtons
                    project={project}
                    projects={projects}
                    currentProjectIndex={currentProjectIndex}
                    dispatch={dispatch} />
                <button onClick={() => dispatch({
                    type: 'CLOSE_FRAME',
                    payload: toggleProjectViewd(project, projects, false, false)
                })}>X</button>
            </div>
        </>
    )
}

export default ProjectView
