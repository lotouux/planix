import { useState } from "react"

export default function Profile() {
    const [userData, setUserData] = useState({
        name: "João Silva",
        email: "joao@example.com",
        phone: "(11) 9 8765-4321",
        cpf: "123.456.789-00",
        birthDate: "1990-05-15",
        city: "São Paulo",
        state: "SP",
    })

    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState(userData)

    const handleSave = (e) => {
        e.preventDefault()
        setUserData(formData)
        setIsEditing(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <main className="dashboard-main">
            <h1>Meu Perfil</h1>
            <p className="welcome-message">Gerencie suas informações pessoais e configurações de conta</p>

            <div style={{ marginTop: "30px", display: "grid", gap: "30px", maxWidth: "800px" }}>
                {/* Profile Card */}
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                        <h2 className="transactions-title">
                            Informações <span>Pessoais</span>
                        </h2>
                        <button onClick={() => setIsEditing(!isEditing)} className="btn-neon-goal">
                            <i className={`bi ${isEditing ? "bi-x" : "bi-pencil"}`}></i> {isEditing ? "Cancelar" : "Editar"}
                        </button>
                    </div>

                    {isEditing ? (
                        <form onSubmit={handleSave} style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                            <div>
                                <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        background: "var(--color-bg-black)",
                                        border: "1px solid #444",
                                        borderRadius: "6px",
                                        color: "#e0e0e0",
                                    }}
                                />
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                <div>
                                    <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            background: "var(--color-bg-black)",
                                            border: "1px solid #444",
                                            borderRadius: "6px",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                        Telefone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            background: "var(--color-bg-black)",
                                            border: "1px solid #444",
                                            borderRadius: "6px",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                <div>
                                    <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                        CPF
                                    </label>
                                    <input
                                        type="text"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            background: "var(--color-bg-black)",
                                            border: "1px solid #444",
                                            borderRadius: "6px",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                        Data de Nascimento
                                    </label>
                                    <input
                                        type="date"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            background: "var(--color-bg-black)",
                                            border: "1px solid #444",
                                            borderRadius: "6px",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                <div>
                                    <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                        Cidade
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            background: "var(--color-bg-black)",
                                            border: "1px solid #444",
                                            borderRadius: "6px",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", color: "#aaa", marginBottom: "5px", fontSize: "0.85rem" }}>
                                        Estado
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            background: "var(--color-bg-black)",
                                            border: "1px solid #444",
                                            borderRadius: "6px",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <button
                                    type="submit"
                                    style={{
                                        padding: "10px 20px",
                                        background: "var(--color-neon-green)",
                                        color: "var(--color-bg-primary)",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Salvar Alterações
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                <div>
                                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>Nome</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem" }}>{userData.name}</p>
                                </div>
                                <div>
                                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>Email</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem" }}>{userData.email}</p>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                <div>
                                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>Telefone</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem" }}>{userData.phone}</p>
                                </div>
                                <div>
                                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>CPF</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem" }}>{userData.cpf}</p>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                <div>
                                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>Data de Nascimento</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem" }}>
                                        {new Date(userData.birthDate).toLocaleDateString("pt-BR")}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>Localização</p>
                                    <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem" }}>
                                        {userData.city}, {userData.state}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Security Section */}
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <h2 className="transactions-title" style={{ marginBottom: "20px" }}>
                        Segurança da <span>Conta</span>
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
                                <p style={{ margin: 0, color: "#e0e0e0", fontWeight: "500" }}>Senha</p>
                                <p style={{ margin: "5px 0 0 0", color: "#888", fontSize: "0.9rem" }}>Última alteração há 3 meses</p>
                            </div>
                            <button
                                style={{
                                    padding: "8px 16px",
                                    background: "transparent",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#aaa",
                                    cursor: "pointer",
                                }}
                            >
                                Alterar
                            </button>
                        </div>

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
                                <p style={{ margin: 0, color: "#e0e0e0", fontWeight: "500" }}>Autenticação em Dois Fatores</p>
                                <p style={{ margin: "5px 0 0 0", color: "#888", fontSize: "0.9rem" }}>Desativada</p>
                            </div>
                            <button
                                style={{
                                    padding: "8px 16px",
                                    background: "var(--color-neon-green)",
                                    color: "var(--color-bg-primary)",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Ativar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
