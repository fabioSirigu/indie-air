import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useGetAuthTokenMutation } from './features/api/authApi'
import { Airports } from './pages/Airports'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  const [getToken, { data }] = useGetAuthTokenMutation()
  console.log('🚀 ~ file: App.tsx:11 ~ App ~ data:', data)

  useEffect(() => {
    getToken()
  }, [getToken])
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
