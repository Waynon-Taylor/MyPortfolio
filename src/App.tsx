import Navigation from './components/Navigation/Navigation'
import About from './components/AboutPage/About'
import Project from './components/ProjectPage/Projects/Projects';
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <main className="App">
      <Navigation />
      {/* <About /> */}
      < Project/>
      <Footer />
    </main>
  );
}

export default App;
