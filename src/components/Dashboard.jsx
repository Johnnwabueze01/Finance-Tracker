import React from 'react'
import { useFinance } from '../context/FinanceContext';

const Dashboard = () => {
  const { income, expenses } = useFinance();
  const balance = income -expenses; 
  return (
    <div className="p-4 space-y-4 rounded bg-white flex justify-center items-center text-center flex-col">
      <div className="mt-4 md:p-20">
        <div>Income: ${income}</div>
        <div>Expenses: ${expenses}</div>
        <div className="font-bold text-lg mt-2">Balance: ${balance}</div>
      </div>
    </div>
  );
};

export default Dashboard