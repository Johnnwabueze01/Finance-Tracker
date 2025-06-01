import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Home from "./pages/Home";
import Display from "./pages/Display";
import TransactionHistory from "./pages/TransactionHistory";

function App() {
  const { user } = useAuth();

  return (
    <FinanceProvider>
      <div>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/login" element={<Login />} />
          {/*
          <Route path="/" element={user ? <Display /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />*/}
          <Route path="/home" element={<Home />} />
          <Route path="/transactionhistory" element={<TransactionHistory />} />
        </Routes>
      </div>
    </FinanceProvider>
  );
}

export default App;
