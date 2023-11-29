
import React from "react"
import UpperNavbar from "./Components/UpperNavbar"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from "./Pages/Home.jsx"
import Footer from "./Components/Footer.jsx"
import AboutHome from "./Pages/About/AboutHome.jsx"
import ServiceHome from "./Pages/Service/ServiceHome.jsx"
import TeamHome from "./Pages/OurTeam/TeamHome.jsx"



function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Navbar />
        <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="about" Component={AboutHome} />
        <Route exact path="services" Component={ServiceHome} />
        <Route exact path="team" Component={TeamHome} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
