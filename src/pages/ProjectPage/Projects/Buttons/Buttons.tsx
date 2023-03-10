import './Buttons.css'
import { Link } from 'react-router-dom'
import { Project, Action } from '../../projectTypes/projectTypes'
import { toggleProjectViewOptions, updateCurrentProjectViewStatus } from '../../utills/utills'

interface Props {
    project: Project
    projects: Project[]
    dispatch: React.Dispatch<Action>
    carouselModeButtonStyle?: string
}

const Buttons: React.FC<Props> = ({ project, projects, dispatch, carouselModeButtonStyle }) => {

    const { iframeLINK, wireFrameLINK, livelLINK, codeLINK } = project.projectLinks

    const buttonDisableClass = (link: string) => link ? '' : 'disable-button'

    return (
        <>
            <div className={`buttons ${carouselModeButtonStyle}`}>
                <button
                    disabled={!livelLINK}
                    onClick={
                        () => dispatch({
                            type: 'UPDATE_PROJECT_VIEW_STATUS',
                            payload: updateCurrentProjectViewStatus(project, projects)
                        })}>

                    <a
                        className={`button ${buttonDisableClass(livelLINK)}`}
                        href={livelLINK}
                        target='_blanck'>
                        Live
                    </a>
                </button>

                <button
                    disabled={!iframeLINK}
                    className={` ${buttonDisableClass(iframeLINK)}`}>
                    <Link to="/projects/ProjectsCarouselMode">
                        <span
                            className='button'
                            onClick={
                                () => dispatch!({
                                    type: 'LOAD_IFRAME',
                                    payload: toggleProjectViewOptions(project, projects, true, false)
                                })}>
                            Iframe
                        </span>
                    </Link>
                </button>

                <button
                    disabled={!wireFrameLINK}
                    className={`${buttonDisableClass(wireFrameLINK)}`}>
                    <Link to="/projects/ProjectsCarouselMode">
                        <span
                            className='button'
                            onClick={
                                () => dispatch!({
                                    type: 'LOAD_WIREFRAME',
                                    payload: toggleProjectViewOptions(project, projects, false, true)
                                })}>
                            Wireframe
                        </span>
                    </Link>
                </button>

                <button disabled={!codeLINK}>
                    <a className={`button ${buttonDisableClass(codeLINK)}`}
                        href={codeLINK}
                        target='_blanck'>
                        Code
                    </a>
                </button>
            </div >
        </>
    )
}

export default Buttons
