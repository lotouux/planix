// Seleciona os elementos necessários
const notificationToggle = document.getElementById('notification-toggle');
const notificationPanel = document.getElementById('notification-panel');
const closePanelButton = document.getElementById('close-panel');
const panelOverlay = document.getElementById('panel-overlay');

// Função para abrir o painel
function openPanel() {
    notificationPanel.classList.add('active');
    panelOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita a rolagem do corpo
}

// Função para fechar o painel
function closePanel() {
    notificationPanel.classList.remove('active');
    panelOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura a rolagem do corpo
}

// Adiciona listener de clique no ícone do sino
if (notificationToggle) {
    notificationToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o link de navegar
        // Alterna entre abrir e fechar
        if (notificationPanel.classList.contains('active')) {
            closePanel();
        } else {
            openPanel();
        }
    });
}

// Adiciona listener para fechar o painel ao clicar no botão X
if (closePanelButton) {
    closePanelButton.addEventListener('click', closePanel);
}

// Adiciona listener para fechar o painel ao clicar no overlay de fundo
if (panelOverlay) {
    panelOverlay.addEventListener('click', closePanel);
}

// Toggle da navbar 
const toggle = document.getElementById('navbar-toggle');
const links = document.querySelector('.navbar-links');
const actions = document.querySelector('.navbar-actions');

if (toggle && links && actions) {
    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
        actions.classList.toggle('active');
    });
}
