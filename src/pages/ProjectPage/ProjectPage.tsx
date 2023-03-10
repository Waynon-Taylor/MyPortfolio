import './ProjectPage.css'
import { Project, Action } from './projectTypes/projectTypes'
import Projects from './Projects/Projects'

interface Props {
    projects: Project[]
    dispatch: React.Dispatch<Action>
}

const ProjectPage: React.FC<Props> = ({ projects, dispatch }) => {

    return (
        <>
            <section id='ProjectPage'>
                < Projects projects={projects} dispatch={dispatch} />
            </section>
        </>
    )
}
export default ProjectPage
