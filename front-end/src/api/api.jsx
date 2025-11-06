import axios from 'axios';

// Configuração da base URL da API
const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// AUTH CONTROLLER - /auth
export const authApi = {
    login: (email, password) =>
        api.post('/auth/login', { email, password }),
};

// USER/PROFILE CONTROLLER - /users
export const userApi = {
    fetchUserData: (userId) =>
        api.get(`/users/${userId}`),

    updateUserData: (userId, userDetails) =>
        api.put(`/users/${userId}`, userDetails),
};

// ANALYSIS CONTROLLER - /analysis
export const analysisApi = {
    fetchTotalBalance: (userId) =>
        api.get(`/analysis/user/${userId}/total-balance`),

    fetchSpendingByCategory: (userId) =>
        api.get(`/analysis/user/${userId}/spending-by-category`),
};

// TRANSACTION CONTROLLER - /transactions
export const transactionApi = {
    fetchUserTransactions: () =>
        api.get('/transactions/'),

    createTransaction: (transaction) =>
        api.post('/transactions/', transaction),

    deleteTransaction: (transactionId) =>
        api.delete(`/transactions/${transactionId}`),
};

// GOAL CONTROLLER - /goals
export const goalApi = {
    fetchUserGoals: () =>
        api.get('/goals'),

    createGoal: (goal) =>
        api.post('/goals', goal),

    contributeToGoal: (goalId, amount) =>
        api.post(`/goals/${goalId}/contribute?amount=${amount}`),
};

// NOTIFICATION CONTROLLER - /notifications
export const notificationApi = {
    fetchNotifications: () =>
        api.get('/notifications/'),

    fetchUnreadCount: () =>
        api.get('/notifications/unread/count'),

    markAllAsRead: () =>
        api.put('/notifications/read-all'),
};

// SETTINGS CONTROLLER - /settings
export const settingsApi = {
    updatePreferences: (userId, preferences) =>
        api.put(`/settings/user/${userId}/preferences`, { preferences }),
};