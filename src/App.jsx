import './App.css'
import AboutPage from './components/about-page'
import ContactPage from './components/conatct-page'
import Footer from './components/footer'
import LandingPage from './components/landing-page'
import Navbar from './components/navbar'
import ProjectsPage from './components/projects-page'
// import Welcome from './components/Welcome'

function App() {

  return (
    <div className='flex flex-col items-center w-full justify-center scroll-smooth'>
      <Navbar/>
      <LandingPage/>
      <ProjectsPage/>
      <AboutPage/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default App
