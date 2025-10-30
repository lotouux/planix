// src/components/Navbar.jsx

import React, { useState } from 'react';
import NotificationPanel from './NotificationPanel'; // Assumindo que você tem este componente
import "bootstrap-icons/font/bootstrap-icons.css";
import PlanixDark from '../assets/Planix_dark.png'; // Substitua pelo caminho real da sua imagem

// Estrutura de links para fácil iteração
const navLinks = [
    {
        title: "Home",
        dropdown: [{ name: "Visão Geral", href: "#" }, { name: "Relatórios", href: "#" }]
    },
    {
        title: "Metas",
        dropdown: [{ name: "Minhas Metas", href: "#" }, { name: "Nova Meta", href: "#" }]
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

    const handleTogglePanel = (e) => {
        if (e) e.preventDefault();
        setIsPanelActive(prev => !prev);
    };

    const handleClosePanel = () => {
        setIsPanelActive(false);
    };

    return (
        <nav>
            <div className="nav-content-wrapper">
                {/* TOPO DA NAVBAR */}
                <div className="nav-top-row">
                    {/* 1. LOGO E PÁGINA ATUAL */}
                    <div className="logo">
                        <img src={PlanixDark} alt="Logo" />
                        <div className="separator"></div>
                        <span className="current-page">Home</span>
                    </div>

                    {/* 2. SEARCH E ASK AI */}
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

                    {/* 3. PERFIL E NOTIFICAÇÕES */}
                    <div className="nav-actions">

                        <a href="#" className="nav-action-wrapper" onClick={handleTogglePanel}>
                            <div className="notification-icon">
                                <i className="bi bi-bell"></i>
                                <span className="notification-badge">{notificationCount}</span>
                            </div>
                        </a>

                        <a href="#" className="nav-action-wrapper profile-avatar">
                            <i className="bi bi-person"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* PRIMEIRA LINHA (FULL WIDTH) */}
            <div className="nav-divider"></div>

            {/* SEGUNDO ENVOLVIMENTO PARA OS LINKS */}
            <div className="nav-content-wrapper">
                {/* LINKS DE NAVEGAÇÃO */}
                <div className="nav-links">

                    {/* Item 1: O título "Menu" */}
                    <span className="nav-links-title">Menu</span>

                    {/* Item 2: O primeiro link "Home" (que será puxado com margin-left negativo) */}
                    {navLinks.map(item => (
                        <div className="nav-item" key={item.title}>
                            <a href={item.href || "#"}>
                                {item.title}
                                {item.dropdown && <span>▼</span>}
                            </a>
                            {item.dropdown && (
                                <div className="dropdown">
                                    {item.dropdown.map(link => (
                                        <a key={link.name} href={link.href}>{link.name}</a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* SEGUNDA LINHA (FULL WIDTH) */}
            <div className="nav-divider full-width"></div>

            {/* INCLUINDO O PAINEL DE NOTIFICAÇÕES */}
            <NotificationPanel isActive={isPanelActive} onClose={handleClosePanel} />
        </nav>
    );
}