import { useState } from "react"

export default function Profile() {
    const [user, setUser] = useState({
        name: "João Silva",
        email: "joao.silva@email.com",
        phone: "(11) 99999-8888",
        cpf: "123.456.789-00",
        birthDate: "15/05/1990",
        occupation: "Analista de Sistemas",
        joinDate: "15 de Janeiro de 2023",
    })

    const [isEditing, setIsEditing] = useState(false)
    const [editData, setEditData] = useState(user)

    const handleEditChange = (field, value) => {
        setEditData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSave = () => {
        setUser(editData)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setEditData(user)
        setIsEditing(false)
    }

    return (
        <main className="dashboard-main">
            <h1>Meu Perfil</h1>
            <p className="welcome-message">Gerencie suas informações pessoais e dados da conta.</p>

            <div style={{ marginTop: "30px" }}>
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="profile-avatar-large">
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className="profile-info-header">
                            <h2>{user.name}</h2>
                            <p>{user.occupation}</p>
                        </div>
                        <button className="btn-edit-profile" onClick={() => setIsEditing(!isEditing)}>
                            <i className="bi bi-pencil"></i> {isEditing ? "Cancelar" : "Editar"}
                        </button>
                    </div>

                    {isEditing ? (
                        <div className="profile-form">
                            <div className="form-group">
                                <label>Nome Completo</label>
                                <input
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => handleEditChange("name", e.target.value)}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={editData.email}
                                    onChange={(e) => handleEditChange("email", e.target.value)}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>Telefone</label>
                                <input
                                    type="tel"
                                    value={editData.phone}
                                    onChange={(e) => handleEditChange("phone", e.target.value)}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>Profissão</label>
                                <input
                                    type="text"
                                    value={editData.occupation}
                                    onChange={(e) => handleEditChange("occupation", e.target.value)}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-actions">
                                <button className="btn-save" onClick={handleSave}>
                                    <i className="bi bi-check-circle"></i> Salvar Alterações
                                </button>
                                <button className="btn-cancel" onClick={handleCancel}>
                                    <i className="bi bi-x-circle"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="profile-details">
                            <div className="detail-row">
                                <span className="detail-label">Email:</span>
                                <span className="detail-value">{user.email}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Telefone:</span>
                                <span className="detail-value">{user.phone}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">CPF:</span>
                                <span className="detail-value">{user.cpf}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Data de Nascimento:</span>
                                <span className="detail-value">{user.birthDate}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Profissão:</span>
                                <span className="detail-value">{user.occupation}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Membro desde:</span>
                                <span className="detail-value">{user.joinDate}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="profile-sections">
                    <div className="profile-section">
                        <h3>
                            <i className="bi bi-shield-lock"></i> Segurança da Conta
                        </h3>
                        <button className="btn-section">
                            <span>Alterar Senha</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                        <button className="btn-section">
                            <span>Autenticação de Dois Fatores</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                        <button className="btn-section">
                            <span>Dispositivos Conectados</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>

                    <div className="profile-section">
                        <h3>
                            <i className="bi bi-bell"></i> Notificações
                        </h3>
                        <button className="btn-section">
                            <span>Preferências de Email</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                        <button className="btn-section">
                            <span>Alertas de Transação</span>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
