import React from 'react'
import './AppLayoutStyles.scss'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AppLayout: React.FC = () => {
  return (
    <div className='app-layout'>
      <main className='app-layout__content'>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  )
}

export default AppLayout
