import React, { useState, useEffect } from 'react';
import BalanceCard from "../components/BalanceCard"
import RevenueExpenseChart from "../components/RevenueExpenseChart"
import RecentTransactions from "../components/RecentTransactions"
import FinancialPet from "../components/FinancialPet"
import GoalTracker from "../components/GoalTracker"
import { analysisApi } from '../api/api';

export default function Dashboard({ userId, setCurrentPage }) {
    const [balance, setBalance] = useState(0);
    const [spendingByCategory, setSpendingByCategory] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchData = async () => {
            try {
                const balanceResponse = await analysisApi.fetchTotalBalance(userId);
                setBalance(balanceResponse.data.totalBalance);

                const spendingResponse = await analysisApi.fetchSpendingByCategory(userId);
                setSpendingByCategory(spendingResponse.data);

                const totalIncome = parseFloat(spendingResponse.data.Renda || 0);
                let totalExpenses = 0;
                Object.entries(spendingResponse.data).forEach(([category, amount]) => {
                    if (category !== 'Renda') {
                        totalExpenses += parseFloat(amount);
                    }
                });

                let healthPercentage = 100;
                if (totalIncome > 0) {
                    healthPercentage = Math.round(Math.max(0, 100 - (totalExpenses / totalIncome) * 100)); 
                }

            } catch (err) {
                console.error("Erro ao buscar dados do Dashboard:", err);
                setError("Erro ao carregar dados do Dashboard.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    const cardData = [
        {
            id: 1,
            title: "Saldo Total",
            value: `R$ ${parseFloat(balance).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: "+2.5%",
            icon: "bi-wallet2",
            color: "var(--color-neon-green)",
            degrade: "var(--degrade-subtle-green)",
        },
        {
            id: 2,
            title: "Receitas do Mês",
            value: `R$ ${parseFloat(spendingByCategory.Renda || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, // 💡 USANDO DADO REAL
            change: "+12.0%", 
            icon: "bi-arrow-up-circle",
            color: "var(--color-neon-blue)",
            degrade: "var(--degrade-subtle-blue)",
        },
        {
            id: 3,
            title: "Despesas do Mês",
            value: `R$ ${Object.entries(spendingByCategory).reduce((sum, [cat, val]) => (cat !== 'Renda' ? sum + parseFloat(val) : sum), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, // 💡 USANDO DADO REAL
            change: "-5.3%", 
            icon: "bi-arrow-down-circle",
            color: "var(--color-neon-red)",
            degrade: "var(--degrade-subtle-red)",
        },
        {
            id: 4,
            title: "Economia Líquida",
            value: `R$ ${(parseFloat(spendingByCategory.Renda || 0) - Object.entries(spendingByCategory).reduce((sum, [cat, val]) => (cat !== 'Renda' ? sum + parseFloat(val) : sum), 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: "+25.8%",
            icon: "bi-piggy-bank",
            color: "var(--color-neon-yellow)",
            degrade: "var(--degrade-subtle-yellow)",
        },
    ];

    if (loading) return <main className="dashboard-main"><h2>Carregando Dashboard...</h2></main>;
    if (error) return <main className="dashboard-main"><h2>{error}</h2></main>;

    // CÁLCULO DE SAÚDE FINANCEIRA
    const totalIncome = parseFloat(spendingByCategory.Renda || 0);
    const totalExpenses = Object.entries(spendingByCategory).reduce((sum, [cat, val]) => (cat !== 'Renda' ? sum + parseFloat(val) : sum), 0);
    let healthPercentage = 100;
    if (totalIncome > 0) {
        healthPercentage = Math.round(Math.max(10, 100 * (1 - (totalExpenses / totalIncome)))); 
    } else if (totalExpenses > 0) {
        healthPercentage = 0;
    } else {
        healthPercentage = 100;
    }
    
    return (
        <main className="dashboard-main">
            <h1>Dashboard Financeiro</h1>
            <p className="welcome-message">Bem-vindo(a) de volta! Veja o panorama mensal dos seus investimentos.</p>

            <div className="balance-card-grid">
                {cardData.map((card) => (
                    <BalanceCard
                        key={card.id}
                        title={card.title}
                        value={card.value}
                        change={card.change}
                        iconClass={card.icon}
                        colorVar={card.color}
                        colorDegrade={card.degrade}
                    />
                ))}
            </div>

            <div className="dashboard-content-grid">
                <div className="left-column">
                    <RevenueExpenseChart userId={userId} /> 
                    <RecentTransactions setCurrentPage={setCurrentPage} userId={userId} /> 
                </div>
                <div className="right-column">
                    <FinancialPet financialHealthPercentage={healthPercentage} />
                    <GoalTracker userId={userId} />
                </div>
            </div>
        </main>
    )
}