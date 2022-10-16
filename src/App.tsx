import Navigation from './components/Navigation/Navigation'
import About from './components/AboutPage/About'
import ProjectItem from './components/ProjectPage/Projects/Projects';
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <main className="App">
      <Navigation />
      <About />
      {/* < ProjectItem/> */}
      <Footer />
    </main>
  );
}

export default App;
