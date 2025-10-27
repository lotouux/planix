// src/components/NotificationPanel.jsx

import React from 'react';

// Dados de Notificações com ícones de contorno (substituindo o preenchido 'bell-fill' e 'envelope-fill')
const dummyNotifications = [
    {
        id: 1,
        message: "Sua meta de poupança atingiu 80%!",
        time: "5 min atrás",
        icon: "bi-graph-up-arrow"
    },
    {
        id: 2,
        message: "Nova transação de R$ 500,00 adicionada à categoria 'Viagem'.",
        time: "3 horas atrás",
        icon: "bi-credit-card"
    },
    {
        id: 3,
        message: "Um novo relatório mensal está pronto para sua análise.",
        time: "1 dia atrás",
        icon: "bi-file-text"
    },
    {
        id: 4,
        message: "Verificação de segurança necessária para a sua conta.",
        time: "2 dias atrás",
        icon: "bi-shield-exclamation",
        unread: true
    },
];


export default function NotificationPanel({ isActive, onClose }) {
    const totalNotifications = dummyNotifications.length;

    return (
        <>
            <div className={`panel-overlay ${isActive ? 'active' : ''}`} onClick={onClose}></div>
            <div className={`notification-panel ${isActive ? 'active' : ''}`}>

                {/* A. HEADER */}
                <div className="panel-header">
                    <h2>Notificações ({totalNotifications})</h2>
                    <button className="close-button" onClick={onClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                {/* B. LISTA DE NOTIFICAÇÕES */}
                <div className="notification-list">
                    {dummyNotifications.map(notification => (
                        <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>

                            {/* Ícone de Contorno (Outline) */}
                            <i className={`bi ${notification.icon}`}></i>

                            {/* Conteúdo da Notificação (Novo layout) */}
                            <div className="notification-content">
                                <p>{notification.message}</p>
                                {/* Tempo AGORA ESTÁ ABAIXO */}
                                <span>{notification.time}</span>
                            </div>

                        </div>
                    ))}
                </div>

                {/* C. RODAPÉ */}
                <a href="#" className="view-all-link">
                    Ver Todas as Notificações
                </a>
            </div>
        </>
    );
}