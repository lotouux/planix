import React, { useState, useMemo, useCallback } from 'react';

// Ícones simulados da lucide-react (assumindo disponibilidade)
const Download = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
const Filter = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>;
const TrendingUp = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
const DollarSign = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 5.74" /></svg>;


// --- Simulação de Dados ---
const mockReports = [
    { id: 1, nome: 'Vendas - Q3 2024', tipo: 'Vendas', data: '2024-09-30', status: 'Concluído', autor: 'Ana Costa' },
    { id: 2, nome: 'Análise de Despesas Jun', tipo: 'Despesas', data: '2024-06-30', status: 'Processando', autor: 'Bruno Silva' },
    { id: 3, nome: 'Tráfego Web Mensal', tipo: 'Tráfego', data: '2024-10-01', status: 'Concluído', autor: 'Carla Leal' },
    { id: 4, nome: 'ROI Campanha Outono', tipo: 'Marketing', data: '2024-10-15', status: 'Pendente', autor: 'David Gomes' },
    { id: 5, nome: 'Feedback do Cliente', tipo: 'Serviços', data: '2024-08-20', status: 'Concluído', autor: 'Eva Neves' },
];

const mockChartData = [
    { name: 'Jan', Vendas: 4000, Despesas: 2400, Tráfego: 2400 },
    { name: 'Fev', Vendas: 3000, Despesas: 1398, Tráfego: 2210 },
    { name: 'Mar', Vendas: 2000, Despesas: 9800, Tráfego: 2290 },
    { name: 'Abr', Vendas: 2780, Despesas: 3908, Tráfego: 2000 },
    { name: 'Mai', Vendas: 1890, Despesas: 4800, Tráfego: 2181 },
    { name: 'Jun', Vendas: 2390, Despesas: 3800, Tráfego: 2500 },
    { name: 'Jul', Vendas: 3490, Despesas: 4300, Tráfego: 2100 },
];

// --- Componente Principal ---
export default function Reports() {
    const [filterType, setFilterType] = useState('Todos');
    const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-12-31' });
    const [searchTerm, setSearchTerm] = useState('');

    // Filtra os relatórios com base no tipo selecionado
    const filteredReports = useMemo(() => {
        return mockReports.filter(report => {
            const matchesType = filterType === 'Todos' || report.tipo === filterType;
            const matchesSearch = report.nome.toLowerCase().includes(searchTerm.toLowerCase());
            // Lógica de filtro por data (simplificada, pois o mockReports não tem datas contínuas)
            return matchesType && matchesSearch;
        });
    }, [filterType, searchTerm]);


    // Função para simular o download
    const handleDownload = useCallback(() => {
        // Aqui estaria a lógica de exportação (ex: CSV, PDF)
        console.log(`Baixando Relatórios com filtro: ${filterType}`);
        // No ambiente real, uma chamada à API seria feita aqui.
        alert('Download do relatório em andamento! (Simulação)');
    }, [filterType]);


    // --- Subcomponentes de UI ---

    const ReportFilters = () => (
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
                <Filter className="w-5 h-5 mr-2 text-indigo-600" />
                Filtros de Relatório
            </h3>
            <div className="space-y-4">

                <div>
                    <label htmlFor="report-type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Relatório</label>
                    <select
                        id="report-type"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    >
                        <option value="Todos">Todos os Tipos</option>
                        <option value="Vendas">Vendas</option>
                        <option value="Despesas">Despesas</option>
                        <option value="Tráfego">Tráfego</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Serviços">Serviços</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="search-term" className="block text-sm font-medium text-gray-700 mb-1">Buscar por Nome</label>
                    <input
                        id="search-term"
                        type="text"
                        placeholder="Ex: Vendas Q3..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="start-date" className="block text-xs font-medium text-gray-700 mb-1">Data Início</label>
                        <input
                            id="start-date"
                            type="date"
                            value={dateRange.start}
                            onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        />
                    </div>
                    <div>
                        <label htmlFor="end-date" className="block text-xs font-medium text-gray-700 mb-1">Data Fim</label>
                        <input
                            id="end-date"
                            type="date"
                            value={dateRange.end}
                            onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        />
                    </div>
                </div>

                <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200 ease-in-out transform hover:scale-[1.01]"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Seleção
                </button>
            </div>
        </div>
    );

    const MetricCard = ({ title, value, change, icon: Icon, color }) => (
        <div className={`p-5 rounded-xl shadow-lg border border-gray-100 bg-white`}>
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div className="mt-1">
                <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
            </div>
            <div className="mt-3 flex items-center text-sm">
                <TrendingUp className={`w-4 h-4 mr-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'} transform ${change < 0 ? 'rotate-180' : ''}`} />
                <span className={`font-semibold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>{change > 0 ? '+' : ''}{change.toFixed(1)}%</span>
                <span className="ml-1 text-gray-500">vs. Mês Passado</span>
            </div>
        </div>
    );


    const ChartSimulation = ({ title, data }) => {
        // Simulação visual de um gráfico de barras e linhas
        const maxVal = Math.max(...data.flatMap(d => [d.Vendas, d.Despesas, d.Tráfego]));

        return (
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

                <div className="h-64 flex flex-col justify-end p-2 relative">
                    {/* Linhas de Referência (Y-Axis) */}
                    <div className="absolute top-0 left-0 w-full h-full border-l border-b border-gray-300 opacity-50">
                        <div className="h-1/3 border-t border-dashed border-gray-200"></div>
                        <div className="h-1/3 border-t border-dashed border-gray-200"></div>
                    </div>

                    {/* Barras/Pontos de Dados */}
                    <div className="flex justify-around items-end h-full">
                        {data.map((d, index) => {
                            const salesHeight = (d.Vendas / maxVal) * 90 + 10; // +10 para base mínima
                            const trafficHeight = (d.Tráfego / maxVal) * 90 + 10;

                            return (
                                <div key={d.name} className="flex flex-col items-center w-1/8 mx-1 h-full justify-end">
                                    {/* Barra de Vendas */}
                                    <div
                                        className="w-4 bg-indigo-500/80 rounded-t-sm"
                                        style={{ height: `${salesHeight}%` }}
                                        title={`Vendas: ${d.Vendas}`}
                                    ></div>
                                    {/* Ponto de Tráfego (simulando linha) */}
                                    <div
                                        className="absolute"
                                        style={{ bottom: `${trafficHeight}%` }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-md ring-2 ring-white" title={`Tráfego: ${d.Tráfego}`}></div>
                                    </div>
                                    <span className="text-xs text-gray-500 mt-1">{d.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-4 flex justify-center space-x-4 text-sm">
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                        <span>Vendas (Barra)</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span>Tráfego (Linha)</span>
                    </div>
                </div>
            </div>
        );
    };


    const RecentReportsTable = ({ reports }) => (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Relatórios Recentes ({filterType !== 'Todos' ? filterType : 'Todos'})</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Tipo</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Autor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {reports.length > 0 ? (
                            reports.map((report) => (
                                <tr key={report.id} className="hover:bg-indigo-50/50 transition duration-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {report.nome}
                                        <div className="text-xs text-gray-500 block sm:hidden">{report.tipo}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{report.tipo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{report.autor}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${report.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                                                report.status === 'Processando' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'}`
                                        }>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={handleDownload}
                                            className="text-indigo-600 hover:text-indigo-900 p-1 rounded-full hover:bg-indigo-50 transition duration-150"
                                            title="Baixar Relatório"
                                        >
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-8 text-center text-gray-500 italic">
                                    Nenhum relatório encontrado para o filtro "{filterType}".
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // --- Renderização Principal ---
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-[Inter]">
            <div className="max-w-7xl mx-auto">

                {/* Cabeçalho */}
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Home Relatórios</h1>
                    <p className="mt-1 text-lg text-gray-500">Gere, filtre e analise os principais dados de desempenho.</p>
                </header>

                {/* Layout Principal: Filtros (Lateral) e Conteúdo (Principal) */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                    {/* Coluna de Filtros (3/12) */}
                    <div className="lg:col-span-3">
                        <ReportFilters />
                    </div>

                    {/* Coluna de Conteúdo (9/12) */}
                    <div className="lg:col-span-9 space-y-8">

                        {/* Cartões de Métricas */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <MetricCard
                                title="Receita Total"
                                value="R$ 1.2M"
                                change={4.5}
                                icon={DollarSign}
                                color="text-green-500"
                            />
                            <MetricCard
                                title="Novos Usuários"
                                value="25.3K"
                                change={-1.2}
                                icon={Users}
                                color="text-indigo-500"
                            />
                            <MetricCard
                                title="Taxa de Conversão"
                                value="3.1%"
                                change={0.8}
                                icon={TrendingUp}
                                color="text-purple-500"
                            />
                        </div>

                        {/* Gráfico Simulado */}
                        <ChartSimulation
                            title={`Desempenho de ${filterType} vs. Tráfego (Últimos 7 Meses)`}
                            data={mockChartData}
                        />

                        {/* Tabela de Relatórios */}
                        <RecentReportsTable reports={filteredReports} />
                    </div>

                </div>
            </div>
        </div>
    );
}
