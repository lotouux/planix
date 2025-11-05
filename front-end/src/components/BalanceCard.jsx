export default function BalanceCard({ title, value, change, iconClass, colorVar, colorDegrade }) {
    const style = {
        "--card-color": colorVar,
        "--card-degrade": colorDegrade,
    }

    const isPositive = change.startsWith("+")
    const changeIcon = isPositive ? "bi-arrow-up-right" : "bi-arrow-down-right"

    return (
        <div className="balance-card" style={style}>
            <div className="card-header">
                <span className="card-title">{title}</span>
                <i className={`card-icon bi ${iconClass}`}></i>
            </div>
            <div className="card-value">{value}</div>
            <div className={`card-change ${isPositive ? "positive" : "negative"}`}>
                <i className={`bi ${changeIcon}`}></i>
                <span className="change-text">{change} vs Mês Anterior</span>
            </div>
        </div>
    )
}
