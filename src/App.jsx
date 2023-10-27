
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './Scss/main.css'
import UpperNavbar from './Components/UpperNavbar'
import Navbar from './Components/Navbar'


function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Navbar />
        <Routes>

        </Routes>
      </Router>
    </>
  )
}

export default App
