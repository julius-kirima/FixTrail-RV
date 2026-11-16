import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './components/Home'
import ReportFault from './components/ReportFault'

import TrackProgress from './components/TrackProgress'
import './App.css'





function AdminDashboard() {
    return <h1>Admin Dashboard</h1>
}

function LandingPage() {
    return (
        <div className="landing-page">
            <Header />
            <Home />
            <ReportFault />
            <TrackProgress />
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    )
}

export default App