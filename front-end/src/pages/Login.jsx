import React, { useState } from 'react';

// Se você estiver usando um bundler como Webpack/Vite,
// você importaria o seu CSS global aqui para aplicar as variáveis e resets.
// Ex: import './caminho/para/seu/GlobalStyles.css';

/**
 * Componente de Tela de Login
 * @param {function} onLoginSuccess - Função chamada quando o login é bem-sucedido para mudar o estado de autenticação no App.jsx.
 */
function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            setIsSubmitting(false);
            return;
        }

        // Simulação de requisição (substitua pela sua lógica de API real)
        setTimeout(() => {
            // ⚠️ Use credenciais fixas para a simulação:
            if (email === 'teste@mail.com' && password === 'senha123') {

                // 🚀 CHAMA A FUNÇÃO PARA MUDAR O ESTADO DE isLogado = true NO APP.JSX
                onLoginSuccess();

                // Mensagem de sucesso opcional
                alert('Login bem-sucedido! Redirecionando para o Dashboard...');
            } else {
                // Usamos o estilo de alerta de erro do tema (cor neon-red)
                setError('E-mail ou senha inválidos.');
            }
            setIsSubmitting(false);
        }, 1500);
    };

    /* O container principal emula o 'body' centralizando o card.
      O card de login usa a classe .transactions-container para o fundo escuro e borda neon.
      Os inputs usam a classe '.search-field-style' para herdar o estilo de campo.
      O botão usa estilos adaptados de '.btn-neon-goal'.
    */
    return (
        <div style={styles.loginPage}>
            {/* Container que simula um card de dashboard para o formulário. */}
            <div className="transactions-container" style={styles.loginCard}>

                {/* Título de Login usando o estilo de título de dashboard */}
                <div className="transactions-header" style={{ marginBottom: '30px' }}>
                    <h2 className="transactions-title" style={{ fontSize: '1.8rem' }}>
                        Acesso <span style={{ color: 'var(--color-neon-green)' }}>Seguro</span>
                    </h2>
                    <p className="current-page" style={{ color: '#aaa' }}>
                        Entre na sua conta.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>

                    {/* Campo de E-mail */}
                    <div className="search-field-style" style={styles.inputGroup}>
                        {/* Ícone de envelope (Você precisa garantir que o Bootstrap Icons (bi) esteja incluído no seu projeto) */}
                        <i className="bi bi-envelope-fill" style={{ color: '#aaa' }}></i>
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="search-input" // Usa o estilo do input de pesquisa para o campo
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Campo de Senha */}
                    <div className="search-field-style" style={styles.inputGroup}>
                        {/* Ícone de cadeado */}
                        <i className="bi bi-lock-fill" style={{ color: '#aaa' }}></i>
                        <input
                            type="password"
                            placeholder="Senha"
                            className="search-input" // Usa o estilo do input de pesquisa para o campo
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Mensagem de Erro */}
                    {error && (
                        <p className="transaction-type-expense" style={styles.errorText}>
                            <i className="bi bi-exclamation-triangle-fill"></i> {error}
                        </p>
                    )}

                    {/* Botão de Login */}
                    <button
                        type="submit"
                        className="btn-neon-goal"
                        style={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <i className="bi bi-arrow-repeat" style={styles.spinIcon}></i> Entrando...
                            </>
                        ) : (
                            'Entrar'
                        )}
                    </button>

                    {/* Links de rodapé */}
                    <div style={styles.footerLinks}>
                        <a href="#" className="current-page" style={styles.linkStyle}>
                            Esqueceu a senha?
                        </a>
                        <span style={{ color: '#444' }}>&nbsp;|&nbsp;</span>
                        <a href="#" className="current-page" style={styles.linkStyle}>
                            Criar Conta
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Estilos embutidos (inline styles) para regras de layout.
const styles = {
    loginPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    loginCard: {
        padding: '40px',
        maxWidth: '400px',
        height: 'auto',
        minHeight: 'auto',
        boxShadow: '0 0 15px rgba(76, 200, 136, 0.5)',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
    },
    inputGroup: {
        padding: '10px 15px',
        width: '100%',
    },
    submitButton: {
        width: '100%',
        padding: '12px',
        fontSize: '1.1rem',
        fontWeight: '600',
        // Usa variáveis CSS do seu tema (necessário que o CSS esteja carregado)
        backgroundColor: 'var(--color-neon-green)',
        color: 'var(--color-bg-primary)',
        border: 'none',
        boxShadow: '0 0 10px var(--color-neon-green)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
    },
    errorText: {
        textAlign: 'left',
        fontSize: '0.9rem',
        marginTop: '-10px',
        borderLeft: '3px solid var(--color-neon-red)',
        paddingLeft: '10px',
        backgroundColor: 'rgba(228, 77, 38, 0.1)',
        borderRadius: '4px',
        padding: '8px',
    },
    footerLinks: {
        marginTop: '10px',
        fontSize: '0.9rem',
    },
    linkStyle: {
        color: '#aaa',
        textDecoration: 'none',
    },
    spinIcon: {
        animation: 'spin 1s linear infinite',
    },
};

// Injeção da keyframe 'spin' (necessário se o seu CSS global não a incluir)
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.btn-neon-goal:hover:not(:disabled) {
  background-color: #61d999; 
  box-shadow: 0 0 20px var(--color-neon-green);
  transform: translateY(-2px);
}
`;
// Verifica se o estilo já foi injetado para evitar duplicidade
if (!document.head.querySelector('style[data-login-styles]')) {
    styleSheet.setAttribute('data-login-styles', 'true');
    document.head.appendChild(styleSheet);
}

export default Login;