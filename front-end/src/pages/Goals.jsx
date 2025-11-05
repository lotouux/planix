"use client"

import { useState } from "react"

export default function Goals() {
    const [goals, setGoals] = useState([
        {
            id: 1,
            title: "Reserva de Emergência",
            invested: 12500,
            target: 20000,
            color: "var(--color-neon-green)",
            deadline: "2024-12-31",
        },
        {
            id: 2,
            title: "Viagem Internacional",
            invested: 4500,
            target: 15000,
            color: "var(--color-neon-blue-light)",
            deadline: "2025-06-30",
        },
        {
            id: 3,
            title: "Troca de Carro",
            invested: 30000,
            target: 30000,
            color: "var(--color-neon-yellow)",
            deadline: "2025-01-15",
        },
    ])

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({ title: "", target: "", deadline: "" })

    const handleAddGoal = (e) => {
        e.preventDefault()
        if (formData.title && formData.target) {
            const newGoal = {
                id: goals.length + 1,
                title: formData.title,
                invested: 0,
                target: Number.parseFloat(formData.target),
                color: [
                    "var(--color-neon-green)",
                    "var(--color-neon-blue-light)",
                    "var(--color-neon-yellow)",
                    "var(--color-neon-red)",
                ][goals.length % 4],
                deadline: formData.deadline,
            }
            setGoals([...goals, newGoal])
            setFormData({ title: "", target: "", deadline: "" })
            setShowForm(false)
        }
    }

    const formatCurrency = (value) => {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }

    return (
        <main className="dashboard-main">
            <h1>Minhas Metas Financeiras</h1>
            <p className="welcome-message">Crie e acompanhe suas metas de poupança e investimento</p>

            <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                {/* Form */}
                {showForm && (
                    <div className="transactions-container" style={{ minHeight: "auto" }}>
                        <form onSubmit={handleAddGoal} style={{ display: "grid", gap: "15px" }}>
                            <h3 style={{ color: "#e0e0e0", margin: "0 0 10px 0" }}>Nova Meta</h3>
                            <input
                                type="text"
                                placeholder="Título da meta"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                style={{
                                    padding: "10px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                }}
                            />
                            <input
                                type="number"
                                placeholder="Valor da meta"
                                value={formData.target}
                                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                                style={{
                                    padding: "10px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                }}
                            />
                            <input
                                type="date"
                                value={formData.deadline}
                                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                style={{
                                    padding: "10px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                }}
                            />
                            <div style={{ display: "flex", gap: "10px" }}>
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
                                    Criar Meta
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    style={{
                                        padding: "10px 20px",
                                        background: "transparent",
                                        color: "#aaa",
                                        border: "1px solid #444",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Goals List */}
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                        <h2 className="transactions-title">
                            Todas as <span>Metas</span>
                        </h2>
                        <button onClick={() => setShowForm(!showForm)} className="btn-neon-goal">
                            <i className="bi bi-plus-lg"></i> Nova Meta
                        </button>
                    </div>

                    <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                        {goals.map((goal) => {
                            const progress = Math.min((goal.invested / goal.target) * 100, 100)
                            const isCompleted = progress === 100

                            return (
                                <div
                                    key={goal.id}
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: `1px solid rgba(76, 200, 136, 0.2)`,
                                        borderRadius: "8px",
                                        padding: "15px",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "start",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <div>
                                            <h3 style={{ margin: "0 0 5px 0", color: "#e0e0e0", fontSize: "1rem" }}>{goal.title}</h3>
                                            <p style={{ margin: 0, color: "#888", fontSize: "0.85rem" }}>
                                                Prazo: {new Date(goal.deadline).toLocaleDateString("pt-BR")}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div style={{ color: goal.color, fontWeight: "bold", marginBottom: "5px" }}>
                                                {Math.round(progress)}%
                                            </div>
                                        </div>
                                    </div>

                                    <div className="goal-progress-bar" style={{ marginBottom: "10px" }}>
                                        <div
                                            className="goal-progress-fill"
                                            style={{
                                                width: `${progress}%`,
                                                backgroundColor: goal.color,
                                                boxShadow: `0 0 8px ${goal.color}`,
                                            }}
                                        ></div>
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "0.9rem" }}>
                                        <div>
                                            <p style={{ margin: 0, color: "#888" }}>Investido</p>
                                            <p style={{ margin: "3px 0 0 0", color: goal.color, fontWeight: "bold" }}>
                                                {formatCurrency(goal.invested)}
                                            </p>
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, color: "#888" }}>Meta</p>
                                            <p style={{ margin: "3px 0 0 0", color: "#e0e0e0", fontWeight: "bold" }}>
                                                {formatCurrency(goal.target)}
                                            </p>
                                        </div>
                                    </div>

                                    {isCompleted && (
                                        <div style={{ marginTop: "10px", color: goal.color, fontWeight: "bold", textAlign: "center" }}>
                                            ✓ Meta Atingida!
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
