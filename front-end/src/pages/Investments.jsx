"use client"

import { useState } from "react"

const investmentData = [
    {
        id: 1,
        name: "PETR4 - Petrobras",
        quantity: 100,
        buyPrice: 28.5,
        currentPrice: 32.8,
        type: "Ação",
    },
    {
        id: 2,
        name: "VALE3 - Vale",
        quantity: 50,
        buyPrice: 65.2,
        currentPrice: 58.9,
        type: "Ação",
    },
    {
        id: 3,
        name: "CDB - Banco do Brasil",
        quantity: 1,
        buyPrice: 10000,
        currentPrice: 10450,
        type: "Renda Fixa",
    },
    {
        id: 4,
        name: "ETF - IVVB11",
        quantity: 20,
        buyPrice: 155.3,
        currentPrice: 168.75,
        type: "ETF",
    },
]

export default function Investments() {
    const [expandedId, setExpandedId] = useState(null)

    const calculateReturn = (buyPrice, currentPrice) => {
        const profit = currentPrice - buyPrice
        const percentage = (profit / buyPrice) * 100
        return { profit, percentage }
    }

    const totalInvested = investmentData.reduce((sum, inv) => sum + inv.quantity * inv.buyPrice, 0)
    const totalCurrent = investmentData.reduce((sum, inv) => sum + inv.quantity * inv.currentPrice, 0)
    const totalReturn = calculateReturn(totalInvested, totalCurrent)

    return (
        <main className="dashboard-main">
            <h1>Minha Carteira de Investimentos</h1>
            <p className="welcome-message">Acompanhe seus investimentos e rentabilidade</p>

            {/* Summary Cards */}
            <div className="balance-card-grid" style={{ marginTop: "30px" }}>
                <div
                    className="balance-card"
                    style={{ "--card-color": "var(--color-neon-green)", "--card-degrade": "var(--degrade-subtle-green)" }}
                >
                    <div className="card-header">
                        <span className="card-title">Total Investido</span>
                        <i className="card-icon bi bi-piggy-bank"></i>
                    </div>
                    <div className="card-value">
                        R$ {totalInvested.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="card-change positive">
                        <i className="bi bi-arrow-up-right"></i>
                        <span className="change-text">Patrimônio Total</span>
                    </div>
                </div>

                <div
                    className="balance-card"
                    style={{ "--card-color": "var(--color-neon-blue)", "--card-degrade": "var(--degrade-subtle-blue)" }}
                >
                    <div className="card-header">
                        <span className="card-title">Valor Atual</span>
                        <i className="card-icon bi bi-graph-up"></i>
                    </div>
                    <div className="card-value">
                        R$ {totalCurrent.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="card-change positive">
                        <i className="bi bi-arrow-up-right"></i>
                        <span className="change-text">Valor Atual</span>
                    </div>
                </div>

                <div
                    className="balance-card"
                    style={{
                        "--card-color": totalReturn.profit >= 0 ? "var(--color-neon-green)" : "var(--color-neon-red)",
                        "--card-degrade": totalReturn.profit >= 0 ? "var(--degrade-subtle-green)" : "var(--degrade-subtle-red)",
                    }}
                >
                    <div className="card-header">
                        <span className="card-title">Retorno Total</span>
                        <i className="card-icon bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="card-value">
                        R$ {totalReturn.profit.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`card-change ${totalReturn.profit >= 0 ? "positive" : "negative"}`}>
                        <i className={`bi ${totalReturn.profit >= 0 ? "bi-arrow-up-right" : "bi-arrow-down-right"}`}></i>
                        <span className="change-text">{totalReturn.percentage.toFixed(2)}%</span>
                    </div>
                </div>
            </div>

            {/* Investments List */}
            <div style={{ marginTop: "30px" }}>
                <div className="transactions-container" style={{ minHeight: "auto" }}>
                    <div className="transactions-header">
                        <h2 className="transactions-title">
                            Seus <span>Investimentos</span>
                        </h2>
                    </div>

                    <div style={{ display: "grid", gap: "15px", position: "relative", zIndex: 1 }}>
                        {investmentData.map((inv) => {
                            const { profit, percentage } = calculateReturn(inv.buyPrice, inv.currentPrice)
                            const totalValue = inv.quantity * inv.currentPrice
                            const isPositive = profit >= 0

                            return (
                                <div
                                    key={inv.id}
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(76, 200, 136, 0.2)",
                                        borderRadius: "8px",
                                        padding: "15px",
                                        cursor: "pointer",
                                        transition: "all 0.3s",
                                    }}
                                    onClick={() => setExpandedId(expandedId === inv.id ? null : inv.id)}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div>
                                            <h3 style={{ margin: "0 0 5px 0", color: "#e0e0e0", fontSize: "1rem" }}>{inv.name}</h3>
                                            <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>
                                                {inv.type} • Qtd: {inv.quantity}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div style={{ color: "var(--color-neon-green)", fontWeight: "bold", marginBottom: "5px" }}>
                                                R$ {totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </div>
                                            <div
                                                style={{
                                                    color: isPositive ? "var(--color-neon-green)" : "var(--color-neon-red)",
                                                    fontSize: "0.9rem",
                                                }}
                                            >
                                                {isPositive ? "+" : ""}
                                                {percentage.toFixed(2)}%
                                            </div>
                                        </div>
                                    </div>

                                    {expandedId === inv.id && (
                                        <div
                                            style={{
                                                marginTop: "15px",
                                                paddingTop: "15px",
                                                borderTop: "1px solid rgba(76, 200, 136, 0.1)",
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr",
                                                gap: "15px",
                                            }}
                                        >
                                            <div>
                                                <p style={{ margin: 0, color: "#888", fontSize: "0.85rem" }}>Preço de Compra</p>
                                                <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem", fontWeight: "bold" }}>
                                                    R${" "}
                                                    {inv.buyPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </p>
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, color: "#888", fontSize: "0.85rem" }}>Preço Atual</p>
                                                <p
                                                    style={{
                                                        margin: "5px 0 0 0",
                                                        color: "var(--color-neon-green)",
                                                        fontSize: "1rem",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    R${" "}
                                                    {inv.currentPrice.toLocaleString("pt-BR", {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2,
                                                    })}
                                                </p>
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, color: "#888", fontSize: "0.85rem" }}>Investimento Total</p>
                                                <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "1rem", fontWeight: "bold" }}>
                                                    R${" "}
                                                    {(inv.quantity * inv.buyPrice).toLocaleString("pt-BR", {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2,
                                                    })}
                                                </p>
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, color: "#888", fontSize: "0.85rem" }}>Lucro/Prejuízo</p>
                                                <p
                                                    style={{
                                                        margin: "5px 0 0 0",
                                                        color: isPositive ? "var(--color-neon-green)" : "var(--color-neon-red)",
                                                        fontSize: "1rem",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    R$ {profit.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </p>
                                            </div>
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
