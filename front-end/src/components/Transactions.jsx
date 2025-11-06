import React, { useState } from "react"

const allTransactions = [
    {
        id: 1,
        date: "27 Set",
        time: "14:30",
        description: "Salário - Empresa X",
        category: "Renda",
        type: "income",
        amount: 7200.0,
        icon: "bi-briefcase",
    },
    {
        id: 2,
        date: "26 Set",
        time: "09:15",
        description: "Aluguel do Apartamento",
        category: "Moradia",
        type: "expense",
        amount: -2500.0,
        icon: "bi-house",
    },
    {
        id: 3,
        date: "25 Set",
        time: "16:45",
        description: "Investimento em Ações",
        category: "Investimentos",
        type: "income",
        amount: 350.5,
        icon: "bi-graph-up",
    },
    {
        id: 4,
        date: "24 Set",
        time: "11:20",
        description: "Supermercado (Semanal)",
        category: "Alimentação",
        type: "expense",
        amount: -420.0,
        icon: "bi-cart",
    },
    {
        id: 5,
        date: "24 Set",
        time: "08:30",
        description: "Assinatura - Software",
        category: "Serviços",
        type: "expense",
        amount: -89.9,
        icon: "bi-app",
    },
    {
        id: 6,
        date: "23 Set",
        time: "13:00",
        description: "Freelance - Projeto Web",
        category: "Renda Extra",
        type: "income",
        amount: 1500.0,
        icon: "bi-laptop",
    },
    {
        id: 7,
        date: "22 Set",
        time: "10:10",
        description: "Academia (Mensalidade)",
        category: "Saúde",
        type: "expense",
        amount: -150.0,
        icon: "bi-heart",
    },
    {
        id: 8,
        date: "21 Set",
        time: "15:45",
        description: "Compras - Shopping",
        category: "Vestuário",
        type: "expense",
        amount: -350.0,
        icon: "bi-bag",
    },
    {
        id: 9,
        date: "20 Set",
        time: "12:30",
        description: "Reembolso - Viagem",
        category: "Viagem",
        type: "income",
        amount: 800.0,
        icon: "bi-airplane",
    },
    {
        id: 10,
        date: "19 Set",
        time: "09:00",
        description: "Conta de Água/Luz",
        category: "Utilidades",
        type: "expense",
        amount: -250.0,
        icon: "bi-lightning",
    },
]

export default function Transactions() {
    const [filteredTransactions, setFilteredTransactions] = useState(allTransactions)
    const [filterType, setFilterType] = useState("all")
    const [filterCategory, setFilterCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const categories = [
        "Renda",
        "Moradia",
        "Investimentos",
        "Alimentação",
        "Serviços",
        "Renda Extra",
        "Saúde",
        "Vestuário",
        "Viagem",
        "Utilidades",
    ]

    React.useEffect(() => {
        let result = allTransactions

        if (filterType !== "all") {
            result = result.filter((t) => t.type === filterType)
        }

        if (filterCategory !== "all") {
            result = result.filter((t) => t.category === filterCategory)
        }

        if (searchTerm) {
            result = result.filter(
                (t) =>
                    t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    t.category.toLowerCase().includes(searchTerm.toLowerCase()),
            )
        }

        setFilteredTransactions(result)
    }, [filterType, filterCategory, searchTerm])

    const formatAmount = (amount, type) => {
        const sign = type === "expense" ? "-" : "+"
        return `${sign} R$ ${Math.abs(amount).toFixed(2).replace(".", ",")}`
    }

    const totalIncome = allTransactions.filter((t) => t.type === "income").reduce((acc, t) => acc + t.amount, 0)
    const totalExpense = allTransactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => acc + Math.abs(t.amount), 0)
    const netBalance = totalIncome - totalExpense

    return (
        <main className="dashboard-main">
            <h1>Transações</h1>
            <p className="welcome-message">Visualize e gerencie todas as suas transações financeiras.</p>

            <div
                className="transactions-summary"
                style={{
                    marginTop: "30px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                }}
            >
                <div className="summary-card" style={{ borderLeft: "3px solid var(--color-neon-green)" }}>
                    <p>Receitas</p>
                    <h3 style={{ color: "var(--color-neon-green)" }}>R$ {totalIncome.toFixed(2).replace(".", ",")}</h3>
                </div>
                <div className="summary-card" style={{ borderLeft: "3px solid var(--color-neon-red)" }}>
                    <p>Despesas</p>
                    <h3 style={{ color: "var(--color-neon-red)" }}>R$ {totalExpense.toFixed(2).replace(".", ",")}</h3>
                </div>
                <div
                    className="summary-card"
                    style={{ borderLeft: `3px solid ${netBalance >= 0 ? "var(--color-neon-green)" : "var(--color-neon-red)"}` }}
                >
                    <p>Balanço</p>
                    <h3 style={{ color: netBalance >= 0 ? "var(--color-neon-green)" : "var(--color-neon-red)" }}>
                        R$ {netBalance.toFixed(2).replace(".", ",")}
                    </h3>
                </div>
            </div>

            <div
                className="filters-section"
                style={{
                    marginTop: "30px",
                    display: "grid",
                    gap: "15px",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                }}
            >
                <div className="filter-group">
                    <label>Tipo de Transação</label>
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="settings-select">
                        <option value="all">Todas</option>
                        <option value="income">Receitas</option>
                        <option value="expense">Despesas</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Categoria</label>
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="settings-select"
                    >
                        <option value="all">Todas</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label>Buscar</label>
                    <input
                        type="text"
                        placeholder="Buscar transação..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="form-input"
                    />
                </div>
            </div>

            <div className="transactions-container" style={{ marginTop: "30px" }}>
                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>Data/Hora</th>
                            <th>Descrição</th>
                            <th>Categoria</th>
                            <th>Valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((t) => (
                                <tr key={t.id}>
                                    <td>
                                        <div style={{ fontSize: "0.85rem" }}>
                                            <div>{t.date}</div>
                                            <div style={{ color: "#888", fontSize: "0.75rem" }}>{t.time}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <i
                                                className={`bi ${t.icon}`}
                                                style={{ color: t.type === "income" ? "var(--color-neon-green)" : "var(--color-neon-red)" }}
                                            ></i>
                                            {t.description}
                                        </div>
                                    </td>
                                    <td>{t.category}</td>
                                    <td className={t.type === "income" ? "transaction-type-income" : "transaction-type-expense"}>
                                        {formatAmount(t.amount, t.type)}
                                    </td>
                                    <td>
                                        <button className="btn-action">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center", padding: "30px", color: "#888" }}>
                                    Nenhuma transação encontrada
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
