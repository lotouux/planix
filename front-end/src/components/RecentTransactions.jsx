import React, { useState, useEffect } from 'react';
import { transactionApi } from '../api/api';

const formatAmount = (value, type) => {
    const sign = type === "expense" ? "-" : "+";
    const absoluteValue = Math.abs(value);
    const formattedValue = absoluteValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return `${sign} ${formattedValue}`;
};

const RecentTransactions = ({ setCurrentPage, userId }) => {
    const [transactionsData, setTransactionsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        const fetchTransactions = async () => {
            try {
                const response = await transactionApi.fetchUserTransactions();

                const recent = response.data.slice(0, 5).map(t => ({
                    id: t.id,
                    date: new Date(t.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', ''), 
                    description: t.description,
                    category: t.category,
                    type: parseFloat(t.amount) >= 0 ? 'income' : 'expense',
                    amount: parseFloat(t.amount)
                }));
                setTransactionsData(recent);
            } catch (err) {
                console.error("Erro ao buscar transações recentes:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [userId]);

    const handleViewAllClick = (e) => {
        e.preventDefault();
        setCurrentPage("transactions");
    };

    return (
        <div className="transactions-section">
            <div className="transactions-container">
                <div className="transactions-header">
                    <h2 className="transactions-title">
                        <span>Transações</span> Recentes
                    </h2>
                </div>

                {loading ? (
                    <p style={{ textAlign: "center", padding: "30px", color: "#888" }}>Carregando...</p>
                ) : transactionsData.length > 0 ? (
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
                ) : (
                    <p style={{ textAlign: "center", padding: "30px", color: "#888" }}>
                        Nenhuma transação encontrada
                    </p>
                )}


                <a
                    href="#"
                    className="view-all-link"
                    onClick={handleViewAllClick}
                >
                    Ver Todas as Transações &rarr;
                </a>
            </div>
        </div>
    )
}

export default RecentTransactions