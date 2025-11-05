"use client"

import { useState } from "react"

export default function Settings() {
    const [settings, setSettings] = useState({
        currency: "BRL",
        language: "pt-BR",
        theme: "dark",
        notifications: true,
        emailAlerts: true,
        pushNotifications: false,
        dataPrivacy: true,
    })

    const handleToggle = (key) => {
        setSettings({ ...settings, [key]: !settings[key] })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setSettings({ ...settings, [name]: value })
    }

    return (
        <main className="dashboard-main">
            <h1>Configurações</h1>
            <p className="welcome-message">Personalize sua experiência com a Planix</p>

            <div style={{ marginTop: "30px", display: "grid", gap: "30px", maxWidth: "800px" }}>
                {/* General Settings */}
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <h2 className="transactions-title" style={{ marginBottom: "20px" }}>
                        Configurações <span>Gerais</span>
                    </h2>
                    <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                        <div>
                            <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.9rem" }}>
                                Moeda Padrão
                            </label>
                            <select
                                name="currency"
                                value={settings.currency}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                }}
                            >
                                <option value="BRL">Real Brasileiro (R$)</option>
                                <option value="USD">Dólar Americano (US$)</option>
                                <option value="EUR">Euro (€)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.9rem" }}>Idioma</label>
                            <select
                                name="language"
                                value={settings.language}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                }}
                            >
                                <option value="pt-BR">Português (Brasil)</option>
                                <option value="en-US">English (US)</option>
                                <option value="es-ES">Español (España)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.9rem" }}>Tema</label>
                            <select
                                name="theme"
                                value={settings.theme}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                }}
                            >
                                <option value="dark">Escuro (Dark Mode)</option>
                                <option value="light">Claro</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <h2 className="transactions-title" style={{ marginBottom: "20px" }}>
                        Notificações
                    </h2>
                    <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                        {[
                            { key: "notifications", label: "Notificações Gerais", desc: "Receba alertas sobre suas atividades" },
                            { key: "emailAlerts", label: "Alertas por Email", desc: "Receba resumos e alertas por email" },
                            { key: "pushNotifications", label: "Notificações Push", desc: "Receba notificações no seu navegador" },
                        ].map((item) => (
                            <div
                                key={item.key}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "15px",
                                    background: "rgba(255,255,255,0.02)",
                                    borderRadius: "6px",
                                    border: "1px solid rgba(76, 200, 136, 0.1)",
                                }}
                            >
                                <div>
                                    <p style={{ margin: 0, color: "#e0e0e0", fontWeight: "500" }}>{item.label}</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#888", fontSize: "0.9rem" }}>{item.desc}</p>
                                </div>
                                <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                    <input
                                        type="checkbox"
                                        checked={settings[item.key]}
                                        onChange={() => handleToggle(item.key)}
                                        style={{ marginRight: "10px", cursor: "pointer" }}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <h2 className="transactions-title" style={{ marginBottom: "20px" }}>
                        Privacidade & <span>Segurança</span>
                    </h2>
                    <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "15px",
                                background: "rgba(255,255,255,0.02)",
                                borderRadius: "6px",
                                border: "1px solid rgba(76, 200, 136, 0.1)",
                            }}
                        >
                            <div>
                                <p style={{ margin: 0, color: "#e0e0e0", fontWeight: "500" }}>Compartilhamento de Dados</p>
                                <p style={{ margin: "5px 0 0 0", color: "#888", fontSize: "0.9rem" }}>
                                    Permitir análise de dados para melhorias
                                </p>
                            </div>
                            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <input
                                    type="checkbox"
                                    checked={settings.dataPrivacy}
                                    onChange={() => handleToggle("dataPrivacy")}
                                    style={{ marginRight: "10px", cursor: "pointer" }}
                                />
                            </label>
                        </div>

                        <button
                            style={{
                                padding: "12px",
                                background: "transparent",
                                border: "1px solid var(--color-neon-red)",
                                color: "var(--color-neon-red)",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontWeight: "500",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = "rgba(228, 77, 38, 0.1)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = "transparent"
                            }}
                        >
                            <i className="bi bi-trash"></i> Deletar Conta
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
