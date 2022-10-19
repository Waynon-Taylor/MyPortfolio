import Navigation from './components/Navigation/Navigation'
import About from './pages/AboutPage/About'
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Footer from './components/Footer/Footer'
import './assets/index.css'

function App() {
  return (
    <main className="App">
      <Navigation />
      {/* <About /> */}
      < ProjectPage/>
      <Footer />
    </main>
  );
}

export default App;
