
import React from "react"
import UpperNavbar from "./Components/UpperNavbar"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from "./Pages/Home.jsx"


function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Navbar />
        <Routes>
        <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
