import './Buttons.css'
import { Props } from '../../@types-projectTypes/projectTypes'
import { toggleProjectViewd, toggleCarouselMode } from '../../utills/utills'

const Buttons: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    const project_view_status = project.toggleProject.viewing_WireFrame || project.toggleProject.viewing_Iframe

    const toggleFontSize = project_view_status ? 'project-view-fontsize' : 'project-fontsize'
    const buttonVisibility = project_view_status ? 'project-view-button-enabled' : 'project-view-button-disabled'

    return (
        <>
            <div className={`buttons`}>

                <button className={toggleFontSize} onClick={() => dispatch!({
                    type: 'LOAD_IFRAME',
                    payload: toggleProjectViewd(project, projects, true, false)
                })}>IFRAME</button>

                <button className={toggleFontSize} onClick={() => dispatch!({
                    type: 'LOAD_WIREFRAME',
                    payload: toggleProjectViewd(project, projects, false, true)
                })}>WIREFRAME</button>

                <button>
                    <a className={toggleFontSize} target='_blanck' href={project.projectLinks.URL}>
                        URL </a>
                </button>

                <button>
                    <a className={toggleFontSize} target='_blanck' href={project.projectLinks.REPO}>
                        REPO</a>
                </button>
            </div>

            <button className={`${buttonVisibility} prev-button`} onClick={() => dispatch({
                type: 'PREV',
                payload: toggleCarouselMode(projects, project, currentProjectIndex - 1, projects.length - 1)
            })}>{'<'}</button>

            <button className={`${buttonVisibility} next-button`} onClick={() => dispatch({
                type: 'NEXT',
                payload: toggleCarouselMode(projects, project, currentProjectIndex + 1, 0)
            })}>{'>'}</button>

            <button className={`${buttonVisibility} close-button`} onClick={() => dispatch({
                type: 'CLOSE_FRAME',
                payload: toggleProjectViewd(project, projects, false, false)
            })}>X</button>

        </>
    )
}

export default Buttons
