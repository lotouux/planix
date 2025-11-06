import { useState } from "react"

export default function Settings() {
    const [settings, setSettings] = useState({
        currency: "BRL",
        theme: "dark",
        language: "pt-BR",
        notifications: true,
        emailNotifications: true,
        pushNotifications: false,
        marketingEmails: false,
        dataSharing: true,
    })

    const handleToggle = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const handleSelect = (key, value) => {
        setSettings((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <main className="dashboard-main">
            <h1>Configurações</h1>
            <p className="welcome-message">Personalize sua experiência no Planix.</p>

            <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div className="settings-card">
                    <h2 className="settings-title">
                        <i className="bi bi-gear"></i> Preferências Gerais
                    </h2>

                    <div className="settings-group">
                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Moeda Padrão</label>
                                <p>Escolha a moeda para exibição de valores</p>
                            </div>
                            <select
                                value={settings.currency}
                                onChange={(e) => handleSelect("currency", e.target.value)}
                                className="settings-select"
                            >
                                <option value="BRL">Real Brasileiro (R$)</option>
                                <option value="USD">Dólar Americano ($)</option>
                                <option value="EUR">Euro (€)</option>
                            </select>
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Idioma</label>
                                <p>Selecione o idioma da interface</p>
                            </div>
                            <select
                                value={settings.language}
                                onChange={(e) => handleSelect("language", e.target.value)}
                                className="settings-select"
                            >
                                <option value="pt-BR">Português (Brasil)</option>
                                <option value="en-US">English (United States)</option>
                                <option value="es-ES">Español (España)</option>
                            </select>
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Tema</label>
                                <p>Escolha como exibir a interface</p>
                            </div>
                            <div className="theme-selector">
                                <button
                                    className={`theme-btn ${settings.theme === "dark" ? "active" : ""}`}
                                    onClick={() => handleSelect("theme", "dark")}
                                >
                                    <i className="bi bi-moon"></i> Escuro
                                </button>
                                <button
                                    className={`theme-btn ${settings.theme === "light" ? "active" : ""}`}
                                    onClick={() => handleSelect("theme", "light")}
                                >
                                    <i className="bi bi-sun"></i> Claro
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="settings-card">
                    <h2 className="settings-title">
                        <i className="bi bi-bell"></i> Notificações
                    </h2>

                    <div className="settings-group">
                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Notificações Gerais</label>
                                <p>Receba alertas sobre sua conta</p>
                            </div>
                            <button
                                className={`toggle-btn ${settings.notifications ? "active" : ""}`}
                                onClick={() => handleToggle("notifications")}
                            >
                                <span className="toggle-indicator"></span>
                            </button>
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Notificações por Email</label>
                                <p>Receba atualizações via email</p>
                            </div>
                            <button
                                className={`toggle-btn ${settings.emailNotifications ? "active" : ""}`}
                                onClick={() => handleToggle("emailNotifications")}
                            >
                                <span className="toggle-indicator"></span>
                            </button>
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Notificações Push</label>
                                <p>Receba alertas no navegador</p>
                            </div>
                            <button
                                className={`toggle-btn ${settings.pushNotifications ? "active" : ""}`}
                                onClick={() => handleToggle("pushNotifications")}
                            >
                                <span className="toggle-indicator"></span>
                            </button>
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Emails de Marketing</label>
                                <p>Receba promoções e novidades</p>
                            </div>
                            <button
                                className={`toggle-btn ${settings.marketingEmails ? "active" : ""}`}
                                onClick={() => handleToggle("marketingEmails")}
                            >
                                <span className="toggle-indicator"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="settings-card">
                    <h2 className="settings-title">
                        <i className="bi bi-shield-check"></i> Privacidade e Segurança
                    </h2>

                    <div className="settings-group">
                        <div className="settings-item">
                            <div className="settings-label">
                                <label>Compartilhamento de Dados</label>
                                <p>Permita análise de dados para melhorias</p>
                            </div>
                            <button
                                className={`toggle-btn ${settings.dataSharing ? "active" : ""}`}
                                onClick={() => handleToggle("dataSharing")}
                            >
                                <span className="toggle-indicator"></span>
                            </button>
                        </div>

                        <button className="btn-section" style={{ marginTop: "20px" }}>
                            <span>
                                <i className="bi bi-trash"></i> Deletar Conta Permanentemente
                            </span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div className="settings-card">
                    <h2 className="settings-title">
                        <i className="bi bi-info-circle"></i> Informações
                    </h2>

                    <div className="info-section">
                        <p>
                            <strong>Versão do App:</strong> 1.0.0
                        </p>
                        <p>
                            <strong>Última atualização:</strong> 15 de Novembro de 2025
                        </p>
                        <button className="btn-section">
                            <span>Política de Privacidade</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                        <button className="btn-section">
                            <span>Termos de Serviço</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
