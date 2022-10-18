import Navigation from './components/Navigation/Navigation'
import About from './components/AboutPage/About'
import ProjectPage from './components/ProjectPage/ProjectPage';
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <main className="App">
      <Navigation />
      <About />
      {/* < ProjectPage/> */}
      <Footer />
    </main>
  );
}

export default App;
