import './App.css'
import LandingPage from './components/landing-page'
import Navbar from './components/navbar'
// import Welcome from './components/Welcome'

function App() {

  return (
    <div className='flex flex-col items-center w-full justify-center'>
      {/* <Welcome/> */}
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App
