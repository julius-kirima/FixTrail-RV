
import { Routes, Route } from 'react-router'
import LandingPage from '../pages/LandingPage'
import AdminDashboard from '../pages/AdminDashboard'
import TrackReport from '../pages/TrackReport'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/track/:referenceNumber" element={<TrackReport />} />
        </Routes>
    )
}
