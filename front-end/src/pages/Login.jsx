import React, { useState } from 'react';

const API_URL = 'http://localhost:8081/api/auth/login';

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpa o erro anterior
        setIsSubmitting(true);

        if (!email || !password) {
            setError('Por favor, preencha o email e a senha.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const responseText = await response.text();
            let data = {};
            
            if (responseText) {
                try {
                    data = JSON.parse(responseText);
                } catch (jsonError) {
                    console.error('Falha ao parsear JSON:', jsonError);
                    setError('Erro de comunicação. O servidor retornou um formato inesperado. Status: ' + response.status);
                    setIsSubmitting(false);
                    return;
                }
            } else if (!response.ok) {
                 setError('Erro interno do servidor. A resposta estava vazia. Status: ' + response.status);
                 setIsSubmitting(false);
                 return;
            }

            if (response.ok) {
                if (data.userId) {
                    console.log("Login bem-sucedido. ID do Usuário:", data.userId);
                    onLoginSuccess(data.userId);
                } else {
                     setError('Login bem-sucedido, mas ID de usuário não encontrado na resposta do servidor.');
                }
            } else {
                const errorMessage = data.error || `Erro de autenticação. Status: ${response.status}. Tente novamente.`;
                setError(errorMessage);
            }
        } catch (err) {
            console.error('Erro na requisição de login:', err);
            setError('Falha na conexão com o servidor. Verifique sua rede ou a URL da API.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginCard}>
                <h1 style={styles.title}>Planix</h1>
                <p style={styles.subtitle}>Seu companheiro de finanças pessoais</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                            required
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Senha</label>
                        <input
                            type="password"
                            id="password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isSubmitting}
                            required
                        />
                    </div>

                    {error && <p style={styles.errorText}>{error}</p>}

                    <button
                        type="submit"
                        style={styles.button}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <i className="bi bi-arrow-clockwise" style={styles.spinIcon}></i>
                        ) : (
                            <i className="bi bi-box-arrow-in-right"></i>
                        )}
                        {isSubmitting ? ' Entrando...' : ' Entrar'}
                    </button>
                </form>

                <div style={styles.footerLinks}>
                    <a href="#" style={styles.linkStyle}>Esqueceu a Senha?</a> | <a href="#" style={styles.linkStyle}>Criar Conta</a>
                </div>
            </div>
        </div>
    );
}

export default Login;

const styles = {
    loginContainer: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0b0d10 0%, #1a1a1a 100%)',
        color: '#e0e0e0',
    },
    loginCard: {
        maxWidth: '400px',
        width: '90%',
        padding: '40px 30px',
        borderRadius: '10px',
        background: 'rgba(26, 26, 26, 0.8)',
        border: '1px solid #333',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: 'var(--color-neon-green)',
        textShadow: '0 0 10px rgba(76, 200, 136, 0.5)',
        margin: '0 0 5px 0',
    },
    subtitle: {
        fontSize: '1rem',
        color: '#aaa',
        marginBottom: '30px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    inputGroup: {
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '0.9rem',
        color: '#aaa',
    },
    input: {
        width: '100%',
        padding: '12px',
        background: 'var(--color-bg-black)',
        border: '1px solid #444',
        borderRadius: '6px',
        color: '#e0e0e0',
        fontSize: '1rem',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s',
    },
    button: {
        padding: '12px 20px',
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '1rem',
        marginTop: '10px',
        color: 'var(--color-bg-primary)',
        border: 'none',
        boxShadow: '0 0 10px var(--color-neon-green)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        background: 'linear-gradient(45deg, var(--color-neon-green), #60d69b)',
        transition: 'all 0.3s',
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
        color: 'var(--color-neon-red)',
    },
    footerLinks: {
        marginTop: '20px',
        fontSize: '0.9rem',
    },
    linkStyle: {
        color: '#aaa',
        textDecoration: 'none',
        transition: 'color 0.3s',
    },
    spinIcon: {
        animation: 'spin 1s linear infinite',
    },
};

const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);