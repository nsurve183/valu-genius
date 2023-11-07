
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './Scss/main.css'
import UpperNavbar from './Components/UpperNavbar'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'


function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
