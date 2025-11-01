import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationPanel from './NotificationPanel';
import "bootstrap-icons/font/bootstrap-icons.css";
import PlanixDark from '../assets/Planix_dark.png';

// Estrutura de links para fácil iteração
const navLinks = [
    {
        title: "Home",
        dropdown: [{ name: "Visão Geral", href: "/" }, { name: "Relatórios", href: "/reports" }]
    },
    {
        title: "Metas",
        dropdown: [{ name: "Minhas Metas", href: "/goals" }, { name: "Nova Meta", href: "#" }]
    },
    {
        title: "Transações",
        dropdown: [{ name: "Minhas Transações", href: "#" }, { name: "Nova Transação", href: "#" }]
    },
    {
        title: "Investimentos",
        dropdown: [{ name: "Carteira", href: "#" }, { name: "Aportes", href: "#" }]
    },
    {
        title: "Configurações",
        href: "#"
    },
];

export default function Navbar() {
    const [isPanelActive, setIsPanelActive] = useState(false);
    const notificationCount = 3;

    return (
        <nav>
            <div className="nav-content-wrapper">
                <div className="nav-top-row">
                    <div className="logo">
                        <img src={PlanixDark} alt="Logo" />
                        <div className="separator"></div>
                        <span className="current-page">Home</span>
                    </div>

                    <div className="search-container">
                        <div className="search search-field-style">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search..." className="search-input" />
                        </div>
                        <div className="ask-ai search-field-style">
                            <i className="bi bi-robot ai-icon"></i>
                            <a href="#" className="ai-button">ASK AI</a>
                        </div>
                    </div>

                    <div className="nav-actions">
                        <div
                            className="nav-action-wrapper"
                            onClick={() => setIsPanelActive(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="notification-icon">
                                <i className="bi bi-bell"></i>
                                <span className="notification-badge">{notificationCount}</span>
                            </div>
                        </div>

                        <a href="#" className="nav-action-wrapper profile-avatar">
                            <i className="bi bi-person"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="nav-divider"></div>

            <div className="nav-content-wrapper">
                <div className="nav-links">
                    <span className="nav-links-title">Menu</span>
                    {navLinks.map(item => (
                        <div className="nav-item" key={item.title}>
                            <Link to={item.href || "#"}>
                                {item.title}
                                {item.dropdown && <span>▼</span>}
                            </Link>
                            {item.dropdown && (
                                <div className="dropdown">
                                    {item.dropdown.map(link => (
                                        <Link key={link.name} to={link.href}>{link.name}</Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="nav-divider full-width"></div>
            <NotificationPanel isActive={isPanelActive} onClose={() => setIsPanelActive(false)} />
        </nav>
    );
}