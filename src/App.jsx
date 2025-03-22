import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LandingPage from './pages/LandingPage'
import CoursesPage from "./pages/CoursesPage"
import FeedbackPage from "./pages/FeedbackPage"
import NotificationPage from './pages/NotificationPage'
import InstructorsDashboardPage from './pages/InstructorsDashboardPage'
import InstructorsProfile from './pages/InstructorsProfile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/notifications" element={<NotificationPage />} />

        <Route path='/instructor/dashboard' element={<InstructorsDashboardPage />} />
        <Route path="/instructor/profile" element={<InstructorsProfile />} />


      </Routes>
    </div>
  )
}

export default App
