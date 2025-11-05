"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Investments from "./pages/Investments"
import Goals from "./pages/Goals"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Reports from "./pages/Reports"

function App() {
    const [currentPage, setCurrentPage] = useState("dashboard")

    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return <Dashboard />
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
            default:
                return <Dashboard />
        }
    }

    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {renderPage()}
        </>
    )
}

export default App
