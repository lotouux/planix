"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Investments from "./pages/Investments"
import Goals from "./pages/Goals"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Reports from "./pages/Reports"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentPage, setCurrentPage] = useState("dashboard")

    const handleLogin = (success) => {
        if (success) {
            setIsLoggedIn(true)
            setCurrentPage("dashboard")
        }
    }

    if (!isLoggedIn) {
        return <Login onLoginSuccess={() => handleLogin(true)} />
    }

    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return <Dashboard setCurrentPage={setCurrentPage} />
            case "transactions":
                return <Transactions />
            case "investments":
                return <Investments />
            case "goals":
                return <Goals />
            case "profile":
                return <Profile />
            case "settings":
                return <Settings />
            case "reports":
                return <Reports />
            case "logout":
                setIsLoggedIn(false)
                setCurrentPage("dashboard")
                return null
            default:
                return <Dashboard setCurrentPage={setCurrentPage} />
        }
    }

    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="main-content-wrapper">
                {renderPage()}
            </div>
        </>
    )
}

export default App