// src/components/BalanceCard.jsx
import React from 'react';

// Este componente aceita props para ser reutilizável:
// - title: Título do card (ex: "Saldo Total")
// - value: O valor principal (ex: "R$ 15.500,00")
// - change: A mudança percentual (ex: "+2.5%")
// - iconClass: Classe do ícone Bootstrap (ex: "bi-wallet2")
// - colorVar: A variável CSS da cor neon (ex: "var(--color-neon-green)")
// - colorDegrade: A variável CSS do degrade principal (ex: "var(--degrade-subtle-green)")

export default function BalanceCard({ title, value, change, iconClass, colorVar, colorDegrade }) {

    // Define a cor de contraste/brilho para o ícone e a mudança percentual
    const style = {
        '--card-color': colorVar,
        '--card-degrade': colorDegrade,
    };

    // Determina o ícone de seta para a mudança percentual
    const isPositive = change.startsWith('+');
    const changeIcon = isPositive ? "bi-arrow-up-right" : "bi-arrow-down-right";

    return (
        <div className="balance-card" style={style}>
            <div className="card-header">
                {/* Título do Card (Pequeno e Cinza) */}
                <span className="card-title">{title}</span>

                {/* Ícone com Cor e Brilho (Estilizado via CSS) */}
                <i className={`card-icon bi ${iconClass}`}></i>
            </div>

            {/* Valor Principal (Grande) */}
            <div className="card-value">{value}</div>

            {/* Mudança Percentual (Pequena, mais próxima ao valor) */}
            <div className={`card-change ${isPositive ? 'positive' : 'negative'}`}>
                <i className={`bi ${changeIcon}`}></i>
                <span className="change-text">{change} vs Mês Anterior</span>
            </div>
        </div>
    );
}