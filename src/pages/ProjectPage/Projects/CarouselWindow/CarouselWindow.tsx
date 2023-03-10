import './CarouselWindow.css'
import infoIcon from '../../../../assets/icons/infoIcon.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Project, Action } from '../../projectTypes/projectTypes'
import { toggleProjectViewOptions, projectsCarouselMode } from '../../utills/utills'
import ProjectDetails from '../ProjectDetails'
import Buttons from "../Buttons/Buttons"

interface Props {
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const CarouselWindow: React.FC<Props> = ({ projects, dispatch }) => {
    { console.log('hey ProjectView') }

    const [viewDetails, setViewDetails] = useState(false)

    useEffect(() => {
        document.body.classList.add('disable-scrollbar')
        return () =>
            document.body.classList.remove('disable-scrollbar')
    }, [])

    const toggleViewDetails = () => {
        if (viewDetails) { setViewDetails(false); return }
        setViewDetails(true)
    }

    const getCurrentProject = () => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].viewing_Iframe || projects[i].viewing_WireFrame)
                return { project: projects[i], currentProjectIndex: i }
        }
    }

    const { project, currentProjectIndex } = getCurrentProject()!
    const { iframeLINK, wireFrameLINK } = project.projectLinks
    const { projectName, viewing_Iframe, viewing_WireFrame } = project

    return (
        <>
            <main id='carousel-window'>
                {viewing_Iframe ?
                    <div >
                        {!iframeLINK ?
                            <p
                                className='carousel-window-err-msg'>
                                No Iframe Available
                            </p> :
                            <iframe
                                className='resize-carousel-window'
                                scrolling="yes"
                                title={`Iframe of ${projectName} project `}
                                allow="fullscreen"
                                frameBorder={'false'}
                                src={iframeLINK}>
                            </iframe>
                        }
                    </div> : null}

                {viewing_WireFrame ?
                    <div>
                        {!wireFrameLINK ?
                            <p
                                className='carousel-window-err-msg'>
                                No WireFrame Available
                            </p> :
                            <iframe
                                className='resize-carousel-window'
                                scrolling="yes"
                                title={`Wireframe of ${projectName} project `}
                                src={wireFrameLINK}
                                frameBorder={'false'}
                                allow="fullscreen" >
                            </iframe>
                        }
                    </div> : null
                }

                {viewDetails ?
                    <div id='project-details-pop-up'>
                        <ProjectDetails
                            project={project}
                            viewDetails={viewDetails}
                        />
                        <button
                            id='close-project-details-pop-up-button'
                            onClick={toggleViewDetails}>
                            X
                        </button>
                    </div> : null
                }
            </main>

            <div id='carousel-window-buttons-container'>
                <img
                    id='info-icon'
                    onClick={toggleViewDetails}
                    src={infoIcon}
                    alt="info Icon" />
                <Buttons
                    carouselModeButtonStyle='carousel-mode-button-style'
                    project={project}
                    projects={projects}
                    dispatch={dispatch}
                />

                <button
                    disabled={!currentProjectIndex}
                    className={`carousel-buttons ${!currentProjectIndex ? 'carousel-buttons-disable' : ''}`}
                    onClick={
                        () => dispatch({
                            type: 'PREV',
                            payload: projectsCarouselMode(projects, project, currentProjectIndex - 1)
                        })}>
                    {'<'}
                </button>

                <button
                    className={`carousel-buttons ${projects.length - 1 === currentProjectIndex ? 'carousel-buttons-disable' : ''}`}
                    onClick={
                        () => dispatch({
                            type: 'NEXT',
                            payload: projectsCarouselMode(projects, project, currentProjectIndex + 1)
                        })}>
                    {'>'}
                </button>

                <Link to="/projects">
                    <button
                        className={`close-button`}
                        onClick={
                            () => dispatch({
                                type: 'CLOSE_FRAME',
                                payload: toggleProjectViewOptions(project, projects, false, false)
                            })}>
                        X
                    </button>
                </Link>
            </div>
        </>
    )
}

export default CarouselWindow
