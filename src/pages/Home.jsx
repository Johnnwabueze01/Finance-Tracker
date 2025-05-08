import React from 'react'
import IncomeExpenceForm from '../components/IncomeExpenceForm'
import Dashboard from '../components/Dashboard'
import FinanceChart from '../components/FinanceChart'
import Logo from "/logo.png"

const Home = () => {
  return (
    <div>
       <div className="text-white bg-[#000000ec] fixed w-full  px-0 py-0 flex justify-between">
              <div className="text-white text-2xl flex justify-center items-center">
                  <img src={Logo}  alt="Logo" width={130}  />
                  <h2>Finance Tracker</h2>
              </div>
          </div>
    <div className="rounded text-center flex flex-col bg-black bg-[url(/background-i.svg)] justify-center items-center ">
      
      <div className="text-white text-2xl flex justify-center items-center">
                    <img src={Logo}  alt="Logo" width={130}  />
                    <h2>Finance Tracker</h2>
                </div>
      <div className="md:p-30 p-10">
      <div className="text-3xl text-white mb-10 font-semibold">Finance Dashboard</div>
        <IncomeExpenceForm />
        <div className="md:flex justify-between items-center">
        <Dashboard />
        <FinanceChart />
        </div>
        </div>
        <footer className="text-white text-center">
      &copy 2025 John Nwabueze
    </footer>
    </div>
    </div>
  )
}

export default Home