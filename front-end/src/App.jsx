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
    const [userId, setUserId] = useState(null) 
    const [currentPage, setCurrentPage] = useState("dashboard")

    /**
     * Função chamada pelo componente Login em caso de sucesso.
     * @param {number} loggedInUserId - O ID do usuário retornado pelo backend.
     */
    const handleLogin = (loggedInUserId) => {
        if (loggedInUserId) {
            setIsLoggedIn(true)
            setUserId(loggedInUserId) // 🔑 Armazena o ID do usuário
            setCurrentPage("dashboard")
            console.log("Usuário logado com ID:", loggedInUserId)
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setUserId(null)
        setCurrentPage("dashboard")
    }

    if (!isLoggedIn) {
        return <Login onLoginSuccess={handleLogin} />
    }

    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return <Dashboard userId={userId} setCurrentPage={setCurrentPage} />
            case "transactions":

                return <Transactions userId={userId} />
            case "investments":
                return <Investments userId={userId} />
            case "goals":

                return <Goals userId={userId} />
            case "profile":

                return <Profile userId={userId} />
            case "settings":

                return <Settings userId={userId} />
            case "reports":

                return <Reports userId={userId} />
            case "logout":
                handleLogout()
                return null
            default:
                return <Dashboard userId={userId} setCurrentPage={setCurrentPage} />
        }
    }

    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout} />
            <div className="main-content-wrapper">
                {renderPage()}
            </div>
        </>
    )
}

export default App