import React, { createContext, useContext, useState, useEffect } from 'react';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState(() => Number(localStorage.getItem('income')) || 0);
  const [expenses, setExpenses] = useState(() => Number(localStorage.getItem('expenses')) || 0);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('history')) || []);

  const addIncome = (amount) => {
    setIncome((prev) => prev + amount);
    setHistory((prev) => [...prev, { type: 'income', amount, date: new Date().toISOString() }]);
  };

  const addExpense = (amount) => {
    setExpenses((prev) => prev + amount);
    setHistory((prev) => [...prev, { type: 'expense', amount, date: new Date().toISOString() }]);
  };

  useEffect(() => {
    localStorage.setItem('income', income);
    localStorage.setItem('expenses', expenses);
    localStorage.setItem('history', JSON.stringify(history));
  }, [income, expenses, history]);

  return (
    <FinanceContext.Provider value={{ income, expenses, history, addIncome, addExpense }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);