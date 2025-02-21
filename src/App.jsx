import './App.css'
import HomePage from './components/Home'
import Navbar from './components/navbar'
// import Welcome from './components/Welcome'

function App() {

  return (
    <div className='flex flex-col items-center w-full justify-center'>
      {/* <Welcome/> */}
      <Navbar/>
      {/* <HomePage/> */}
    </div>
  )
}

export default App
