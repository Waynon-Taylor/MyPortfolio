import './ProjectView.css'

interface Props {
    children: React.ReactNode
}

const ProjectView: React.FC<Props> = ({ children }) => {
    return (
        <>
            {/* project iframe */}
            {/* <iframe src="" frameBorder="0"></iframe> */}

            {/* figma iframe */}
            {/* <iframe src="" frameBorder="0"></iframe> */}
            <div>ProjectView</div>
            <div>
                <button>INFO</button>
                <div style={{ display: 'inline-block' }}>{children}</div>
                <button>NEXT</button>
                <button>CLOUSE</button>
            </div>
        </>
    )
}

export default ProjectView
