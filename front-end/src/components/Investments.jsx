"use client"

import { useState } from "react"

const investmentsData = [
    {
        id: 1,
        name: "Ações Petrobras",
        ticker: "PETR4",
        shares: 150,
        valuePerShare: 28.5,
        totalValue: 4275.0,
        change: "+5.2%",
        changeValue: 210.0,
        profitability: 8.5,
    },
    {
        id: 2,
        name: "Fundo Imobiliário XYZ",
        ticker: "HGLG11",
        shares: 50,
        valuePerShare: 95.8,
        totalValue: 4790.0,
        change: "+2.1%",
        changeValue: 98.0,
        profitability: 4.2,
    },
    {
        id: 3,
        name: "ETF S&P 500",
        ticker: "SPPX11",
        shares: 20,
        valuePerShare: 450.0,
        totalValue: 9000.0,
        change: "+12.8%",
        changeValue: 1020.0,
        profitability: 12.8,
    },
    {
        id: 4,
        name: "CDB Banco Popular",
        ticker: "CDB",
        shares: 1,
        valuePerShare: 5000.0,
        totalValue: 5000.0,
        change: "+0.5%",
        changeValue: 25.0,
        profitability: 5.0,
    },
    {
        id: 5,
        name: "Tesouro Direto",
        ticker: "TDXC",
        shares: 10,
        valuePerShare: 850.0,
        totalValue: 8500.0,
        change: "+1.3%",
        changeValue: 110.0,
        profitability: 1.3,
    },
]

export default function Investments() {
    const [selectedInvestment, setSelectedInvestment] = useState(null)

    const totalPortfolio = investmentsData.reduce((acc, inv) => acc + inv.totalValue, 0)
    const totalGain = investmentsData.reduce((acc, inv) => acc + inv.changeValue, 0)
    const avgProfitability = (
        investmentsData.reduce((acc, inv) => acc + inv.profitability, 0) / investmentsData.length
    ).toFixed(2)

    return (
        <main className="dashboard-main">
            <h1>Meus Investimentos</h1>
            <p className="welcome-message">Acompanhe o desempenho da sua carteira de investimentos.</p>

            {/* Cards de Resumo */}
            <div className="balance-card-grid" style={{ marginTop: "30px" }}>
                <div
                    className="balance-card"
                    style={{ "--card-color": "var(--color-neon-green)", "--card-degrade": "var(--degrade-subtle-green)" }}
                >
                    <div className="card-header">
                        <span className="card-title">Carteira Total</span>
                        <i className="card-icon bi bi-briefcase"></i>
                    </div>
                    <div className="card-value">R$ {totalPortfolio.toFixed(2).replace(".", ",")}</div>
                    <div className="card-change positive">
                        <i className="bi bi-arrow-up-right"></i>
                        <span className="change-text">+{totalGain.toFixed(2).replace(".", ",")} Total</span>
                    </div>
                </div>

                <div
                    className="balance-card"
                    style={{ "--card-color": "var(--color-neon-blue-light)", "--card-degrade": "var(--degrade-subtle-blue)" }}
                >
                    <div className="card-header">
                        <span className="card-title">Ganho Total</span>
                        <i className="card-icon bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="card-value">R$ {totalGain.toFixed(2).replace(".", ",")}</div>
                    <div className="card-change positive">
                        <i className="bi bi-arrow-up-right"></i>
                        <span className="change-text">{avgProfitability}% Rentabilidade</span>
                    </div>
                </div>

                <div
                    className="balance-card"
                    style={{ "--card-color": "var(--color-neon-yellow)", "--card-degrade": "var(--degrade-subtle-yellow)" }}
                >
                    <div className="card-header">
                        <span className="card-title">Ativos</span>
                        <i className="card-icon bi bi-bar-chart"></i>
                    </div>
                    <div className="card-value">{investmentsData.length}</div>
                    <div className="card-change">
                        <i className="bi bi-info-circle"></i>
                        <span className="change-text">Diversificado</span>
                    </div>
                </div>
            </div>

            {/* Grid de Investimentos */}
            <div
                style={{
                    marginTop: "40px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {investmentsData.map((inv) => (
                    <div
                        key={inv.id}
                        className="investment-card"
                        onClick={() => setSelectedInvestment(inv)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="investment-header">
                            <div>
                                <h3>{inv.name}</h3>
                                <p>{inv.ticker}</p>
                            </div>
                            <div
                                className="investment-change"
                                style={{ color: inv.change.startsWith("+") ? "var(--color-neon-green)" : "var(--color-neon-red)" }}
                            >
                                {inv.change}
                            </div>
                        </div>

                        <div className="investment-value">
                            <p>Valor Total</p>
                            <h2>R$ {inv.totalValue.toFixed(2).replace(".", ",")}</h2>
                        </div>

                        <div className="investment-details">
                            <div>
                                <span className="detail-label">Quantidade</span>
                                <span className="detail-value">{inv.shares} cotas</span>
                            </div>
                            <div>
                                <span className="detail-label">Valor/Cota</span>
                                <span className="detail-value">R$ {inv.valuePerShare.toFixed(2).replace(".", ",")}</span>
                            </div>
                        </div>

                        <div className="investment-bar">
                            <div
                                className="profit-bar"
                                style={{
                                    width: `${Math.min(inv.profitability * 2, 100)}%`,
                                    backgroundColor: inv.profitability > 5 ? "var(--color-neon-green)" : "var(--color-neon-yellow)",
                                }}
                            ></div>
                        </div>

                        <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "10px" }}>
                            Rentabilidade:{" "}
                            <span style={{ color: inv.profitability > 5 ? "var(--color-neon-green)" : "var(--color-neon-yellow)" }}>
                                {inv.profitability}%
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal de Detalhes */}
            {selectedInvestment && (
                <div className="investment-modal-overlay" onClick={() => setSelectedInvestment(null)}>
                    <div className="investment-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedInvestment(null)}>
                            <i className="bi bi-x"></i>
                        </button>
                        <h2>{selectedInvestment.name}</h2>
                        <div className="modal-content">
                            <div className="modal-row">
                                <span>Ticker</span>
                                <strong>{selectedInvestment.ticker}</strong>
                            </div>
                            <div className="modal-row">
                                <span>Quantidade</span>
                                <strong>{selectedInvestment.shares} cotas</strong>
                            </div>
                            <div className="modal-row">
                                <span>Valor por Cota</span>
                                <strong>R$ {selectedInvestment.valuePerShare.toFixed(2).replace(".", ",")}</strong>
                            </div>
                            <div className="modal-row">
                                <span>Valor Total</span>
                                <strong style={{ color: "var(--color-neon-green)" }}>
                                    R$ {selectedInvestment.totalValue.toFixed(2).replace(".", ",")}
                                </strong>
                            </div>
                            <div className="modal-row">
                                <span>Ganho/Perda</span>
                                <strong
                                    style={{
                                        color: selectedInvestment.change.startsWith("+")
                                            ? "var(--color-neon-green)"
                                            : "var(--color-neon-red)",
                                    }}
                                >
                                    {selectedInvestment.change.startsWith("+") ? "+" : ""} R${" "}
                                    {selectedInvestment.changeValue.toFixed(2).replace(".", ",")}
                                </strong>
                            </div>
                            <div className="modal-row">
                                <span>Rentabilidade</span>
                                <strong
                                    style={{
                                        color:
                                            selectedInvestment.profitability > 5 ? "var(--color-neon-green)" : "var(--color-neon-yellow)",
                                    }}
                                >
                                    {selectedInvestment.profitability}%
                                </strong>
                            </div>
                        </div>
                        <button className="btn-modal-action">
                            <i className="bi bi-pencil"></i> Editar
                        </button>
                    </div>
                </div>
            )}
        </main>
    )
}
