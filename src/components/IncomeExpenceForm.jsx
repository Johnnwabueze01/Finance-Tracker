import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const { addIncome, addExpense } = useFinance();

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = Number(amount);
    if (val <= 0) return;
    type === 'income' ? addIncome(val) : addExpense(val);
    setAmount('');
  };

  return (
    <div className="text- rounded bg-white">
      <div className="flex justify-between md:px-5 px-2 py-2 md:py-2">
        <Link
        to="/"
        className=""
        >
        <BiArrowBack className="text-3xl font-bold" />
        </Link>
        <Link
        to="/transactionhistory"
        >
          <button className="bg-green-700 hover:bg-green-500 p-2 text-white flex justify-center items-center gap-3 rounded-4xl">
            Transaction History
            <BsArrowRight />
            </button>
        </Link>
      </div>
    <form onSubmit={handleSubmit} className="md:py-20 px-5 py-5 md:px-50 space-y-4 mb-6">
      <h2 className="text-2xl font-bold">Your Financial Journey Starts Here</h2>
      <input
        type="number"
        placeholder="Enter amount"
        className="border p-2 rounded w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="border p-2 rounded w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="bg-green-600 hover:bg-green-400 cursor-pointer transition-all ease-in text-white px-4 py-2 rounded-xl w-full">
        Add {type}
      </button>
    </form>
    </div>
  );
};

export default IncomeExpenseForm;
