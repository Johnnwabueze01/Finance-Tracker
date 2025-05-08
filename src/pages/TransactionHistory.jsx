import React from 'react';
import { Link } from 'react-router-dom';
import { useFinance } from '../context/FinanceContext';
import { BiArrowBack } from 'react-icons/bi';

const TransactionHistory = () => {
  const { history } = useFinance();

  return (
    <div className="bg-black bg-[url(/background-i.svg)] h-screen md:h-[100%]">
    <div className="text-white p-10 flex justify-center flex-col md:p-20">
      <div className="md:grid flex gap-15 mb-10  md:grid-cols-3">
      <Link
      to="/home"
      className="flex justify-items-start  items-center"
      >
      <BiArrowBack className="text-white  text-3xl"/>
      </Link>
      <h2 className="md:text-3xl justify-center items-center text-center flex font-bold md:flex">Transaction History</h2>
      </div>
      <ul className="space-y-2 ">
        {history.length === 0 ? (
          <li className="text-gray-500 text-center">No transactions yet.</li>
        ) : (
          history.map((item, idx) => (
            <li
              key={idx}
              className={`p-2 flex justify-center items-center rounded shadow-sm ${
                item.type === 'income' ? 'bg-green-400' : 'bg-red-400'
              }`}
            >
              <span className="font-medium capitalize">{item.type}</span>: ${item.amount} on{' '}
              {new Date(item.date).toLocaleDateString()}
            </li>
          ))
        )}
      </ul>
    </div>
    </div>
  );
};

export default TransactionHistory;


/*import React from 'react'
import { useFinance } from '../context/FinanceContext'

const TransactionHistory = () => {
    const { history } = useFinance();

  return (
    <div className="mt-6 text-white">
        <h2 className="text-lg font-bold mb-2">Transaction History</h2>
        <ul className="space-y-2">
            {history.length === 0 ? (
                <li className="text-gray-500">No Transaction Yet.</li>
            ) : (
                history.map((items, idk) => (
                    <li 
                    key={idx}
                    className={`p-2 rounded shadow-sm ${
                        item.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                    }`}
                    >
                        <span className="font-medium capitalize">{item.type}</span>: ${item.amount} on{' '}
                        {new Date(item.date).toLocaleDateString()}
                    </li>
                ))
            )};
        </ul>
    </div>
  );
};

export default TransactionHistory;*/