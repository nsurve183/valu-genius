
import React from "react"
import UpperNavbar from "./Components/UpperNavbar"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from "./Pages/Home.jsx"
import Footer from "./Components/Footer.jsx"


function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Navbar />
        <Routes>
        <Route exact path="/" Component={Home} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
