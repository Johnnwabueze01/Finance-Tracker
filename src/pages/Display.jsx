import React from 'react'
import Logo from "/logo.png"
import Hero from "/ilu.png"
import { Link } from 'react-router-dom'

const Display = () => {
  return (
    <div className="">
    <div className="border-1 border-black m-5 rounded-2xl p-5 md:px-10 md:py-5 flex justify-between items-center">
        <div className="flex md:gap-4 items-center">
            <img src={Logo}  alt="Logo" width={60}  />
            <h2 className="md:text-3xl">Finance Tracker</h2>
        </div>
        <div className="text-center flex gap-5">
          <Link 
           to="/login"
           className="border-1 px-8 py-2 bg-black text-white hover:bg-gray-800 cursor-pointer rounded-xl ">Get Started</Link>
           <Link 
           to="/login"
           className="border-1 px-8 py-2 hover:bg-gray-950 hover:text-white cursor-pointer rounded-xl ">Login</Link>
        </div>
    </div>
    <div className="md:flex justify-between items-center md:h-screen">
      <div className="text-white py-15 px-5 md:p-25">
        <h2 className="md:text-6xl text-3xl md:w-159 text-green-700 font-bold">Track Your Transaction</h2>
        <p className="px-3">Track your income, expenses, and savings — all in one place.</p>
      </div>
      <div>
        <img src={Hero} alt="Hero_Img" />
      </div>
    </div>
    <div className="flex flex-col p-5 md:p-10 gap-6">
    <h1 className="text-white text-2xl md:text-4xl font-bold">We Help You With ?</h1>
    <div className="md:flex gap-6 justify-center items-center">
      <div className="text-center items-center mb-5 flex flex-col rounded-xl justify-center text-white bg-green-400">
        <img src="/cost.png" className="p-2" width={70} alt="icon1" />
        <h2 className="text-xl font-bold text-black">Tracking Income and Expenses</h2>
        <p className="p-5">Easily log your earnings and spending to monitor financial activity in real-time.</p>
      </div>
      <div className="text-center items-center mb-5 flex flex-col rounded-xl justify-center text-white bg-green-400">
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