import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthProvider';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
            <Footer />
        </AuthProvider>
    </React.StrictMode>
);
