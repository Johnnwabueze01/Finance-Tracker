import React from 'react'
import Logo from "/logo.png"
import Hero from "/ilu.png"
import { Link } from 'react-router-dom'

const Display = () => {
  return (
    <div className="bg-black bg-[url(/background-i.svg)]">
    <div className="text-white bg-[#000000ec] fixed w-[100%] md:px-5 md:py-4 flex justify-between">
        <div className="text-white md:text-2xl flex justify-center items-center">
            <img src={Logo}  alt="Logo" width={130}  />
            <h2>Finance Tracker</h2>
        </div>
        <div className="text-center flex justify-center items-center">
           <Link 
           to="/home"
           className="bg-green-800 p-2 rounded-3xl ">Start Tracking</Link>
        </div>
    </div>
    <div className="md:flex justify-between items-center md:h-screen">
      <div className="text-white p-25">
        <h2 className="md:text-6xl md:w-159 text-green-700 font-bold">Track Your Transaction</h2>
        <p className="px-3">Track your income, expenses, and savings — all in one place.</p>
      </div>
      <div>
        <img src={Hero} alt="Hero_Img" />
      </div>
    </div>
    <div className="flex flex-col md:p-10 gap-6">
    <h1 className="text-white md:text-4xl font-bold">We Help You With ?</h1>
    <div className="md:flex gap-6 justify-center items-center">
      <div className="text-center items-center flex flex-col rounded-xl justify-center text-white bg-green-400">
        <img src="/cost.png" className="p-2" width={70} alt="icon1" />
        <h2 className="text-xl font-bold text-black">Tracking Income and Expenses</h2>
        <p className="p-5">Easily log your earnings and spending to monitor financial activity in real-time.</p>
      </div>
      <div className="text-center items-center flex flex-col rounded-xl justify-center text-white bg-green-400">
      <img src="/report.png" className="p-2" width={70} alt="icon2" />
        <h2 className="text-xl font-bold text-black">Visualize Financial History</h2>
        <p className="p-5">View past transactions and trends to understand where your money goes.</p>
      </div>
      <div className="text-center items-center flex flex-col rounded-xl justify-center text-white bg-green-400">
      <img src="/budge.png" className="p-2" width={70} alt="icon3" />
        <h2 className="text-xl font-bold text-black">Simple Budget Management</h2>
        <p className="p-5">Maintain better control over your finances with a clean, user-friendly interface.</p>
      </div>
    </div>
    </div>
    <footer className="text-white text-center">
     © 2025 John Nwabueze.
    </footer>
    </div>
  )
}

export default Display