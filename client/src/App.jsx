import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className="flex items-center justify-center flex-col w-full h-full bg-[#88b7b5]">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
