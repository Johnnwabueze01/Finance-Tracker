import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'
import { FinanceProvider } from './context/FinanceContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <AuthProvider>
    <FinanceProvider>
      <App />
      </FinanceProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
);
