import './ProjectView.css'
import { Project } from '../projectTypes/projectTypes'

interface Props {
    children: React.ReactNode
}

const ProjectView: React.FC<Props> = ({ children }) => {

    return (
        <>
            {/* <iframe src="" frameBorder="0"></iframe> */}

            {/* <iframe src="" frameBorder="0"></iframe> */}
            <div>ProjectView</div>
            {children}
        </>
    )
}

export default ProjectView
