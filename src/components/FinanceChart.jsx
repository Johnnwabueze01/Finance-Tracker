import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { useFinance } from '../context/FinanceContext'

const COLORS = ['#22c55e', '#ef4444'];

const FinanceChart = () => {
    const { income, expenses } = useFinance();

    const data = [
        { name: 'Income', value: income },
        { name: 'Expenses', value: expenses }
    ];
  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
        <h2 className="text-lg font-bold mb-4">
            Spending Overview
        </h2>
        <PieChart width={300} height={250}>
            <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            outerRadius={80}
            label dataKey="value">
                {data.map((entry, idx) => (
                    <Cell key={idx}
                    fill={COLORS[idx]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    </div>
  )
}

export default FinanceChart