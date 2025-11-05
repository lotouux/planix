import { useState } from "react"

const allTransactions = [
    {
        id: 1,
        date: "27 Set",
        description: "Salário - [Empresa X]",
        category: "Renda",
        type: "income",
        amount: 7200.0,
    },
    {
        id: 2,
        date: "26 Set",
        description: "Aluguel do Apartamento",
        category: "Moradia",
        type: "expense",
        amount: -2500.0,
    },
    {
        id: 3,
        date: "25 Set",
        description: "Investimento em Ações",
        category: "Investimentos",
        type: "income",
        amount: 350.5,
    },
    {
        id: 4,
        date: "24 Set",
        description: "Supermercado (Semanal)",
        category: "Alimentação",
        type: "expense",
        amount: -420.0,
    },
    {
        id: 5,
        date: "24 Set",
        description: "Assinatura - Software",
        category: "Serviços",
        type: "expense",
        amount: -89.9,
    },
    {
        id: 6,
        date: "23 Set",
        description: "Freelance Project",
        category: "Renda",
        type: "income",
        amount: 1500.0,
    },
]

export default function Transactions() {
    const [filterType, setFilterType] = useState("all")
    const [filterCategory, setFilterCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredTransactions = allTransactions.filter((t) => {
        const matchType =
            filterType === "all" ||
            (filterType === "income" && t.type === "income") ||
            (filterType === "expense" && t.type === "expense")
        const matchCategory = filterCategory === "all" || t.category === filterCategory
        const matchSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchType && matchCategory && matchSearch
    })

    const categories = ["all", ...new Set(allTransactions.map((t) => t.category))]

    const formatAmount = (amount, type) => {
        const sign = type === "expense" ? "-" : "+"
        const colorClass = type === "expense" ? "transaction-type-expense" : "transaction-type-income"
        return (
            <span className={colorClass}>
                {sign} R$ {Math.abs(amount).toFixed(2).replace(".", ",")}
            </span>
        )
    }

    return (
        <main className="dashboard-main">
            <h1>Minhas Transações</h1>
            <p className="welcome-message">Visualize e gerencie todas as suas transações financeiras</p>

            <div style={{ marginTop: "30px" }}>
                <div className="transactions-container" style={{ minHeight: "auto", padding: "20px" }}>
                    <div style={{ marginBottom: "20px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                        <div style={{ flex: 1, minWidth: "200px" }}>
                            <label style={{ display: "block", marginBottom: "5px", color: "#aaa", fontSize: "0.9rem" }}>Tipo</label>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                    fontSize: "0.9rem",
                                }}
                            >
                                <option value="all">Todos</option>
                                <option value="income">Receita</option>
                                <option value="expense">Despesa</option>
                            </select>
                        </div>

                        <div style={{ flex: 1, minWidth: "200px" }}>
                            <label style={{ display: "block", marginBottom: "5px", color: "#aaa", fontSize: "0.9rem" }}>
                                Categoria
                            </label>
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat === "all" ? "Todas" : cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ flex: 1, minWidth: "200px" }}>
                            <label style={{ display: "block", marginBottom: "5px", color: "#aaa", fontSize: "0.9rem" }}>Buscar</label>
                            <input
                                type="text"
                                placeholder="Digite para buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    background: "var(--color-bg-black)",
                                    border: "1px solid #444",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                    fontSize: "0.9rem",
                                }}
                            />
                        </div>
                    </div>

                    <table className="transactions-table" style={{ position: "relative", zIndex: 1 }}>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((t) => (
                                <tr key={t.id}>
                                    <td>{t.date}</td>
                                    <td>{t.description}</td>
                                    <td>{t.category}</td>
                                    <td>{formatAmount(t.amount, t.type)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}
