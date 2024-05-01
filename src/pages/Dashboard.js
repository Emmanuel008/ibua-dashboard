import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='main'>
      <Sidebar/>
      <Header/>
      <Outlet />
    </div>
  )
}

export default Dashboard
