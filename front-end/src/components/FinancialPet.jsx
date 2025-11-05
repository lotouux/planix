const FinancialPet = ({ financialHealthPercentage = 80 }) => {
    let healthColor = ""
    let message = ""
    let mascotStatusClass = ""
    let statusText = ""

    if (financialHealthPercentage >= 80) {
        healthColor = "var(--color-neon-green)"
        statusText = "Excelente"
        message = "Parabéns! Suas finanças estão <span>excelentes</span>. O Fino-Bot está no auge do desempenho!"
        mascotStatusClass = "excellent"
    } else if (financialHealthPercentage >= 50) {
        healthColor = "var(--color-neon-blue-light)"
        statusText = "Saudável"
        message = "Bom trabalho! Suas finanças estão <span>saudáveis</span>. O Fino-Bot opera com eficiência."
        mascotStatusClass = "healthy"
    } else if (financialHealthPercentage >= 20) {
        healthColor = "var(--color-neon-yellow)"
        statusText = "Atenção"
        message = "Atenção! Suas finanças precisam de um <span>olhar mais atento</span>. O Fino-Bot pisca o alerta."
        mascotStatusClass = "warning"
    } else {
        healthColor = "var(--color-neon-red)"
        statusText = "Em risco"
        message = "Emergência! Suas finanças estão em <span>risco</span>. O Fino-Bot está com baixo desempenho!"
        mascotStatusClass = "danger"
    }

    const petStyles = {
        "--pet-health-percentage": `${financialHealthPercentage}%`,
        "--pet-health-color": healthColor,
    }

    return (
        <div className="pet-card" style={petStyles}>
            <div className="pet-header" style={{ textAlign: "left", width: "100%" }}>
                <h2 className="pet-title">Seu Companheiro Financeiro</h2>
                <p className="pet-subtitle">Ele reflete sua saúde financeira</p>
            </div>

            <div className="pet-image-container">
                <div className={`fino-bot ${mascotStatusClass}`}>
                    <div className="fino-bot-eye left">
                        <div className="fino-bot-pupil"></div>
                    </div>
                    <div className="fino-bot-eye right">
                        <div className="fino-bot-pupil"></div>
                    </div>
                    <div className="fino-bot-mouth"></div>
                </div>
            </div>

            <div className="pet-state">{statusText}</div>

            <div className="pet-status">
                <h3>Saúde financeira</h3>
                <span className="health-percentage">{financialHealthPercentage}%</span>

                <div className="health-bar-container">
                    <div
                        className="health-bar-fill"
                        style={{
                            width: `${financialHealthPercentage}%`,
                            backgroundColor: healthColor,
                        }}
                    ></div>
                </div>
            </div>

            <p className="pet-message" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
    )
}

export default FinancialPet
