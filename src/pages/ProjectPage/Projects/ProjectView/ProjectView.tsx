import './ProjectView.css'
import { useState } from 'react'
import { Props } from '../../@types-projectTypes/projectTypes'
import { toggleProjectViewd } from '../../utills/toggleProjectViewd'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Buttons from "../Buttons/Buttons"
import ProjectCarouselButtons from './ProjectCarouselButtons'


const ProjectView: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    const [viewDetails, setViewDetails] = useState(false)

    const toggleViewDetails = () => {
        if (viewDetails) setViewDetails(false)
        if (!viewDetails) setViewDetails(true)
    }

    return (
        <>
            {project.toggleProject.viewing_Iframe ? <div>iframe</div> : null}
            {project.toggleProject.viewing_WireFrame ? <div>wireFrame</div> : null}

            {viewDetails ? <div><span onClick={toggleViewDetails}>X</span>
                <ProjectDetails project={project} /></div> : null}

            <div>
                <button onClick={toggleViewDetails}>INFO</button>
                <Buttons project={project} projects={projects} dispatch={dispatch} />
                <ProjectCarouselButtons
                    project={project}
                    projects={projects}
                    currentProjectIndex={currentProjectIndex}
                    dispatch={dispatch} />
                <button onClick={() => dispatch({
                    type: 'CLOSE_FRAME',
                    payload: toggleProjectViewd(project, projects, false, false)
                })}>CLOUSE</button>
            </div>
        </>
    )
}

export default ProjectView
