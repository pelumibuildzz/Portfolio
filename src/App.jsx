import './App.css'
import AboutPage from './components/about-page'
import LandingPage from './components/landing-page'
import Navbar from './components/navbar'
import ProjectsPage from './components/projects-page'
// import Welcome from './components/Welcome'

function App() {

  return (
    <div className='flex flex-col items-center w-full justify-center scroll-smooth'>
      {/* <Welcome/> */}
      <Navbar/>
      <LandingPage/>
      <ProjectsPage/>
      <AboutPage/>
    </div>
  )
}

export default App
