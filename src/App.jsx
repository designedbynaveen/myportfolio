import React from "react"
import Home from "./Pages/Home"
import { BrowserRouter as Router,Route , Routes } from "react-router"
import BrandPage from "./Pages/BrandPage"
import Story from "./components/Story"

function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/BrandPage" element={<BrandPage/>}/>
      <Route path="/StoryPage" element={<Story/>}/>

      </Routes>
  
    </Router>
    </>
  )
}

export default App
