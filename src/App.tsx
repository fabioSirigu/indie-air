import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Airports } from './pages/Airports'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/airports" element={<Airports />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
