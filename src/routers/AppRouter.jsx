import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { Welcome } from '../pages/Welcome'
import { DashboardsRoutes } from './DashboardsRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/*' element={<DashboardsRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
