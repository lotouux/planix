import BalanceCard from "../components/BalanceCard"
import RevenueExpenseChart from "../components/RevenueExpenseChart"
import RecentTransactions from "../components/RecentTransactions"
import FinancialPet from "../components/FinancialPet"
import GoalTracker from "../components/GoalTracker"

const cardData = [
    {
        id: 1,
        title: "Saldo Total",
        value: "R$ 15.500,00",
        change: "+2.5%",
        icon: "bi-wallet2",
        color: "var(--color-neon-green)",
        degrade: "var(--degrade-subtle-green)",
    },
    {
        id: 2,
        title: "Receitas do Mês",
        value: "R$ 6.200,00",
        change: "+12.0%",
        icon: "bi-arrow-up-circle",
        color: "var(--color-neon-blue)",
        degrade: "var(--degrade-subtle-blue)",
    },
    {
        id: 3,
        title: "Despesas do Mês",
        value: "R$ 4.500,00",
        change: "-5.3%",
        icon: "bi-arrow-down-circle",
        color: "var(--color-neon-red)",
        degrade: "var(--degrade-subtle-red)",
    },
    {
        id: 4,
        title: "Economia Líquida",
        value: "R$ 1.700,00",
        change: "+25.8%",
        icon: "bi-piggy-bank",
        color: "var(--color-neon-yellow)",
        degrade: "var(--degrade-subtle-yellow)",
    },
]

export default function Dashboard() {
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
                    <RevenueExpenseChart />
                    <RecentTransactions />
                </div>
                <div className="right-column">
                    <FinancialPet financialHealthPercentage={75} />
                    <GoalTracker />
                </div>
            </div>
        </main>
    )
}
