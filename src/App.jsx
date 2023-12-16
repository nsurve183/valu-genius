
import React from "react"
import UpperNavbar from "./Components/UpperNavbar"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from "./Pages/Home.jsx"
import Footer from "./Components/Footer.jsx"
import AboutHome from "./Pages/About/AboutHome.jsx"
import ServiceHome from "./Pages/Service/ServiceHome.jsx"
import TeamHome from "./Pages/OurTeam/TeamHome.jsx"
import BlogHome from "./Pages/Blog/BlogHome.jsx"
import ContactHome from "./Pages/ContactUs/ContactHome.jsx"
import Business from "./PageLink/Business.jsx"

function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Navbar />
        <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={AboutHome} />
        <Route exact path="/services" Component={ServiceHome} />
        <Route exact path="/team" Component={TeamHome} />
        <Route exact path="/blog" Component={BlogHome}/>
        <Route exact path="/contactus" Component={ContactHome}/>
        <Route exact path="/business-valuation" Component={Business}/>
        <Route exact path = '/mergers-valuation' Component={Business}/>
        <Route exact path = '/RBI-valuations' Component={Business}/>
        <Route exact path = '/ESOP-valuations' Component={Business}/>
        <Route exact path = '/Why-Valuation-Services' Component={Business}/>
        <Route exact path = '/Ind-AS-Valuations' Component={Business}/>
        <Route exact path = '/covertable-instruments-valuations' Component={Business}/>
        <Route exact path = '/Intangible-Assets-Valuations' Component={Business}/>
        <Route exact path = '/Fairness-Opinion-Valuations' Component={Business}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
