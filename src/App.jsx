import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Display from "./pages/Display";
import TransactionHistory from "./pages/TransactionHistory";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <FinanceProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Display /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactionhistory" element={<TransactionHistory />} />
        </Routes>
      </div>
    </FinanceProvider>
  );
}

export default App;
