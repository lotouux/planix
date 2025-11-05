"use client"

import { useState } from "react"
import BalanceCard from "../components/BalanceCard"
import RevenueExpenseChart from "../components/RevenueExpenseChart"

export default function Reports() {
    const [month, setMonth] = useState("setembro")

    const months = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ]

    return (
        <main className="dashboard-main">
            <h1>Relatórios Financeiros</h1>
            <p className="welcome-message">Análise detalhada do seu desempenho financeiro</p>

            {/* Month Selector */}
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                <label style={{ color: "#aaa", marginRight: "15px", fontSize: "0.9rem" }}>Selecione o mês:</label>
                <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    style={{
                        padding: "8px 15px",
                        background: "var(--color-bg-black)",
                        border: "1px solid #444",
                        borderRadius: "6px",
                        color: "#e0e0e0",
                        cursor: "pointer",
                    }}
                >
                    {months.map((m) => (
                        <option key={m} value={m}>
                            {m.charAt(0).toUpperCase() + m.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {/* Summary Cards */}
            <div className="balance-card-grid">
                <BalanceCard
                    title="Receita Total"
                    value="R$ 8.700,00"
                    change="+15.0%"
                    iconClass="bi-arrow-up-circle"
                    colorVar="var(--color-neon-green)"
                    colorDegrade="var(--degrade-subtle-green)"
                />
                <BalanceCard
                    title="Despesa Total"
                    value="R$ 6.500,00"
                    change="-8.0%"
                    iconClass="bi-arrow-down-circle"
                    colorVar="var(--color-neon-red)"
                    colorDegrade="var(--degrade-subtle-red)"
                />
                <BalanceCard
                    title="Resultado Líquido"
                    value="R$ 2.200,00"
                    change="+28.0%"
                    iconClass="bi-graph-up-arrow"
                    colorVar="var(--color-neon-blue)"
                    colorDegrade="var(--degrade-subtle-blue)"
                />
            </div>

            {/* Chart */}
            <div style={{ marginTop: "30px" }}>
                <RevenueExpenseChart />
            </div>

            {/* Category Breakdown */}
            <div style={{ marginTop: "30px" }}>
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <h2 className="transactions-title" style={{ marginBottom: "20px" }}>
                        Despesas por <span>Categoria</span>
                    </h2>

                    <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                        {[
                            { name: "Moradia", amount: 2500, percentage: 38, color: "var(--color-neon-green)" },
                            { name: "Alimentação", amount: 1200, percentage: 18, color: "var(--color-neon-blue)" },
                            { name: "Transporte", amount: 800, percentage: 12, color: "var(--color-neon-yellow)" },
                            { name: "Saúde", amount: 600, percentage: 9, color: "var(--color-neon-red)" },
                            { name: "Outros", amount: 1400, percentage: 23, color: "var(--color-neon-blue-light)" },
                        ].map((cat, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <div style={{ minWidth: "150px" }}>
                                    <p style={{ margin: 0, color: "#e0e0e0", fontWeight: "500" }}>{cat.name}</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ background: "#1a1a1a", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
                                        <div
                                            style={{
                                                height: "100%",
                                                width: `${cat.percentage}%`,
                                                background: cat.color,
                                                boxShadow: `0 0 8px ${cat.color}`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div style={{ minWidth: "100px", textAlign: "right" }}>
                                    <p style={{ margin: 0, color: cat.color, fontWeight: "bold" }}>
                                        R$ {cat.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    <p style={{ margin: "3px 0 0 0", color: "#888", fontSize: "0.85rem" }}>{cat.percentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
