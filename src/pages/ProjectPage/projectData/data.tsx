import { Project } from "../projectTypes/projectTypes"
import sortVisualizerImg from '../../../assets/images/sortvisualizer-screenshot-2.png'
import flappyBirdImg from '../../../assets/images/flappy-bird-display-pic.jpg'
import portfolioImg from '../../../assets/images/portfolio-img.png'

const projectsList: Project[] = [
    {
        viewing_Iframe: false,
        viewing_WireFrame: false,
        viewdStatus: false,
        projectImage: sortVisualizerImg,
        projectLinks: {
            iframeLINK: 'https://sorting-visualizer-596cd.web.app/',
            wireFrameLINK: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6Vytstchyf5DKhxrZdAHgX%2FSorting-Visualizer%3Fnode-id%3D0%253A1%26t%3DFSmq5DQdXG0i4eHI-1',
            livelLINK: 'https://sorting-visualizer-596cd.web.app/',
            codeLINK: 'https://github.com/The-taylord/SortingAlgoVisualizer'
        },
        projectName: 'Sorting Visualizer',
        projectDescription: 'A web application that illustrates how various sorting algorithms work via some user controls.',
        projectTools: '#typescript #react.js #figma'
    },
    {
        viewing_Iframe: false,
        viewing_WireFrame: false,
        viewdStatus: false,
        projectImage: flappyBirdImg,
        projectLinks: {
            iframeLINK: 'https://flappy-bird-game-11c6f.web.app/',
            wireFrameLINK: '',
            livelLINK: 'https://flappy-bird-game-11c6f.web.app/',
            codeLINK: 'https://github.com/The-taylord/Flappy-Bird-Game'
        },
        projectName: 'Flappy Bird Clone',
        projectDescription: 'The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.',
        projectTools: '#typescript  #react.js'
    },
    {
        viewing_Iframe: false,
        viewing_WireFrame: false,
        viewdStatus: false,
        projectImage: portfolioImg,
        projectLinks: {
            iframeLINK: '',
            wireFrameLINK: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F17SnzGzveTdpBh1GET3pHr%2FPortfolio%3Fnode-id%3D0%253A1',
            livelLINK: '',
            codeLINK: 'https://github.com/The-taylord/MyPortfolio'
        },
        projectName: 'Personal Portfolio Website',
        projectDescription: "This website showcases some of my software engineering projects and is the current website you're on.",
        projectTools: '#typescript  #react.js #figma'
    },
]
export default projectsList
