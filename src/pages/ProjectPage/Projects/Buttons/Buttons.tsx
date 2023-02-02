import './Buttons.css'
import { Props } from '../../types-projectTypes/projectTypes'
import { toggleProjectViewd, toggleCarouselMode } from '../../utills/utills'

const Buttons: React.FC<Props> = ({ project, projects, dispatch, currentProjectIndex }) => {

    const projectCurrentviewingStatus =
        project.viewing_WireFrame || project.viewing_Iframe;

    const toggleFontSize = projectCurrentviewingStatus ?
        'project-view-fontsize' : 'project-fontsize';

    const projectViewButton = 'project-view-button'
    const buttonVisibility = projectCurrentviewingStatus ?
        `${projectViewButton}-enabled` : `${projectViewButton}-disabled`;

    const { iframeLINK, wireFrameLINK, urlLINK, repoLINK } = project.projectLinks
    function buttonDisableStyle(value: string | number) {
        return value ? '' : 'disable-button'
    }

    return (
        <>
            <div className={`buttons`}>

                <button
                    disabled={!iframeLINK}
                    className={`button ${toggleFontSize} ${buttonDisableStyle(iframeLINK)}`}
                    onClick={
                        () => dispatch!({
                            type: 'LOAD_IFRAME',
                            payload: toggleProjectViewd(project, projects, true, false)
                        })}>
                    IFRAME
                </button>

                <button
                    disabled={!wireFrameLINK}
                    className={`button ${toggleFontSize} ${buttonDisableStyle(wireFrameLINK)}`}
                    onClick={
                        () => dispatch!({
                            type: 'LOAD_WIREFRAME',
                            payload: toggleProjectViewd(project, projects, false, true)
                        })}>
                    WIREFRAME
                </button>

                <button className={`button ${buttonDisableStyle(urlLINK)}`}>
                    <a
                        aria-disabled={!urlLINK}
                        role={urlLINK}
                        className={toggleFontSize} target='_blanck'>
                        URL
                    </a>
                </button>

                <button className={`button ${buttonDisableStyle(repoLINK)}`}>
                    <a
                        aria-disabled={!repoLINK}
                        role={repoLINK}
                        className={toggleFontSize} target='_blanck'>
                        REPO
                    </a>
                </button>
            </div>

            <button
                disabled={!currentProjectIndex}
                className={`${buttonVisibility} ${buttonDisableStyle(currentProjectIndex)} prev-button`}
                onClick={
                    () => dispatch({
                        type: 'PREV',
                        payload: toggleCarouselMode(projects, project, currentProjectIndex - 1)
                    })}>
                {'<'}
            </button>

            <button
                className={`${buttonVisibility} next-button`}
                onClick={
                    () => dispatch({
                        type: 'NEXT',
                        payload: toggleCarouselMode(projects, project, currentProjectIndex + 1)
                    })}>
                {'>'}
            </button>

            <button
                className={`${buttonVisibility} close-button`}
                onClick={
                    () => dispatch({
                        type: 'CLOSE_FRAME',
                        payload: toggleProjectViewd(project, projects, false, false)
                    })}>
                X
            </button>
        </>
        //Info button and pop up info window is located in ProjectView.tsx Component.
    )
}

export default Buttons
