"use client"

import React from "react"


const mockReports = [
    {
        id: "1",
        date: "2024-10-31",
        type: "Income",
        category: "Salary",
        amount: 5000,
        description: "Monthly Salary",
        status: "completed",
    },
    {
        id: "2",
        date: "2024-10-30",
        type: "Expense",
        category: "Utilities",
        amount: 150,
        description: "Electricity Bill",
        status: "completed",
    },
    {
        id: "3",
        date: "2024-10-29",
        type: "Expense",
        category: "Food",
        amount: 250,
        description: "Grocery Shopping",
        status: "completed",
    },
    {
        id: "4",
        date: "2024-10-28",
        type: "Income",
        category: "Freelance",
        amount: 800,
        description: "Project Payment",
        status: "completed",
    },
    {
        id: "5",
        date: "2024-10-27",
        type: "Expense",
        category: "Transport",
        amount: 120,
        description: "Gas",
        status: "pending",
    },
]

const totalIncome = mockReports
    .filter((r) => r.type === "Income")
    .reduce((sum, r) => sum + r.amount, 0)

const totalExpense = mockReports
    .filter((r) => r.type === "Expense")
    .reduce((sum, r) => sum + r.amount, 0)

const balance = totalIncome - totalExpense

// ✅ Função utilitária para aplicar CSS custom properties (versão JS)
const customStyle = (color) => ({
    "--card-color": color,
})


export default function ReportsPage() {
    return (
        <main style={{ minHeight: "100vh" }}>

            <div className="dashboard-main">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    <div>
                        <h1>Relatórios Financeiros</h1>
                        <p className="welcome-message">
                            Visualize e exporte seus dados financeiros
                        </p>
                    </div>

                    <button
                        className="btn-export"
                        onClick={() => {
                            const headers = [
                                "Data",
                                "Tipo",
                                "Categoria",
                                "Descrição",
                                "Valor",
                                "Status",
                            ]
                            const rows = mockReports.map((report) => [
                                report.date,
                                report.type === "Income" ? "Receita" : "Despesa",
                                report.category,
                                report.description,
                                report.amount.toFixed(2),
                                report.status === "completed"
                                    ? "Completo"
                                    : report.status === "pending"
                                        ? "Pendente"
                                        : "Cancelado",
                            ])

                            const csvContent = [
                                headers.join(","),
                                ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
                            ].join("\n")

                            const blob = new Blob([csvContent], {
                                type: "text/csv;charset=utf-8;",
                            })
                            const link = document.createElement("a")
                            const url = URL.createObjectURL(blob)
                            link.setAttribute("href", url)
                            link.setAttribute(
                                "download",
                                `relatorios-${new Date().toISOString().split("T")[0]}.csv`
                            )
                            link.style.visibility = "hidden"
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                        }}
                    >
                        <i className="bi bi-download"></i> Exportar CSV
                    </button>
                </div>

                <div className="balance-card-grid">
                    <div className="balance-card" style={customStyle("var(--color-neon-green)")}>
                        <div className="card-header">
                            <span className="card-title">Receita Total</span>
                            <i className="card-icon bi bi-arrow-up-circle"></i>
                        </div>
                        <div className="card-value">R$ {totalIncome.toFixed(2)}</div>
                        <div className="card-change positive">
                            <i className="bi bi-arrow-up"></i> de todas as entradas
                        </div>
                    </div>

                    <div className="balance-card" style={customStyle("var(--color-neon-red)")}>
                        <div className="card-header">
                            <span className="card-title">Despesa Total</span>
                            <i className="card-icon bi bi-arrow-down-circle"></i>
                        </div>
                        <div className="card-value">R$ {totalExpense.toFixed(2)}</div>
                        <div className="card-change negative">
                            <i className="bi bi-arrow-down"></i> de todas as saídas
                        </div>
                    </div>

                    <div className="balance-card" style={customStyle("var(--color-neon-blue)")}>
                        <div className="card-header">
                            <span className="card-title">Saldo</span>
                            <i className="card-icon bi bi-wallet2"></i>
                        </div>
                        <div className="card-value">R$ {balance.toFixed(2)}</div>
                        <div
                            className={`card-change ${balance >= 0 ? "positive" : "negative"
                                }`}
                        >
                            <i
                                className={`bi ${balance >= 0 ? "bi-graph-up" : "bi-graph-down"
                                    }`}
                            ></i>
                            {balance >= 0 ? "Saldo positivo" : "Saldo negativo"}
                        </div>
                    </div>

                    <div className="balance-card" style={customStyle("var(--color-neon-yellow)")}>
                        <div className="card-header">
                            <span className="card-title">Total de Registros</span>
                            <i className="card-icon bi bi-list-check"></i>
                        </div>
                        <div className="card-value">{mockReports.length}</div>
                        <div className="card-change">
                            <i className="bi bi-info-circle"></i> Transações
                        </div>
                    </div>
                </div>

                <div className="transactions-section">
                    <div className="transactions-container">
                        <div className="transactions-header">
                            <h2 className="transactions-title">
                                Detalhamento <span>de Transações</span>
                            </h2>
                        </div>

                        <table className="transactions-table">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Tipo</th>
                                    <th>Categoria</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockReports.map((report) => (
                                    <tr key={report.id}>
                                        <td>{new Date(report.date).toLocaleDateString("pt-BR")}</td>
                                        <td
                                            className={
                                                report.type === "Income"
                                                    ? "transaction-type-income"
                                                    : "transaction-type-expense"
                                            }
                                        >
                                            {report.type === "Income" ? "Receita" : "Despesa"}
                                        </td>
                                        <td>{report.category}</td>
                                        <td>{report.description}</td>
                                        <td
                                            className={
                                                report.type === "Income"
                                                    ? "transaction-type-income"
                                                    : "transaction-type-expense"
                                            }
                                        >
                                            {report.type === "Income" ? "+" : "-"} R${" "}
                                            {report.amount.toFixed(2)}
                                        </td>
                                        <td>
                                            <span className={`status-badge status-${report.status}`}>
                                                {report.status === "completed"
                                                    ? "Completo"
                                                    : report.status === "pending"
                                                        ? "Pendente"
                                                        : "Cancelado"}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
