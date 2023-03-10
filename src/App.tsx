import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Footer from './components/Footer/Footer'
import './assets/index.css'
import CarouselWindow from './pages/ProjectPage/Projects/CarouselWindow/CarouselWindow';
import { useReducer, useState } from 'react'
import { Project, Action } from './pages/ProjectPage/projectTypes/projectTypes'
import projectData from './pages/ProjectPage/projectData/data'


const initializeSessionStorage = () => {
  if (sessionStorage.getItem('projectData') === null) {
    sessionStorage.setItem('projectData', JSON.stringify(projectData))
  }
}
initializeSessionStorage()

const reducer = (state: Project[], action: Action): Project[] => {

  switch (action.type) {
    case "UPDATE_PROJECT_VIEW_STATUS":
    case "LOAD_IFRAME":
    case "LOAD_WIREFRAME":
    case "PREV":
    case "NEXT":
    case "CLOSE_FRAME":
      sessionStorage.setItem('projectData', JSON.stringify(action.payload))
      return JSON.parse(sessionStorage.getItem('projectData')!)
  }
  return state
}

function App() {

  const projectsListSessionStorage: Project[] = JSON.parse(sessionStorage.getItem('projectData')!)
  const [projects, dispatch] = useReducer(reducer, projectsListSessionStorage)

  return (<>
    <main className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route
          path="/projects"
          element={<ProjectPage projects={projects} dispatch={dispatch} />} />
      </Routes>
      <Footer />

      <Routes>
        <Route
          path="/projects/ProjectsCarouselMode"
          element={<CarouselWindow projects={projects} dispatch={dispatch} />} />
      </Routes>
    </main>
  </>
  );
}

export default App;
