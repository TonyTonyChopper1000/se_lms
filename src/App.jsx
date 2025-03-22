import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<LandingPage/>} />
      </Routes>
    </div>
  )
}

export default App
