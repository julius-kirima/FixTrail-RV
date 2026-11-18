import { useContext } from 'react'
import AppRoutes from './routes/AppRoutes'
import './App.css'
import { AppContext } from './context/AppContext'

function App() {
    const appName = useContext(AppContext)

    console.log(appName)

    return <AppRoutes />
}

export default App