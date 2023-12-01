import React from 'react'
import './App.scss'
import AppLayout from './components/layout/AppLayout/AppLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/pages/Products/Products'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
