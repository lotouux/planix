import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Dados fictícios dos últimos 6 meses
const data = [
    { name: 'Abril', Receitas: 4000, Despesas: 2400 },
    { name: 'Maio', Receitas: 3000, Despesas: 1398 },
    { name: 'Junho', Receitas: 5500, Despesas: 4200 },
    { name: 'Julho', Receitas: 4800, Despesas: 3908 },
    { name: 'Agosto', Receitas: 6200, Despesas: 4800 },
    { name: 'Setembro', Receitas: 7000, Despesas: 5500 },
];

// Componente Tooltip Customizado
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="recharts-tooltip-wrapper">
                <p className="label" style={{ color: '#e0e0e0', fontWeight: 'bold' }}>{label}</p>
                <p style={{ color: '#4cc888' }}>Receitas: R$ {payload[0].value.toFixed(2).replace('.', ',')}</p>
                <p style={{ color: '#e44d26' }}>Despesas: R$ {payload[1].value.toFixed(2).replace('.', ',')}</p>
            </div>
        );
    }
    return null;
};

const RevenueExpenseChart = () => {
    return (
        <div className="chart-section">
            {/* Contêiner do Gráfico com Borda Neon e Efeito Hover */}
            <div className="chart-container">

                {/* Título e Subtítulo DENTRO do Gráfico */}
                <div className="chart-internal-header">
                    <h2 className="chart-internal-title">
                        <span>Receitas</span> vs Despesas
                    </h2>
                    <p className="chart-internal-subtitle">Últimos 6 meses</p>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 40, right: 30, left: 20, bottom: 5 }} /* Aumenta a margem superior para o título interno */
                    >
                        {/* Linhas de fundo escuras para o estilo Dark Mode */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#222" />

                        {/* Eixo X (Meses) */}
                        <XAxis dataKey="name" stroke="#aaa" />

                        {/* Eixo Y (Valores) - Ajustado para ser mais discreto */}
                        <YAxis stroke="#222" axisLine={false} tickLine={false} domain={['auto', 'auto']} />

                        {/* Tooltip personalizado */}
                        <Tooltip content={<CustomTooltip />} />

                        {/* Legenda (Receitas e Despesas) - Posicionada no topo, dentro da margem superior */}
                        <Legend
                            verticalAlign="top"
                            height={36}
                            iconType="circle"
                            wrapperStyle={{ color: '#aaa', fontSize: '0.85rem', position: 'absolute', top: '10px', right: '20px' }}
                        />

                        {/* Linha de Receitas (Neon Green) */}
                        <Line
                            type="monotone"
                            dataKey="Receitas"
                            stroke="#4cc888"
                            activeDot={{ r: 8 }}
                            dot={{ stroke: '#4cc888', strokeWidth: 2, r: 4, fill: '#0b0d10' }}
                            strokeWidth={3}
                        />

                        {/* Linha de Despesas (Neon Red/Orange) */}
                        <Line
                            type="monotone"
                            dataKey="Despesas"
                            stroke="#e44d26"
                            activeDot={{ r: 8 }}
                            dot={{ stroke: '#e44d26', strokeWidth: 2, r: 4, fill: '#0b0d10' }}
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueExpenseChart;