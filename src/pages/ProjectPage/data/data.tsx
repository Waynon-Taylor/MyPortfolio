import { Project } from "../@types-projectTypes/projectTypes"
import projectImg from '../../../assets/images/lets go to school-.jpg'


const projectsList: Project[] = [
    {
        toggleProject: {
            viewing_Iframe: false,
            viewing_WireFrame: false
        },
        viewdStatus: false,
        projectImage: projectImg,
        projectLinks: {
            IFRAME: '',
            WIREFRAME: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F17SnzGzveTdpBh1GET3pHr%2FPortfolio%3Fnode-id%3D0%253A1',
            URL: '#',
            REPO: '#'
        },
        projectName: 'Portfolio-1',
        projectDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam recusandae earum dolores exercitationem delectus rem magnam, repellat illo ad. Aut consequuntur mollitia deserunt corrupti necessitatibus! Optio maiores quibusdam eos necessitatibus magni unde voluptates?',
        projectTools: '#typescript #react.js'
    },
    {
        toggleProject: {
            viewing_Iframe: false,
            viewing_WireFrame: false
        },
        viewdStatus: false,
        projectImage: projectImg,
        projectLinks: {
            IFRAME: 'https://task-app-9f5a2.firebaseapp.com/',
            WIREFRAME: '#',
            URL: 'https://task-app-9f5a2.firebaseapp.com/',
            REPO: '#'
        },
        projectName: 'Portfolio-2',
        projectDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam recusandae earum dolores exercitationem delectus rem magnam, repellat illo ad. Aut consequuntur mollitia deserunt corrupti necessitatibus! Optio maiores quibusdam eos necessitatibus magni unde voluptates?',
        projectTools: '#typescript #react.js'
    }
]
export default projectsList
