import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import About from './pages/AboutPage/About'
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Footer from './components/Footer/Footer'
import './assets/index.css'

function App() {
  return (
    <main className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
