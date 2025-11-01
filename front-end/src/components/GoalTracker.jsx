import React from 'react';

// Dados de exemplo para simular algumas metas
const sampleGoals = [
    {
        id: 1,
        title: "Reserva de Emergência",
        invested: 12500,
        target: 20000,
        color: "var(--color-neon-green)"
    },
    {
        id: 2,
        title: "Viagem Internacional",
        invested: 4500,
        target: 15000,
        color: "var(--color-neon-blue-light)"
    },
    {
        id: 3,
        title: "Troca de Carro",
        invested: 30000,
        target: 30000,
        color: "var(--color-neon-yellow)"
    },
];

const GoalTracker = () => {
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const SINGLE_ICON = "bi-bullseye";

    return (
        // A div externa é removida ou trocada pela que tem o efeito de borda
        <div className="goal-tracker-card">

            {/* Wrapper para garantir que o conteúdo fique acima da borda animada */}
            <div className="goal-tracker-content-wrapper">

                <div className="goal-tracker-header">
                    <h3 className="goal-tracker-title">
                        Minhas Metas
                    </h3>

                    {/* Botão de Nova Meta com estilo Neon */}
                    <button className="btn-neon-goal">
                        <i className="bi bi-plus-lg"></i> Nova Meta
                    </button>
                </div>

                <p className="goal-tracker-subtitle">
                    Acompanhe seu progresso de perto
                </p>

                <div className="goals-list">
                    {sampleGoals.map(goal => {
                        const progress = Math.min((goal.invested / goal.target) * 100, 100);
                        const isCompleted = progress === 100;

                        return (
                            // Removido o borderLeftColor daqui, ele agora está no progresso ou removido para evitar quadrados.
                            <div key={goal.id} className="goal-item">

                                <div className="goal-info">
                                    <div className="goal-title-group"> {/* Novo agrupamento */}
                                        <i
                                            className={`bi ${SINGLE_ICON} goal-icon`}
                                            style={{ color: goal.color }}
                                        ></i>
                                        <h4>{goal.title}</h4>
                                    </div>
                                </div>

                                {/* Barra de progresso e porcentagem no mesmo container flex */}
                                <div className="goal-progress-container">
                                    <div className="goal-progress-bar">
                                        <div
                                            className="goal-progress-fill"
                                            style={{
                                                width: `${progress}%`,
                                                backgroundColor: goal.color,
                                                boxShadow: `0 0 8px ${goal.color}` // Efeito neon na barra
                                            }}
                                        ></div>
                                    </div>
                                    <span className="goal-percentage" style={{ color: goal.color }}>
                                        {Math.round(progress)}%
                                    </span>
                                </div>

                                {/* Valor investido e Valor total da meta */}
                                <div className="goal-values">
                                    <span className="invested-value" style={{ color: goal.color, fontWeight: isCompleted ? '700' : '500' }}>
                                        {formatCurrency(goal.invested)}
                                    </span>
                                    <span className="target-value">
                                        / {formatCurrency(goal.target)}
                                    </span>
                                </div>

                                {isCompleted && <span className="goal-completed" style={{ color: goal.color }}>Meta Atingida! 🎉</span>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GoalTracker;