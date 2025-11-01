// C:\Users\beatr\planix\src\main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './app/global.css'; // Vamos colocar o CSS aqui

// O arquivo HTML principal do seu projeto deve ter um <div id="root"></div>
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)