const transactionsData = [
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
        description: "Investimento em Ações (Variação)",
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
        description: "Assinatura - Software Financeiro",
        category: "Serviços",
        type: "expense",
        amount: -89.9,
    },
]

const RecentTransactions = () => {
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
        <div className="transactions-section">
            <div className="transactions-container">
                <div className="transactions-header">
                    <h2 className="transactions-title">
                        <span>Transações</span> Recentes
                    </h2>
                </div>

                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Categoria</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsData.map((t) => (
                            <tr key={t.id}>
                                <td>{t.date}</td>
                                <td>{t.description}</td>
                                <td>{t.category}</td>
                                <td>{formatAmount(t.amount, t.type)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <a href="#" className="view-all-link">
                    Ver Todas as Transações &rarr;
                </a>
            </div>
        </div>
    )
}

export default RecentTransactions
