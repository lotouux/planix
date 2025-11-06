import { useState } from "react"
import NotificationPanel from "./NotificationPanel"
import Logo from "../assets/Planix_dark.png"

const navLinks = [
    {
        title: "Home",
        dropdown: [
            { name: "Visão Geral", page: "dashboard" },
            { name: "Relatórios", page: "reports" },
        ],
    },
    {
        title: "Metas",
        dropdown: [
            { name: "Minhas Metas", page: "goals" },
        ],
    },
    {
        title: "Transações",
        dropdown: [
            { name: "Minhas Transações", page: "transactions" },
        ],
    },
    {
        title: "Investimentos",
        dropdown: [
            { name: "Carteira", page: "investments" },
        ],
    },
    {
        title: "Configurações",
        dropdown: [
            { name: "Configurações Gerais", page: "settings" },
            { name: "Perfil", page: "profile" },
            { name: "Sair", page: "logout", isLogout: true }, 
        ],
    },
]

export default function Navbar({ currentPage, setCurrentPage, onLogout }) { 
    const [isPanelActive, setIsPanelActive] = useState(false)
    const notificationCount = 3 

    const getPageTitle = (page) => {
        const titles = {
            dashboard: "Dashboard",
            transactions: "Transações",
            investments: "Investimentos",
            goals: "Metas",
            profile: "Perfil",
            settings: "Configurações",
            reports: "Relatórios",
            logout: "Sair", 
        }
        return titles[page] || "Planix"
    }

    const handleLinkClick = (page, isLogout) => {
        if (isLogout) {
            onLogout()
        } else {
            setCurrentPage(page)
        }
    }

    return (
        <nav>
            <div className="nav-content-wrapper">
                <div className="nav-top-row">
                    <div className="logo">
                        <img
                            src={Logo}
                            alt="Planix Logo"
                            style={{ height: "35px", width: "auto", objectFit: "contain" }}
                        />
                        <div className="separator"></div>
                        <span className="current-page">{getPageTitle(currentPage)}</span>
                    </div>

                    <div className="search-container">
                        <div className="search search-field-style">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search..." className="search-input" />
                        </div>
                        <div className="ask-ai search-field-style">
                            <i className="bi bi-robot ai-icon"></i>
                            <a href="#" className="ai-button">
                                ASK AI
                            </a>
                        </div>
                    </div>

                    <div className="nav-actions">
                        <div className="nav-action-wrapper" onClick={() => setIsPanelActive(true)} style={{ cursor: "pointer" }}>
                            <div className="notification-icon">
                                <i className="bi bi-bell"></i>
                                <span className="notification-badge">{notificationCount}</span>
                            </div>
                        </div>

                        <div
                            className="nav-action-wrapper profile-avatar"
                            onClick={() => setCurrentPage("profile")}
                            style={{ cursor: "pointer" }}
                        >
                            <i className="bi bi-person"></i>
                        </div>
                    </div>
                </div>

                <div className="nav-divider"></div>

                <div className="nav-content-wrapper">
                    <div className="nav-links">
                        <span className="nav-links-title">Menu</span>
                            {navLinks.map((item) => (
                                <div key={item.title} className="nav-item">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            if (!item.dropdown) {
                                                handleLinkClick(item.page, item.title === "Sair")
                                            }
                                        }}
                                        className={
                                            item.page === currentPage ||
                                            item.dropdown?.some((link) => link.page === currentPage)
                                                ? "active"
                                                : ""
                                        }
                                        style={{ textDecoration: "none" }}
                                    >
                                        {item.title}
                                        {item.dropdown && <span>▼</span>}
                                    </a>
                                    {item.dropdown && (
                                        <div className="dropdown">
                                            {item.dropdown.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleLinkClick(link.page, link.isLogout) 
                                                    }}
                                                    className={link.page === currentPage ? "active-dropdown-link" : ""}
                                                    style={{ textDecoration: "none" }}
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="nav-divider full-width"></div>
                <NotificationPanel isActive={isPanelActive} onClose={() => setIsPanelActive(false)} />
        </nav>
    )
}