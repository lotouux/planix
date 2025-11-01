export default function Goals() {
    return (
        <main style={{ minHeight: "100vh" }}>

            <div className="dashboard-main">
                <h1>Minhas Metas Financeiras</h1>
                <p className="welcome-message">Acompanhe e gerencie seus objetivos financeiros</p>

                <div className="balance-card-grid">
                    <div
                        className="balance-card"
                        style={{ "--card-color": "var(--color-neon-green)", "--card-degrade": "var(--degrade-subtle-green)" }}
                    >
                        <div className="card-header">
                            <span className="card-title">Metas Ativas</span>
                            <i className="bi bi-bullseye card-icon"></i>
                        </div>
                        <div className="card-value">5</div>
                        <div className="card-change positive">
                            <i className="bi bi-arrow-up"></i>
                            <span>2 novas esta semana</span>
                        </div>
                    </div>

                    <div
                        className="balance-card"
                        style={{ "--card-color": "var(--color-neon-blue)", "--card-degrade": "var(--degrade-subtle-blue)" }}
                    >
                        <div className="card-header">
                            <span className="card-title">Progresso Médio</span>
                            <i className="bi bi-graph-up card-icon"></i>
                        </div>
                        <div className="card-value">68%</div>
                        <div className="card-change positive">
                            <i className="bi bi-arrow-up"></i>
                            <span>+8% este mês</span>
                        </div>
                    </div>

                    <div
                        className="balance-card"
                        style={{ "--card-color": "var(--color-neon-yellow)", "--card-degrade": "var(--degrade-subtle-yellow)" }}
                    >
                        <div className="card-header">
                            <span className="card-title">Valor Investido</span>
                            <i className="bi bi-cash-coin card-icon"></i>
                        </div>
                        <div className="card-value">R$ 12.5K</div>
                        <div className="card-change positive">
                            <i className="bi bi-arrow-up"></i>
                            <span>+R$ 2.1K este mês</span>
                        </div>
                    </div>

                    <div
                        className="balance-card"
                        style={{ "--card-color": "var(--color-neon-red)", "--card-degrade": "var(--degrade-subtle-red)" }}
                    >
                        <div className="card-header">
                            <span className="card-title">Metas Concluídas</span>
                            <i className="bi bi-check-circle card-icon"></i>
                        </div>
                        <div className="card-value">3</div>
                        <div className="card-change positive">
                            <i className="bi bi-arrow-up"></i>
                            <span>Desde o início</span>
                        </div>
                    </div>
                </div>

                <div className="dashboard-content-grid">
                    <div className="left-column">
                        <div className="goal-tracker-card">
                            <div className="goal-tracker-content-wrapper">
                                <div className="goal-tracker-header">
                                    <div>
                                        <h2 className="goal-tracker-title">Metas em Andamento</h2>
                                        <p className="goal-tracker-subtitle">Acompanhe o progresso de cada meta</p>
                                    </div>
                                    <button className="btn-neon-goal" onclick="addNewGoal()">
                                        <i className="bi bi-plus-circle"></i>
                                        Nova Meta
                                    </button>
                                </div>

                                <div className="goals-list" id="goalsList">
                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <div className="goal-title-group">
                                                <i className="bi bi-house-heart goal-icon"></i>
                                                <h4>Casa Própria</h4>
                                            </div>
                                            <span className="goal-completed">Meta concluída em 18 meses</span>
                                        </div>
                                        <div className="goal-progress-container">
                                            <div className="goal-progress-bar">
                                                <div
                                                    className="goal-progress-fill"
                                                    style={{ width: "75%", backgroundColor: "var(--color-neon-green)" }}
                                                ></div>
                                            </div>
                                            <span className="goal-percentage" style={{ color: "var(--color-neon-green)" }}>
                                                75%
                                            </span>
                                        </div>
                                        <div className="goal-values">
                                            <span className="invested-value">R$ 75.000 investidos</span>
                                            <span className="target-value">/ R$ 100.000</span>
                                        </div>
                                    </div>

                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <div className="goal-title-group">
                                                <i className="bi bi-car-front goal-icon"></i>
                                                <h4>Carro Novo</h4>
                                            </div>
                                            <span className="goal-completed">Meta concluída em 8 meses</span>
                                        </div>
                                        <div className="goal-progress-container">
                                            <div className="goal-progress-bar">
                                                <div
                                                    className="goal-progress-fill"
                                                    style={{ width: "45%", backgroundColor: "var(--color-neon-blue)" }}
                                                ></div>
                                            </div>
                                            <span className="goal-percentage" style={{ color: "var(--color-neon-blue)" }}>
                                                45%
                                            </span>
                                        </div>
                                        <div className="goal-values">
                                            <span className="invested-value">R$ 22.500 investidos</span>
                                            <span className="target-value">/ R$ 50.000</span>
                                        </div>
                                    </div>

                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <div className="goal-title-group">
                                                <i className="bi bi-gift goal-icon"></i>
                                                <h4>Viagem Internacional</h4>
                                            </div>
                                            <span className="goal-completed">Meta concluída em 10 meses</span>
                                        </div>
                                        <div className="goal-progress-container">
                                            <div className="goal-progress-bar">
                                                <div
                                                    className="goal-progress-fill"
                                                    style={{ width: "92%", backgroundColor: "var(--color-neon-yellow)" }}
                                                ></div>
                                            </div>
                                            <span className="goal-percentage" style={{ color: "var(--color-neon-yellow)" }}>
                                                92%
                                            </span>
                                        </div>
                                        <div className="goal-values">
                                            <span className="invested-value">R$ 9.200 investidos</span>
                                            <span className="target-value">/ R$ 10.000</span>
                                        </div>
                                    </div>

                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <div className="goal-title-group">
                                                <i className="bi bi-book goal-icon"></i>
                                                <h4>Educação Continuada</h4>
                                            </div>
                                            <span className="goal-completed">Meta concluída em 12 meses</span>
                                        </div>
                                        <div className="goal-progress-container">
                                            <div className="goal-progress-bar">
                                                <div
                                                    className="goal-progress-fill"
                                                    style={{ width: "58%", backgroundColor: "var(--color-neon-green)" }}
                                                ></div>
                                            </div>
                                            <span className="goal-percentage" style={{ color: "var(--color-neon-green)" }}>
                                                58%
                                            </span>
                                        </div>
                                        <div className="goal-values">
                                            <span className="invested-value">R$ 2.900 investidos</span>
                                            <span className="target-value">/ R$ 5.000</span>
                                        </div>
                                    </div>

                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <div className="goal-title-group">
                                                <i className="bi bi-piggy-bank goal-icon"></i>
                                                <h4>Fundo de Emergência</h4>
                                            </div>
                                            <span className="goal-completed">Meta concluída em 6 meses</span>
                                        </div>
                                        <div className="goal-progress-container">
                                            <div className="goal-progress-bar">
                                                <div
                                                    className="goal-progress-fill"
                                                    style={{ width: "100%", backgroundColor: "var(--color-neon-red)" }}
                                                ></div>
                                            </div>
                                            <span className="goal-percentage" style={{ color: "var(--color-neon-red)" }}>
                                                100%
                                            </span>
                                        </div>
                                        <div className="goal-values">
                                            <span className="invested-value">R$ 30.000 investidos</span>
                                            <span className="target-value">/ R$ 30.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="pet-card">
                            <div className="pet-header">
                                <h3 className="pet-title">FINO-BOT</h3>
                                <p className="pet-subtitle">Seu assistente de metas</p>
                            </div>

                            <div className="pet-image-container">
                                <div className="fino-bot healthy">
                                    <div className="fino-bot-eye left">
                                        <div className="fino-bot-pupil"></div>
                                    </div>
                                    <div className="fino-bot-eye right">
                                        <div className="fino-bot-pupil"></div>
                                    </div>
                                    <div className="fino-bot-mouth"></div>
                                </div>
                            </div>

                            <p className="pet-state">Motivado! 🎯</p>

                            <div className="pet-status">
                                <h3>Progresso Geral</h3>
                                <span className="health-percentage">68%</span>
                                <div className="health-bar-container">
                                    <div className="health-bar-fill" style={{ "--pet-health-percentage": "68%" }}></div>
                                </div>
                            </div>

                            <div className="pet-message">
                                Você está no caminho certo! Continue investindo em suas metas e elas se tornarão realidade. 🚀
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script>
                {`
          function addNewGoal() {
            alert('Funcionalidade de adicionar nova meta em breve!');
          }

          document.addEventListener('DOMContentLoaded', function() {
            const goalItems = document.querySelectorAll('.goal-item');
            goalItems.forEach(item => {
              item.addEventListener('click', function() {
                console.log('Goal item clicked');
              });
            });
          });
        `}
            </script>
        </main>
    )
}
